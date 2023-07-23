// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUBL5bhtILM3YGMP7sx4hPx5YDVXRDAdI",
  authDomain: "aerophile-95ae1.firebaseapp.com",
  projectId: "aerophile-95ae1",
  storageBucket: "aerophile-95ae1.appspot.com",
  messagingSenderId: "631520294251",
  appId: "1:631520294251:web:2ce24de301e2772e58082e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);