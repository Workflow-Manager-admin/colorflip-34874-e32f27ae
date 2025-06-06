import React, { useState } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function getRandomColor() {
  /** Returns a random HEX color string. */
  // Generate random hex color, avoid too-bright/too-dark extremes
  const hex = () => {
    // Values between 64 and 220 for pleasing pastels/mids
    const v = Math.floor(Math.random() * (220 - 64) + 64);
    return v.toString(16).padStart(2, '0');
  };
  return `#${hex()}${hex()}${hex()}`;
}

// PUBLIC_INTERFACE
function App() {
  /** Main container for ColorFlip - displays button, manages color flip logic. */
  // Default to palette primary
  const [bgColor, setBgColor] = useState('#ffffff');

  // Handle background color update, using random color logic
  const handleFlipColor = () => {
    const color = getRandomColor();
    setBgColor(color);
  };

  return (
    <div
      className="app"
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        background: bgColor,
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.45s cubic-bezier(.4,2,.6,1)', // smooth transition
      }}
    >
      {/* Minimal navbar, light style */}
      <nav
        className="navbar"
        style={{
          backgroundColor: '#ffffffd0',
          color: '#222222',
          borderBottom: '1px solid #eeeeee',
          boxShadow: '0 2px 8px rgba(34,34,34,0.02)',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="logo" style={{ color: '#222222', fontWeight: 600 }}>
            <span className="logo-symbol" style={{ color: '#4caf50', fontWeight: 'bold' }}>⬤</span>
            ColorFlip
          </div>
        </div>
      </nav>
      {/* Main content centered */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="container"
          style={{
            textAlign: 'center',
            background: 'rgba(255,255,255,0.80)',
            borderRadius: 16,
            boxShadow: '0 4px 24px rgba(34,34,34,0.08)',
            padding: '48px 32px 40px 32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 360,
            width: '100%',
          }}
        >
          <button
            className="btn btn-large"
            data-testid="flip-color-btn"
            style={{
              backgroundColor: '#FFEB3B',       // Yellow background
              color: '#222222',                 // Dark text for readability
              borderRadius: 8,
              border: 'none',
              fontWeight: 600,
              fontSize: '1.2rem',
              letterSpacing: 0.5,
              padding: '16px 36px',
              boxShadow: '0 4px 18px rgba(255,235,59,0.13)', // light yellow shadow
              cursor: 'pointer',
              marginBottom: 32,
              outline: 'none',
            }}
            onClick={handleFlipColor}
          >
            Flip Color
          </button>
          <div
            data-testid="current-color-display"
            style={{
              fontSize: '1.1rem',
              color: '#222222',
              background: '#e8faef',
              padding: '8px 16px',
              borderRadius: 6,
              fontFamily: 'monospace',
              letterSpacing: 1,
              marginTop: 12,
              boxShadow: '0 1px 4px rgba(34,34,34,0.05)',
              userSelect: 'all',
            }}
          >
            Current Color: <span style={{ fontWeight: 600 }}>{bgColor}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
