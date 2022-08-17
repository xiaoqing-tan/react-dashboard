// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYilAyYJ-hzz13fzPfRu03GJVnVb9o5Jw",
  authDomain: "web-v1-52e1d.firebaseapp.com",
  projectId: "web-v1-52e1d",
  storageBucket: "web-v1-52e1d.appspot.com",
  messagingSenderId: "959061480883",
  appId: "1:959061480883:web:6b8b306739151502e1a7c6",
  measurementId: "G-YM28KH010M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);