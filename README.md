# Web Components Workshop

Thanks for joining this web components workshop! 

## Time to build something.
 1. Create a new component similar to the `App` component
 2. It should have input fields for the username and message, and a button to send
 3. Render your component in the page by adding the tag in the `render` function in `App`
 4. When you click a button or press enter, it should send the message using `sendMessage(...)`

#### How to send a message
`sendMessage('Username', 'The message goes here');`

#### How to get the value of an `<input>` element

There's multiple ways! The easiest is to use the querySelector to get the
element you want to access: `const element = this.shadowRoot.querySelector('element-name');`

From there, you can use `element.someProperty` to access the data.

Alternatively, you can wrap `<input>` elements in a `<form>` and use the wrapper
to get all of the form data at once.

There's more examples at the [lit.dev playground](https://lit.dev/playground/#sample=examples/properties-has-changed)

## Need help?
Check out the docs: [lit.dev/docs](https://lit.dev/docs/)
or ask the trainer!

## Got some time left? Here are some ideas.
 - Add some styling using [lit.dev/docs/components/styles](https://lit.dev/docs/components/styles/)
 - Clear the message field when you send the message so the user can continue typing
 - Disable the "Send" button until the user has filled in both their username and message
 - Implement the receiving of messages and render them in the page in real-time

To receive updates on when the messages change, you can use `onMessagesUpdated`
and pass a callback function that will execute whenever a new message is added.

```js
onMessagesUpdated((messages) => {
  // Do something with the array of messages
  console.log(messages);
});
```