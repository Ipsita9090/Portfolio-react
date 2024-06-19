import React from 'react';
import './Cvsvg.css';

function Cvsvg() {
  return (
    <div className='cv'>
      <a href="https://drive.google.com/file/d/1oMJ7TBKnYt7zJN8_qJ0mXYZnLu21QOSt/view?usp=sharing">
        <svg viewBox="0 0 100 20" width="500" height="80">
          <defs>
            <linearGradient id="gradient">
              <stop color="#000"/>
            </linearGradient>
            <pattern id="wave" x="0" y="-0.5" width="200%" height="100%" patternUnits="userSpaceOnUse">
              <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="1.5s"
                  type="translate"
                  from="0,0"
                  to="80,0"
                  repeatCount="indefinite" />
              </path>
            </pattern>
          </defs>
          <text textAnchor="middle" x="50" y="15" fontSize="17" fill="#81bbc5" fillOpacity="0.5">LOOKUP CV</text>
          <text textAnchor="middle" x="50" y="15" fontSize="17" fill="url(#wave)" fillOpacity="1">LOOKUP CV</text>
        </svg>
      </a>
    </div>
  );
}

export default Cvsvg;
