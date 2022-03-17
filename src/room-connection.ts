import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvKGU8jFUoI4em5KDVsbGIoDgDr4t2rQA",
  authDomain: "workshop-fe-chat.firebaseapp.com",
  databaseURL: "https://workshop-fe-chat.firebaseio.com",
  projectId: "workshop-fe-chat"
};


firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();


export async function sendMessage(username, message) {
  if (!username || !message) {
    console.info('Please provide a username and message to send');
    return;
  }

  return db.collection("chat").add({
    username: username,
    message: message,
    timestamp: new Date()
  }).then(() => console.log("Message sent:", username, message)).catch(err => console.error('Something went wrong!', err));
}


export function onMessagesUpdated(callbackFn) {
  const db = firebase.firestore();
  db.collection("chat").onSnapshot(snapshot => {
    let messages = [];
    snapshot.docs.forEach(d => {
      const data = d.data();
      messages.push({
        username: data.username,
        message: data.message,
        timestamp: data.timestamp
          ? new Date(data.timestamp.seconds * 1000)
          : null
      });
      messages = messages.sort((a, b) => b.timestamp - a.timestamp);
    });

    callbackFn(messages);
  });
}
