import React, { useState } from 'react';
import './Texttospeech.css';

const TextToVoice = () => {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    window.speechSynthesis.cancel();

    if (text.trim() === '') {
      alert('Please enter some text to speak');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="text-to-speech-container">
      <div className="text-box">
        <h1>Text to Speech Converter</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
        />

        <button className="speak-btn" onClick={handleSpeak}>
          Speak
        </button>
      </div>
    </div>
  );
};

export default TextToVoice;