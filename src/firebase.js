// import firebase from "firebase/app";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBoE186MedH3EFSP8X49Lt_n_JmcH-ZyE",
    authDomain: "contactdatabaseinterview.firebaseapp.com",
    projectId: "contactdatabaseinterview",
    storageBucket: "contactdatabaseinterview.appspot.com",
    messagingSenderId: "126658334747",
    appId: "1:126658334747:web:d4841214844873b492e8be",
    measurementId: "G-G30JT8GG9C"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDBoE186MedH3EFSP8X49Lt_n_JmcH-ZyE",
//   authDomain: "contactdatabaseinterview.firebaseapp.com",
//   projectId: "contactdatabaseinterview",
//   storageBucket: "contactdatabaseinterview.appspot.com",
//   messagingSenderId: "126658334747",
//   appId: "1:126658334747:web:d4841214844873b492e8be",
//   measurementId: "G-G30JT8GG9C"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export default firebase;