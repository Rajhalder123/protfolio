// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0kpXO-f9ytXiAKSH91JnS15Xi5UHzAhM",
  authDomain: "raj-sportfolioapp.firebaseapp.com",
  projectId: "raj-sportfolioapp",
  storageBucket: "raj-sportfolioapp.firebasestorage.app",
  messagingSenderId: "1099168591600",
  appId: "1:1099168591600:web:315e9316e8f11f49735c35",
  measurementId: "G-LMCJ40EV4J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
