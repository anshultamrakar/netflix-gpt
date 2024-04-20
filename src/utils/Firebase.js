// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOIGo0MJfGkcLRnhga-Hx_piJEKlgHOY",
  authDomain: "netflixgpt-67bb6.firebaseapp.com",
  projectId: "netflixgpt-67bb6",
  storageBucket: "netflixgpt-67bb6.appspot.com",
  messagingSenderId: "36736983789",
  appId: "1:36736983789:web:98138972d14ac21d1ae2e4",
  measurementId: "G-EZ8BM4D3HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
