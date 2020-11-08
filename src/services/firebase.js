// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/firestore";

const firebaseConfig =
  {
    apiKey: "AIzaSyDHS8AtIx-nfWey81rJvb4xnpjJPVWCyeE",
    authDomain: "wedding-b5265.firebaseapp.com",
    databaseURL: "https://wedding-b5265.firebaseio.com",
    projectId: "wedding-b5265",
    storageBucket: "wedding-b5265.appspot.com",
    messagingSenderId: "392994812988",
    appId: "1:392994812988:web:6157e67485cffd08103f39",
    measurementId: "G-K99P3C64BX"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default firebase;
export { db };
