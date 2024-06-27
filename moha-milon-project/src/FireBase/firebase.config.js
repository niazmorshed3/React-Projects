// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqQfBEmEhrYUfpvOno7Fu5DKJ7xkFGxHA",
  authDomain: "moha-milon-project-9718d.firebaseapp.com",
  projectId: "moha-milon-project-9718d",
  storageBucket: "moha-milon-project-9718d.appspot.com",
  messagingSenderId: "866883702825",
  appId: "1:866883702825:web:1988362449e696d7624c38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
