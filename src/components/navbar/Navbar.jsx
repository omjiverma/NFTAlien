import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import  logo  from '../../assests/logo.png'
import  sun  from '../../assests/smallIcon/sun.png'
import  discord  from '../../assests/smallIcon/discord.png'
import  wallet  from '../../assests/smallIcon/wallet.png'
import './navbar.css'

export default function Navbar() {

  // State for menu toggle
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    // Navbar Start
    <nav className='navbar'>
      <div className='navbar__links'>
        <a href='#home' className='navbar__links-logo'>
          <img src={logo}/>
        </a>

        <div className='navbar__links-container'>
          <p><a href="#home">HOME</a></p>
          <p><a href="#about">ABOUT</a></p>
          <p><a href="#roadmap">ROADMAP</a></p>
          <p><a href="#collection">COLLECTION</a></p>
          <p><a href="#faqs">FAQS</a></p>
        </div>

        <div className='navbar__btn-container'>
          <button type="button" ><img src={sun} /></button>
          <button type="button" className='btn-grey'><img src= {discord} /> Discord</button>
          <button type="button" className='btn-green'> <img src= {wallet} /> Connect</button>
        </div>
      </div>

      
      <div className='navbar__menu '>
        {toggleMenu
          ? <AiOutlineClose  color="#fff" size={35} onClick={() => setToggleMenu(false)} className="fade-in" />
          : <AiOutlineMenu   color="#fff" size={35} onClick={() => setToggleMenu(true)} className="fade-in" />
        }
  
        {toggleMenu && (

          <div className='navbar__menu-container scale-up-tr'>
            <div className='navbar__links-container navbar__menu-links-container'>
              <p><a href="#home">HOME</a></p>
              <p><a href="#about">ABOUT</a></p>
              <p><a href="#roadmap">ROADMAP</a></p>
              <p><a href="#collection">COLLECTION</a></p>
              <p><a href="#faqs">FAQS</a></p>
            </div>
            
            <div className='navbar__btn-container navbar__menu-btn-container' >
              <button type="button" ><img src={sun} /></button>
              <button type="button" className='btn-grey'>
                <img src= {discord} /> Discord
              </button>
              
              <button type="button" className='btn-green'> 
                <img src= {wallet} /> Connect
              </button>
            </div>
            
          </div>
        )}
      </div>
    </nav>
  )
}