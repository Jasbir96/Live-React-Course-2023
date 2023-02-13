import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9mDgjKSuUSykC5u_x1RQvw95HAPv_fPM",
    authDomain: "fir-demo-60b5c.firebaseapp.com",
    projectId: "fir-demo-60b5c",
    storageBucket: "fir-demo-60b5c.appspot.com",
    messagingSenderId: "500677322260",
    appId: "1:500677322260:web:4865ecb45d338b1a66e901"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);