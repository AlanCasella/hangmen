import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmZTf8ngfcuBgk3-9HF48gQ2BHiYCFqk8",
    authDomain: "hangmen-6ccc5.firebaseapp.com",
    projectId: "hangmen-6ccc5",
    storageBucket: "hangmen-6ccc5.appspot.com",
    messagingSenderId: "417090856451",
    appId: "1:417090856451:web:c11d39bee6f31a79ad1036",
    measurementId: "G-ZKN0NWVHNL"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
