import React from 'react';
import "./footer.css";
import {HashLink as Link} from 'react-router-hash-link';
import BookNow from '../bookNow/bookNow';
import {useState} from 'react';

const Footer = () => {
  const [open,setOpen]=useState(false);
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className="footer">

      <div className="menu-map">
                <Link className="home-link" to="/">
                <div className="footer-menu" tabIndex="0">Home</div>
                </Link>  

                <Link className="about-link" to="/about">
                <div className="footer-menu" tabIndex="0">About</div>
                </Link>  

                <div className="footer-menu" tabIndex="0"  onClick={()=>setIsOpen(true)}>Book now</div>
                <BookNow open={isOpen} onClose={()=>setIsOpen(false)}>Modal</BookNow>

                <Link className="team-link" to="/team" smooth>
                <div className="footer-menu" tabIndex="0" >Team</div></Link>

                <Link className="locations-link" to="/locations" smooth>
                <div className="footer-menu" tabIndex="0" >Locations</div></Link>
      </div>
      
      <div className="schedule">
        <span className="schedule-title">Working hours</span>
        <span className="monday-friday">Monday - Friday <span className="monday-friday-hours">9:00 - 20:00</span></span>
       
        <span className="saturday-sunday">Saturday & Sunday <span className="saturday-sunday-hours">9:00 - 17:00</span></span>
       
      
       <span className="schedule-vary">The schedule may vary depending on the holidays</span>
      </div>

      <div className="social">

        <span className="social-title">Find us on</span>
        <div className="social-icons">
              <a href="https://www.facebook.com/" class="fa fa-facebook"> </a>
              <a href="https://www.instagram.com/" class="fa fa-instagram"> </a>
              <a href="https://twitter.com/" class="fa fa-twitter"> </a> 
        </div>

        <span className="subscribe-title">Subscribe</span>
        <div className="subscribe"> 
               
              <input className="subscribe-input" placeholder="Enter your email"></input> 
              <button className="subscribe-button">Submit</button>  
        </div>  
        
      </div>   

      
    
    </div>
  )
}

export default Footer