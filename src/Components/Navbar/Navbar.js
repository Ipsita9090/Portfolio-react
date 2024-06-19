import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    
        <nav>
        <ul className='nav-list'>
        <li className="item"><a href="#home" >Home</a></li>
        <li className="item"><a href="#about" >About</a></li>
        <li className="item"><a href="#work" >Work</a></li>
        <li className="item"><a href="#contact" >Contact</a></li>
        </ul>
        
    </nav>
      
    
  )
}

export default Navbar
