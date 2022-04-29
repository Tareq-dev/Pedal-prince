// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALk1XUuOtjaRiB650dE3XbfBR2yoJPUeI",
  authDomain: "pedal-prince.firebaseapp.com",
  projectId: "pedal-prince",
  storageBucket: "pedal-prince.appspot.com",
  messagingSenderId: "702188916740",
  appId: "1:702188916740:web:d800d5136a5a2a63fd2551"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;