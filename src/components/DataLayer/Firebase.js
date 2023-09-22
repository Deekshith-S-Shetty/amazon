import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQwteUDvc-n-Yg0fPeF8ZrHFtW2sKhbjg",
  authDomain: "fir-2bbb7.firebaseapp.com",
  projectId: "fir-2bbb7",
  storageBucket: "fir-2bbb7.appspot.com",
  messagingSenderId: "416008933789",
  appId: "1:416008933789:web:420fef83a43c966bcc1f74",
  measurementId: "G-72CYF46Z4F",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
