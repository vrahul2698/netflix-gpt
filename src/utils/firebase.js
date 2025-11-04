// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATaTGL72iIuLK_NJxHT4gAzyHOWAP10E0",
  authDomain: "netflixgpt-6c6f4.firebaseapp.com",
  projectId: "netflixgpt-6c6f4",
  storageBucket: "netflixgpt-6c6f4.firebasestorage.app",
  messagingSenderId: "1054390050350",
  appId: "1:1054390050350:web:43c9c34376ac787ace49bf",
  measurementId: "G-WQNN89BBV5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();