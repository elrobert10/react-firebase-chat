import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-4cb3b.firebaseapp.com",
  projectId: "reactchat-4cb3b",
  storageBucket: "reactchat-4cb3b.appspot.com",
  messagingSenderId: "1051445894946",
  appId: "1:1051445894946:web:b82d9873186d0e8bc2cf7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()