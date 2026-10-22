importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
// index.html wali same firebaseConfig yahan paste karo
firebase.initializeApp({
  apiKey: "AIzaSyAt_4wg-l98Vkcw98m-aRAGv2ODnqSXJ6U",
  authDomain: "nexora-arena-a7d6c.firebaseapp.com",
  projectId: "nexora-arena-a7d6c",
  appId: "1:744518988903:web:5b431b8694b5b318aa10c2",
  messagingSenderId: "744518988903"
});
firebase.messaging();
