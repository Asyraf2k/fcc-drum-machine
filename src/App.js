// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [currentSound, setCurrentSound] = useState('');

  const audioRefs = {
    Q: useRef(null),
    W: useRef(null),
    E: useRef(null),
    A: useRef(null),
    S: useRef(null),
    D: useRef(null),
    Z: useRef(null),
    X: useRef(null),
    C: useRef(null)
  };

  const audioClips = {
    Q: '/assets/heater-1.mp3',
    W: '/assets/heater-2.mp3',
    E: '/assets/heater-3.mp3',
    A: '/assets/heater-4.mp3',
    S: '/assets/clap.mp3',
    D: '/assets/open-hh.mp3',
    Z: '/assets/kick-n-hat.mp3',
    X: '/assets/kick.mp3',
    C: '/assets/closed-hh.mp3'
  };

  const handleClick = (key) => {
    const audio = audioRefs[key].current;
    console.log('Audio Ref:', audio); // Debugging line
    if (audio) {
      audio.play();
      setCurrentSound(key);
    } else {
      console.error('Audio element not found!');
    }
  };

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if (audioClips[key]) {
      handleClick(key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{currentSound}</div>
      <div id="drum-pads">
        {Object.keys(audioClips).map((key) => (
          <div className="drum-pad" id={key} onClick={() => handleClick(key)} key={key}>
            <audio
              className="clip"
              ref={audioRefs[key]}
              src={audioClips[key]}
              id={key}
            ></audio>
            {key}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
