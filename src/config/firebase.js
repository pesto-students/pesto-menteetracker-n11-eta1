// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRRSfTs57YZ8k6TLb6Fe-F4XikGoc_tVI",
  authDomain: "pesto-f694b.firebaseapp.com",
  projectId: "pesto-f694b",
  storageBucket: "pesto-f694b.appspot.com",
  messagingSenderId: "611532231025",
  appId: "1:611532231025:web:fe6d7d7b21f69922bba6d0"
};

// Initialize Firebase
const firebaseApp = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export default firebaseApp;