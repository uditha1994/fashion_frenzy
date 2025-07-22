import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Howl } from "howler";
import StartScreen from "./components/StartScreen";
import EndScreen from "./components/EndScreen";
import Feedback from "./components/Feedback";
import Character from "./components/Character";
import Wardrobe from "./components/Wardrobe";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './App.css';


// sound effects 
const sounds = {
    background: new Howl({
        src:['/public/sounds/background.mp3'],
        volume: 0.3,
        loop: true
    }),
    correct: new Howl({
        src:['/public/sounds/correct.wav'],
        volume: 0.6
    }),
    wrong: new Howl({
        src:['/public/sounds/wrong.wav'],
        volume: 0.6
    }),
    win: new Howl({
        src:['/public/sounds/win.wav'],
        volume: 0.6
    })
}

function App() {

    return (
        <div className="app">
            <AnimatePresence mode="wait">
                {/* <StartScreen /> */}
                {/* <EndScreen /> */}
                <Wardrobe />
            </AnimatePresence>
        </div>
    )
}

export default App