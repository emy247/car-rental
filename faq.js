import React from 'react';
import "./faq.css";
import Supra from "../media/supra.png";

const Faq = () => {
  return (
    <div className="faq">
        <div className="faqs">
            <span className="faq-title">FAQ<span style={{color:"rgb(83, 96, 214)"}}>s</span></span>
            <span className="frequently-asked-questions">Frequently Asked Questions</span>        
            <span className="faq-description">Frequently asked questions about the 
                  car rental reservation process. Answers to common concerns and inquiries.</span> 
            <div className="questions"></div>          
        </div>
    
        <img  className="supra" src={Supra} alt=""></img>
     
    </div>
  )
}

export default Faq