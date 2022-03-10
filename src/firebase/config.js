import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBZ4d92I3iQOkMG34BwvpMH-pbBzLDdDwM",
    authDomain: "mymoney-b7679.firebaseapp.com",
    projectId: "mymoney-b7679",
    storageBucket: "mymoney-b7679.appspot.com",
    messagingSenderId: "838094144972",
    appId: "1:838094144972:web:18c7505975efc7632f4969"
  };

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore().Timestamp;

export {
    projectFirestore,
    projectAuth,
    timestamp
}