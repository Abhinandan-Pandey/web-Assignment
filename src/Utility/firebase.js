import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqeXjPGmCVCl7W3v5sq16FcxhReTHQfyg",
  authDomain: "web-assignment-10bef.firebaseapp.com",
  databaseURL: "https://web-assignment-10bef.firebaseio.com",
  projectId: "web-assignment-10bef",
  storageBucket: "web-assignment-10bef.appspot.com",
  messagingSenderId: "225573359017",
  appId: "1:225573359017:web:ffc0dcb66ef0d4a9f8c8b8",
  measurementId: "G-28GGLCJ0P4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();

export { storage, firebase as default };
