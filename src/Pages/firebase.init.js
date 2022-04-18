// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQrXvbKoogaWQqKLT00-uzE-__jPm66xA",
  authDomain: "financial-advisor-2b790.firebaseapp.com",
  projectId: "financial-advisor-2b790",
  storageBucket: "financial-advisor-2b790.appspot.com",
  messagingSenderId: "573837117983",
  appId: "1:573837117983:web:7072a17b6dbdc12e89232a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
