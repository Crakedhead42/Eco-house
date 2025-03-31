// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvRt7YdlL1oguCcyGSufvx_ZWN4KTmXiE",
  authDomain: "sustainability-c6480.firebaseapp.com",
  projectId: "sustainability-c6480",
  storageBucket: "sustainability-c6480.firebasestorage.app",
  messagingSenderId: "563645588537",
  appId: "1:563645588537:web:7ec0cba7bcc94b8b6b59e8",
  measurementId: "G-BXF92QQ7XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);