// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwoXjhX85dFe9uIZxfP8CmOwzRBDW5Y9g",
  authDomain: "appsadaschool.firebaseapp.com",
  projectId: "appsadaschool",
  storageBucket: "appsadaschool.appspot.com",
  messagingSenderId: "353421916077",
  appId: "1:353421916077:web:24cbf24a2170f27f3fd324",
  measurementId: "G-57K3BB2045"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = firebase.firestore();
export { app, db } ;