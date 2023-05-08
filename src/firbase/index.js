// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWfJVIP21NABTz9lVrKFW4vXfCjh41_zY",
  authDomain: "xtrailgame-b9f5c.firebaseapp.com",
  projectId: "xtrailgame-b9f5c",
  storageBucket: "xtrailgame-b9f5c.appspot.com",
  messagingSenderId: "347395750622",
  appId: "1:347395750622:web:ecb2d8e916214e3b61204f",
  measurementId: "G-0LP7DDDJWY"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);