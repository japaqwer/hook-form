import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_-O8tHH8ZVDe18d4lLPzEeIx5_4QQEQ0",
  authDomain: "chat-1e4d8.firebaseapp.com",
  projectId: "chat-1e4d8",
  storageBucket: "chat-1e4d8.appspot.com",
  messagingSenderId: "419573530820",
  appId: "1:419573530820:web:e09b5519715879576b4991"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
