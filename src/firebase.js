
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJmbfEv5UDBJEpgO5aByesYe-qFTPI6zE",
  authDomain: "chatapp-94bc4.firebaseapp.com",
  projectId: "chatapp-94bc4",
  storageBucket: "chatapp-94bc4.appspot.com",
  messagingSenderId: "587860439393",
  appId: "1:587860439393:web:afa74069c5116664339520"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);