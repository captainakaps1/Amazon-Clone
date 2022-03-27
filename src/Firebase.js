import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADwR6QeMO0ZG_VtA_qWh6H6OE6UfKZbCE",
    authDomain: "clone-eddbd.firebaseapp.com",
    projectId: "clone-eddbd",
    storageBucket: "clone-eddbd.appspot.com",
    messagingSenderId: "1000945732742",
    appId: "1:1000945732742:web:de6dd116f1e6c35e9d5507",
    measurementId: "G-JT07N95P8H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const auth = firebase.auth()