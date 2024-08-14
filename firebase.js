// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQX5PmBF853U-xGf1C2ZuFR3qfTIATX5I",
  authDomain: "pantry-tracker-40b94.firebaseapp.com",
  projectId: "pantry-tracker-40b94",
  storageBucket: "pantry-tracker-40b94.appspot.com",
  messagingSenderId: "569328819413",
  appId: "1:569328819413:web:bb357444234268fe94165c",
  measurementId: "G-05DF4DZBY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};