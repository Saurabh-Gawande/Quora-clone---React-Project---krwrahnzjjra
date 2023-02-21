// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDdXYnqQClSzQhigrV8-VVNIcasCIk1Zb8",
    authDomain: "quora-clone-cd6d6.firebaseapp.com",
    projectId: "quora-clone-cd6d6",
    storageBucket: "quora-clone-cd6d6.appspot.com",
    messagingSenderId: "801743960455",
    appId: "1:801743960455:web:f8d6f21b81a4d44c5bbb22",
    measurementId: "G-TE2JPYNVT1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
