import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCijHCsIfF5Rwsezp_YczwwR03XfKh2Fz8",
  authDomain: "summer-camp-website-6cff0.firebaseapp.com",
  projectId: "summer-camp-website-6cff0",
  storageBucket: "summer-camp-website-6cff0.firebasestorage.app",
  messagingSenderId: "657277796422",
  appId: "1:657277796422:web:268363dba632cbd514ca47",
  measurementId: "G-QGQMZH9ZR2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app); 