import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKDUc1PmL5A_f5VFUSIqeKDNITRJX7GoE",
  authDomain: "notificationapp-53447.firebaseapp.com",
  databaseURL: "https://notificationapp-53447.firebaseio.com",
  projectId: "notificationapp-53447",
  storageBucket: "notificationapp-53447.appspot.com",
  messagingSenderId: "1063981834637",
  appId: "1:1063981834637:web:c1ed2f7d02fd0bf8f29dc4",
  // measurementId: "G-R8FL7174V8",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("tok");
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
