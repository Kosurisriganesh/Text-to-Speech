import React, { useState } from 'react';

const TextToVoice = () => {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    // Clear any previous speech synthesis instances
    window.speechSynthesis.cancel();

    if (text.trim() === '') {
      alert('Please enter some text to speak');
      return;
    }

    // Initialize a SpeechSynthesisUtterance instance
    const utterance = new SpeechSynthesisUtterance(text);

    // Optional: Set voice or other properties if needed
    utterance.rate = 1; // Speed of the speech (0.1 to 10)
    utterance.pitch = 1; // Pitch of the speech (0 to 2)

    // Speak the utterance with a slight delay
    // setTimeout(() => {
      window.speechSynthesis.speak(utterance);
    // }, 1000); // 100ms delay to allow the speech synthesis to initialize
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Text to Voice Converter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
        placeholder="Enter text here..."
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button
        onClick={handleSpeak}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Speak
      </button>
    </div>
  );
};

export default TextToVoice;
