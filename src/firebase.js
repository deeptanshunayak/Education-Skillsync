// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGJMHdQwMHcbk99bCJfP_GLZwv9QipqOE",
  authDomain: "skillsync-d9ac2.firebaseapp.com",
  projectId: "skillsync-d9ac2",
  storageBucket: "skillsync-d9ac2.appspot.com",
  messagingSenderId: "239950531434",
  appId: "1:239950531434:web:00c08195dbc51fc62a3313",
  measurementId: "G-9DK4HJZQKE"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth,app};