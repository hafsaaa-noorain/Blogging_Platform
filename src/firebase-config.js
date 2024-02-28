// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA4StqzN1wV9XKAs3tKIHaClcjx6brTIg",
  authDomain: "blogproject-a55a6.firebaseapp.com",
  projectId: "blogproject-a55a6",
  storageBucket: "blogproject-a55a6.appspot.com",
  messagingSenderId: "1066877262298",
  appId: "1:1066877262298:web:65e284a6b21d98940848e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();