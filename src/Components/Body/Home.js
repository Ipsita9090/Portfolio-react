import React from 'react';
import './body.css'
import Cvsvg from '../Svg/Cvsvg'
import Droptext from '../Droptext/Droptext';

function Home() {
    const arrowStyle={
        
        color:'black'
    };
    const homeStyle={
        fontSize: '4rem',
   
    };
  return (
    <div id='home' className='container'>
        
        <Cvsvg/>
        
        <div style={homeStyle}>Greetings homosapien!
        <br/> Me's Ipsita, <Droptext/>
        </div> <br />
        <div style={{transform:'rotate(90deg)'}}><a href="#about" ><i class="bi bi-arrow-right-circle" style={arrowStyle} ></i></a>
        </div>

      
    </div>
  )
}

export default Home
