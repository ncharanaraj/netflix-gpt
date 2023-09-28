// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaZ5gK7AjgzwhTZNxpI7en7exv6OcysbE",
  authDomain: "netflix-gpt-6dc9a.firebaseapp.com",
  projectId: "netflix-gpt-6dc9a",
  storageBucket: "netflix-gpt-6dc9a.appspot.com",
  messagingSenderId: "862176843409",
  appId: "1:862176843409:web:7b7f9f351dbff34191d130",
  measurementId: "G-Z01SCD8VSP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
