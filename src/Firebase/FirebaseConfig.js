// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAfOvai4RbTLf_jkogJvTH0X6BKTa5UAG8",
    authDomain: "grin-mobility-e25c5.firebaseapp.com",
    projectId: "grin-mobility-e25c5",
    storageBucket: "grin-mobility-e25c5.appspot.com",
    messagingSenderId: "101515748345",
    appId: "1:101515748345:web:d2c27a3a57a6e786b65328",
    measurementId: "G-BB5CZEW6XV"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
// Import the functions you need from the SDKs you need
