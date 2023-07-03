import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAjMNZHigMK2AW9yGvELp-Xs3IOkKtlCMk",
  authDomain: "blogshareproject.firebaseapp.com",
  projectId: "blogshareproject",
  storageBucket: "blogshareproject.appspot.com",
  messagingSenderId: "309158012957",
  appId: "1:309158012957:web:889e774e2dcadaa852bef4",
  measurementId: "G-V7HWPCMCGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

