import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB31zS00ZRNtabNGV_HHTjJoHuMNz1ONd4",
  authDomain: "intervai-446ab.firebaseapp.com",
  projectId: "intervai-446ab",
  storageBucket: "intervai-446ab.firebasestorage.app",
  messagingSenderId: "669975181904",
  appId: "1:669975181904:web:d579765323258c6d42ef55",
  measurementId: "G-TPMQ2YJ7WW"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
