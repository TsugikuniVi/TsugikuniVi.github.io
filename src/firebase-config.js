import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAort-Jy7QpKYpH3PBES7a9_RNIAkfwTg",
  authDomain: "sangeetha-s-bakeathome.firebaseapp.com",
  projectId: "sangeetha-s-bakeathome",
  storageBucket: "sangeetha-s-bakeathome.appspot.com",
  messagingSenderId: "261536028772",
  appId: "1:261536028772:web:bc34d7bf4df312d3902771",
  measurementId: "G-344EFJKRHG",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
