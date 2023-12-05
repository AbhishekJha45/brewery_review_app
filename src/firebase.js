// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTh7TBrGGfIekzmu8qkaUwu_2hJZzZFAw",
  authDomain: "brewery-auth-a8b2c.firebaseapp.com",
  projectId: "brewery-auth-a8b2c",
  storageBucket: "brewery-auth-a8b2c.appspot.com",
  messagingSenderId: "1083646688496",
  appId: "1:1083646688496:web:4f4a728fac81c59eca5635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};