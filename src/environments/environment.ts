// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqrWQeTotgdTxQcApBulpWZNfl6lJrTIk",
  authDomain: "app2023a-d8589.firebaseapp.com",
  databaseURL: "https://app2023a-d8589-default-rtdb.firebaseio.com",
  projectId: "app2023a-d8589",
  storageBucket: "app2023a-d8589.appspot.com",
  messagingSenderId: "216614918710",
  appId: "1:216614918710:web:2cec82f949ab6d8fc91697",
  measurementId: "G-FB557X3SVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);