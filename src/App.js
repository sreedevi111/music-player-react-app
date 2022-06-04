// App.js

import React from 'react';
import {useState,useEffect} from "react";
import './App.css';

import Player from "./components/Player";

const App=()=> {

const [songs,setSongs] = useState([
    {
        "title": "Vaaste",
        "artist": "Dhvani Bhanushali, Nikhil D'Souza",
        "album": " Vaaste",
        "track": "Vaaste",
        "year": "2020",
        "img_src": "./songs_images/vaaste.jpeg",
        "src": "./songs/Vaaste Song_ Dhvani Bhanushali_ Tanishk Bagchi _ N(MP3_70K).mp3"
    },
    
    {
        "title": "Meri Aashiqui",
        "artist": "Jubin Nautiyal",
        "album": " Meri Aashiqui",
        "track": "Meri Aashiqui",
        "year": "2020",
        "img_src": "./songs_images/meri-aashiqui.jpeg",
        "src": "./songs/Meri Aashiqui - Jubin Nautiyal.mp3"
    },
    
    {
        "title": "Aaruyire",
        "artist": " Murtuza Khan, Qadir Khan, A. R. Rahman, Chinmayi",
        "album": " Guru",
        "track": "Aaruyire",
        "year": "2006",
        "img_src": "./songs_images/Aaruyire.jpeg",
        "src": "./songs/Aaruyire_From_Guru_.mp3"
    },
    
    {
        "title": "Hosanna",
        "artist": "Leon D'Souza, Suzanne D'Mello, A. R. Rahman",
        "album": " Vinnaithaandi Varuvaayaa",
        "track": "Hosanna",
        "year": "2009",
        "img_src": "./songs_images/Hossana.jpeg",
        "src": "./songs/Hosanna_From_Vinnathaandi_Varuvaayaa_.mp3"
    },
    

]);

const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex])

  return (
    <div className="App">
    <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );
}

export default App;