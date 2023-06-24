// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const FIREBASE_APIKEY = process.env.FIREBASE_APIKEY;
const FIREBASE_APIID = process.env.FIREBASE_APIID;
const FIREBASE_autheDomain = process.env.FIREBASE_autheDomain
const FIREBASE_messagingSenderId = process.env.FIREBASE_messagingSenderId
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_autheDomain,
  projectId: "correct-bullchord",
  storageBucket: "correct-bullchord.appspot.com",
  messagingSenderId: FIREBASE_messagingSenderId,
  appId: FIREBASE_APIID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
