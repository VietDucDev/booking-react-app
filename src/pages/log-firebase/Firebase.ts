// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeRJ5aQSAjxjCl-FW9s8ohhqvsL4cajU4",
  authDomain: "hotelbooking-43a21.firebaseapp.com",
  projectId: "hotelbooking-43a21",
  storageBucket: "hotelbooking-43a21.appspot.com",
  messagingSenderId: "377145808530",
  appId: "1:377145808530:web:2cd419e9e8fb52fa69b84b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
