// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiloi8iOyV0ThzuKbPBJr107vyVogp4Po",
  authDomain: "note-app-goros.firebaseapp.com",
  projectId: "note-app-goros",
  storageBucket: "note-app-goros.appspot.com",
  messagingSenderId: "212165453975",
  appId: "1:212165453975:web:4f0e0adea038c0a4e361d2"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );