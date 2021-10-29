import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth, 
  setPersistence
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCF-8aySQFHVdRbpAYdjQ56QSedRTS3Iqg",
  authDomain: "vue-auth-e3cb3.firebaseapp.com",
  projectId: "vue-auth-e3cb3",
  storageBucket: "vue-auth-e3cb3.appspot.com",
  messagingSenderId: "1040453350635",
  appId: "1:1040453350635:web:787e6874a4b4c807203aae"
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

setPersistence(auth, browserLocalPersistence)