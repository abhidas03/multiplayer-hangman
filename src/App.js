import React from 'react'
import Hangman from './Hangman';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useState } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getDatabase, ref, set, onValue } from "firebase/database";
import apiKey from "./config"
firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "multiplayer-hangman-cffc0.firebaseapp.com",
  databaseURL: "https://multiplayer-hangman-cffc0-default-rtdb.firebaseio.com",
  projectId: "multiplayer-hangman-cffc0",
  storageBucket: "multiplayer-hangman-cffc0.appspot.com",
  messagingSenderId: "437886837494",
  appId: "1:437886837494:web:8c4d3e97a47f91e783c2d7",
  measurementId: "G-5D823PE93M"
})

const auth = firebase.auth();
const db = getDatabase();
const wordRef = ref(db, 'word/word');

function App() {
  const [gameState, setGameState] = useState(false);
  const [word, setWord] = useState("");
  onValue(wordRef, (snapshot) => {
    if (snapshot.exists() && !gameState) {
      setGameState(true);
      setWord(snapshot.val())
    }
    else if (!snapshot.exists() && gameState) {
      setGameState(false);
    }
  });

  return (
    <>
      {gameState ? <Game word={word}/> : <WordInput />}
    </>
  );
}

function WordInput() {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`input: ${input}`);
    storeWord(input);
  }

  function storeWord(word) {
    set(ref(db, 'word'), {
      word: word
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your word: 
        <input
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
    </label>
    <input type="submit" />
    </form>
  );
}

function Game(props) {
  return (
    <>
      <Hangman />
      <HiddenWord word={props.word} />
      <HiddenLetter />
    </>

  )
}

function HiddenWord(props) {
  const wordArray = [];
  for (const c of props.word) {
    wordArray.push(<HiddenLetter letter={c}/>);
  }
  return (
    <>
      {wordArray}
    </>
  )
}

function HiddenLetter(props) {
  const [letterState, setLetterState] = useState(false);
  return (
    <>
      {letterState ? props.letter : "_ "}
    </>
  )
  
}

export default App;
