import React from 'react';
import './about.css';
import Navbar from '../components/navbar/navbar';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import galaxy from '../media/galaxy.jpg';
import about_image from '../media/about_image.png';
import business_owner from '../media/business_owner.png';
import ceo from '../media/ceo.png';
import manager from '../media/manager.png';
import service_lead from '../media/service_lead.png';
import mechanic from '../media/mechanic.png';
import cars_detailist from '../media/cars_detailist.png';
import assets_icon from '../media/assets_icon.jpg';

const About = () => {


  return (
    <div className="about" id="About" >
       
       <Navbar />
       
       <img className="about-bg" src={galaxy}></img>
       
       
       <div className="about-section">
         <img className="about-image" src={about_image}></img>
         <div className="about-text"><h1 className="about-us">About Us</h1>
            <p className="about-description">A car rental, hire car or car hire agency is a company that rents automobiles for short periods 
            of time to the public, generally ranging from a few hours to a few weeks. It is often organized with numerous local branches 
            (which allow a user to return a vehicle to a different location), 
            and primarily located near airports or busy city areas and often complemented by a website allowing online reservations.</p>
            
            <img className="assets-icon" src={assets_icon} alt=""></img>
            <div className="assets-section">
                <div className="assets">
                    <h1>10</h1><span className="car-types">Car types</span>
                </div>
                <div className="assets">
                    <h1>3</h1><span className="car-types">Locations</span>
                </div>
                <div className="assets">
                    <h1>50+</h1><span className="car-types">Employees</span>
                </div>
            </div>     
         </div>
       </div>
 
       <h1 className="our-team">Our team</h1>

       <div className="team-section">
          <div className="member1"><img className="member-image" src={business_owner} alt=""/><h2>Oliver Martinez</h2><h3>Business Owner</h3></div>
          <div className="member1"><img className="member-image"  src={ceo} alt=""/><h2>Jackson Thompson</h2><h3>Chief Executive Officer</h3> </div>
          <div className="member1"><img className="member-image"  src={manager} alt=""/><h2>Sophia Mitchell</h2><h3>Manager</h3> </div>
          <div className="member1"><img className="member-image"  src={service_lead} alt=""/><h2>Ethan Wright</h2> <h3>Service Lead</h3></div>
          <div className="member1"><img className="member-image"  src={cars_detailist} alt=""/> <h2>Isabella Garcia</h2><h3>Cars detailer</h3></div>
          <div className="member1"><img className="member-image"  src={mechanic} alt=""/> <h2>Gabriel Davis</h2><h3>Mechanical Engineer</h3></div>
 
       </div>

       <Contact />
       <Footer />
    </div>
  )
}

export default About