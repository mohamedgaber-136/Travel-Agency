import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCb-UkvpCD0WgqHJMgLK6UBnXKBJWRSZzE",
  authDomain: "iti-final-project-ammmoz06.firebaseapp.com",
  projectId: "iti-final-project-ammmoz06",
  storageBucket: "iti-final-project-ammmoz06.appspot.com",
  messagingSenderId: "1029659505242",
  appId: "1:1029659505242:web:22dfc008d7d7e348085e63",
};

initializeApp(firebaseConfig);

export const database = getFirestore();

export const authbase = getAuth();
