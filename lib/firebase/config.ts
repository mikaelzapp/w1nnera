import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDtaqb6mV0S80OQMqputGA-irIMXelCyVc",
  authDomain: "w1nnerfinassas.firebaseapp.com",
  databaseURL: "https://w1nnerfinassas-default-rtdb.firebaseio.com",
  projectId: "w1nnerfinassas",
  storageBucket: "w1nnerfinassas.firebasestorage.app",
  messagingSenderId: "357136853596",
  appId: "1:357136853596:web:6f1d2ece51a3529fff1499",
  measurementId: "G-ZLH7V4Q66S",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
