// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBqfCuG6atXV3k5N1F4X-hQP3-1-JlkEQ",
    authDomain: "insta-reels-f1b90.firebaseapp.com",
    projectId: "insta-reels-f1b90",
    storageBucket: "insta-reels-f1b90.appspot.com",
    messagingSenderId: "680139833802",
    appId: "1:680139833802:web:380870c3891c27ae770f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth
export const auth =getAuth(app);
// database -> firestore
export const db=getFirestore(app);
export const storage = getStorage(app);
// storage 
// hosting 