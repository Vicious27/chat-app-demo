import React from "react";
import './App.css';

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDCvDjDWBnMNsM-YsH92zvk6nRVUbU01AE",
  authDomain: "chat-app-demo-bb11c.firebaseapp.com",
  projectId: "chat-app-demo-bb11c",
  storageBucket: "chat-app-demo-bb11c.appspot.com",
  messagingSenderId: "441764721930",
  appId: "1:441764721930:web:182cae5b3a78dea985f6f3",
  measurementId: "G-W2X4KQJJ9X"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {



  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
