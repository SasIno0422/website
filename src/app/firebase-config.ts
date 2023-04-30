import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBXMU6C8pfPpzF3g2rlntqLQfjm8hF2AdQ",
    authDomain: "barangay-database.firebaseapp.com",
    projectId: "barangay-database",
    storageBucket: "barangay-database.appspot.com",
    messagingSenderId: "880524794476",
    appId: "1:880524794476:web:d966e11c913e454d9c9649"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);