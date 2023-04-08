import React from 'react';
import './about.css';
import Navbar from '../components/navbar/navbar';

const About = () => {
  return (
    <div className="about" id="About">
       <Navbar/>
       
       <div className="about-section">
         <h1 className="about-us">About Us</h1>
         <p className="about-description">A car rental, hire car or car hire agency is a company that rents automobiles for short periods 
         of time to the public, generally ranging from a few hours to a few weeks. It is often organized with numerous local branches 
         (which allow a user to return a vehicle to a different location), 
         and primarily located near airports or busy city areas and often complemented by a website allowing online reservations.</p>

       </div>
    
    </div>
  )
}

export default About