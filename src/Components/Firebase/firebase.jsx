// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNOc2VFDGNTzry4acD5YcFPDp4iBVLfYE",
  authDomain: "grin-mobility-b6289.firebaseapp.com",
  projectId: "grin-mobility-b6289",
  storageBucket: "grin-mobility-b6289.appspot.com",
  messagingSenderId: "509414553560",
  appId: "1:509414553560:web:0c8132fc74128b607a24ad",
  measurementId: "G-SK5H43WTLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();
export const db=getFirestore(app);
export default app;