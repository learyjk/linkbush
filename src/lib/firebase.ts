// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7dqYjnHYU57wofdppv7bCDLlrKuK3jyk",
  authDomain: "linkbush-d16ce.firebaseapp.com",
  projectId: "linkbush-d16ce",
  storageBucket: "linkbush-d16ce.appspot.com",
  messagingSenderId: "983928522861",
  appId: "1:983928522861:web:b35aea0f5db153c23a9764",
  measurementId: "G-VYL31YV32R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
// export const analytics = getAnalytics(app);
