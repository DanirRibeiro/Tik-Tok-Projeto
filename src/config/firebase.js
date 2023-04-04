import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA8J_PqkMZZErq4cRkT-HG6hWqnNHuxTss",
  authDomain: "tiktok---jornada-dev-ebac.firebaseapp.com",
  projectId: "tiktok---jornada-dev-ebac",
  storageBucket: "tiktok---jornada-dev-ebac.appspot.com",
  messagingSenderId: "513937302968",
  appId: "1:513937302968:web:bafa1594e4e2670bfa9b4d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;