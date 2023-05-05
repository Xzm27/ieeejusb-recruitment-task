import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: "ieeejusb-recruitment.firebaseapp.com",
    projectId: "ieeejusb-recruitment",
    storageBucket: "ieeejusb-recruitment.appspot.com",
    messagingSenderId: "669374168859",
    appId: "1:669374168859:web:ebfa26083ea7b03fdd9dbe",
    measurementId: "G-H4PFRFZJH8"
};
  
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)