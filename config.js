import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCG1s2kts8DzhlUs40ySuzZcyxYogDs8PY",
  authDomain: "exampil-66667.firebaseapp.com",
  databaseURL: "https://exampil-66667-default-rtdb.firebaseio.com",
  projectId: "exampil-66667",
  storageBucket: "exampil-66667.appspot.com",
  messagingSenderId: "217119423292",
  appId: "1:217119423292:web:a014090ca1703d64657c39",
  measurementId: "G-034TTQKTSM",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
