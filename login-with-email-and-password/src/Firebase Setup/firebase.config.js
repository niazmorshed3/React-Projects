// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8LeZPfpVoFrnUHJYjS5gtU5dSVQNxq3I",
  authDomain: "login-with-email-and-pas-eebb9.firebaseapp.com",
  projectId: "login-with-email-and-pas-eebb9",
  storageBucket: "login-with-email-and-pas-eebb9.appspot.com",
  messagingSenderId: "299210830068",
  appId: "1:299210830068:web:a64a809ba50a1e4619eea1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
