import React, { useEffect, useState } from 'react';
import './body.css';

function Darkmode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="dark">
      <button
        id="dark-mode-toggle"
        className={`btn ${isDarkMode ? 'btn-light-mode' : 'btn-dark'}`}
        style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 2 }}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default Darkmode;
