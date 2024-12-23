// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB0-bpPrGg876Fkhvu_rpnqXZHsCPLCGI",
  authDomain: "projectbreakitauth.firebaseapp.com",
  projectId: "projectbreakitauth",
  storageBucket: "projectbreakitauth.firebasestorage.app",
  messagingSenderId: "99433716409",
  appId: "1:99433716409:web:7a51da2c9615759942d968"
};

// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);