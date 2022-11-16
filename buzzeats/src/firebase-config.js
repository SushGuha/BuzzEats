// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBheb8Vk4_mXTYN7oPbaJ3Oz4Hsof-73wY",
  authDomain: "buzz-eats.firebaseapp.com",
  databaseURL: "https://buzz-eats-default-rtdb.firebaseio.com",
  projectId: "buzz-eats",
  storageBucket: "buzz-eats.appspot.com",
  messagingSenderId: "441550163261",
  appId: "1:441550163261:web:becd10a16e4870db57c954",
  measurementId: "G-P3PH3XP8LK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
