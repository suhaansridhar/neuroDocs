// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,                            // from Firebase settings
  authDomain: "neurodocs-c3501.firebaseapp.com",         // uses Project ID
  projectId: "neurodocs-c3501",                          // uses Project ID again
  storageBucket: "neurodocs-c3501.appspot.com",
  messagingSenderId: "IGNORE_FOR_NOW",
  appId: "IGNORE_FOR_NOW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);