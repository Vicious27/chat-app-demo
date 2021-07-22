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

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

}

export default App;
