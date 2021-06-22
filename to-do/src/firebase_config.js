import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAYx_rotpxcsBF4J-VbokC7roFeEjCxYPo",
    authDomain: "to-do-c5b94.firebaseapp.com",
    projectId: "to-do-c5b94",
    storageBucket: "to-do-c5b94.appspot.com",
    messagingSenderId: "987588167986",
    appId: "1:987588167986:web:a0af4a401874eea9566f2b"
  };

firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();

export {db};