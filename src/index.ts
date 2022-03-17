import { html, css, LitElement } from 'lit';
import { map } from 'lit/directives/map.js';
import { customElement, property } from 'lit/decorators.js';
import { sendMessage, onMessagesUpdated } from './room-connection';

// Check out README.md for the instructions

// TODO: Your new component(s) go here! You can render them from the App component
@customElement('chat-box')
class ChatBox extends LitElement {

  @property()
  messages = [];

  constructor() {
    super();
    onMessagesUpdated((messages) => {
      this.messages = messages;
    });
  }

  render() {
    return html`
          <ul>

        ${map(this.messages, (i) => html`<li>${i}</li>`)}

      </ul>
    `;
  }

}

@customElement('chat-input')
class ChatInput extends LitElement {

  _handleForm(e) {
    e.preventDefault();
    const form = e.target;
    sendMessage(form.username.value, form.message.value);
  }

  render() {
    return html`
      <form @submit="${this._handleForm}">
        <input type="text" name="username">
        <input type="text" name="message">
        <button type="submit">Verzend</button>
      </form>
    `;
  }
}


@customElement('lit-app')
class App extends LitElement {
  @property({type: String})
  title = 'Realtime Chat';

  static styles = css`
    :host {
      font-family: sans-serif;
      display: block;
      padding: 20px;
    }

    h1 {
      color: #00a667;
    }
  `;

  render() {
    return html`
      <h1>${this.title}</h1>
      <chat-box></chat-box>
      <chat-input></chat-input>
    `;
  }
}

































/**



  👀 Looking for an internship or job at the best employer in the Netherlands? 👀
                        👉 https://arcady.nl/ 👈



*/
