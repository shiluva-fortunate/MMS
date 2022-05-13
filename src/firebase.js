// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdG7z6X6hlo8ROrUkpY1BLu065fdJGmPM",
  authDomain: "mmsgallery.firebaseapp.com",
  projectId: "mmsgallery",
  storageBucket: "mmsgallery.appspot.com",
  messagingSenderId: "689010581518",
  appId: "1:689010581518:web:f9d43d8cc81e44e9d0dc5f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
