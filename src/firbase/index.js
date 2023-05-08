// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZkqJePYQK6YuWKyVDp-0PtzUVbi9kyaM",
  authDomain: "geely-d536b.firebaseapp.com",
  projectId: "geely-d536b",
  storageBucket: "geely-d536b.appspot.com",
  messagingSenderId: "159489468513",
  appId: "1:159489468513:web:6f90e3ab011020c94ae220",
  measurementId: "G-C8JBSKDH9V"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);