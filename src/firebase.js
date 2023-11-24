// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdPfnTUqD2qCb-g2lVCeZUnJocKqIIosI",
  authDomain: "community-relief.firebaseapp.com",
  projectId: "community-relief",
  storageBucket: "community-relief.appspot.com",
  messagingSenderId: "59370088574",
  appId: "1:59370088574:web:28ce1116af2852fb20502f",
  measurementId: "G-CLEFPNQ367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);