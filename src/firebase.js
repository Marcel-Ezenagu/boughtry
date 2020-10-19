import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJ6dOCsY_VcwjArTtpD5Z6sn8eZdxlwL0",
    authDomain: "clone-d62eb.firebaseapp.com",
    databaseURL: "https://clone-d62eb.firebaseio.com",
    projectId: "clone-d62eb",
    storageBucket: "clone-d62eb.appspot.com",
    messagingSenderId: "254104437692",
    appId: "1:254104437692:web:22fac2829898883fdd61b9",
    measurementId: "G-LKMN4NCHN7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
