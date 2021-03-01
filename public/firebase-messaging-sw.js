importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
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

firebase.messaging();
