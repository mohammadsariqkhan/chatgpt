import {getApps, getApp, initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBafXp43_tRyYpO3v2wZDkul6kWmSyP_i4",
    authDomain: "chatgpt-messanger-ab55c.firebaseapp.com",
    databaseURL: "https://chatgpt-messanger-ab55c-default-rtdb.firebaseio.com",
    projectId: "chatgpt-messanger-ab55c",
    storageBucket: "chatgpt-messanger-ab55c.appspot.com",
    messagingSenderId: "656158710162",
    appId: "1:656158710162:web:8ff8e01abe4139866c094b"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}