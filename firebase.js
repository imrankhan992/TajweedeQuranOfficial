// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTUq8xt3J04gbTsZKD7FjF7P9Ndycayqg",
  authDomain: "tajweedequranofficial.firebaseapp.com",
  projectId: "tajweedequranofficial",
  storageBucket: "tajweedequranofficial.firebasestorage.app",
  messagingSenderId: "584553840281",
  appId: "1:584553840281:web:ad640d317b98a0344e4208",
  measurementId: "G-NCES4G4KEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);