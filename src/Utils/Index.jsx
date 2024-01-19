// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASpj39HnOn2eMUfb3dTIubZm2hBoQAFic",
  authDomain: "notes-sharing-bca.firebaseapp.com",
  projectId: "notes-sharing-bca",
  storageBucket: "notes-sharing-bca.appspot.com",
  messagingSenderId: "154318184606",
  appId: "1:154318184606:web:a7bd67e2682e6b1a5f5b8f",
  measurementId: "G-3KQ9NJZE1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}