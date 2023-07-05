import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCkU-rF385gjq6EH9xD28olXEwBqCEH07I",
//   authDomain: "decentrabuilds-e0101.firebaseapp.com",
//   projectId: "decentrabuilds-e0101",
//   storageBucket: "decentrabuilds-e0101.appspot.com",
//   messagingSenderId: "272099182095",
//   appId: "1:272099182095:web:1972596f66f56a651bc57a",
//   measurementId: "G-KHPJYN7NRC"
// };

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESS_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID 
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);