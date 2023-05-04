import Navbar from '../components/navbar/navbar';
import './locations.css';
import galaxy from '../media/galaxy.jpg';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Phone from '../media/phone.png';
import Location1 from '../media/location1.jpg';
import Location2 from '../media/location2.jpg';
import Location3 from '../media/location3.jpg';
import { useEffect, useState } from 'react';



const Locations = () => {
   
  const [showMenu,setShowMenu]=useState(false);
  useEffect(() => {
    function handleScroll() {
       const scrollPosition = window.scrollY;
       
       if (scrollPosition > 300) { 
          setShowMenu(true);
       }
         else
         setShowMenu(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
       window.removeEventListener('scroll', handleScroll);
    };
 }, []);

  return (
     <>
      <div className="locations" id="Locations">
          <Navbar />
          <img className="about-bg" src={galaxy}></img>
          
          <h1 className="where">Where to find us</h1>  
          <div className="locations-images">
            <div className="phone-map">
              <img className="phone-location" src={Phone} alt=""/>
              <iframe className="map-location" title="Bucharest-car-rental" src="https://snazzymaps.com/embed/481666" ></iframe>
            </div>   
            <div className="locations-photos">
              <div className="photos1">
                <img className="location1" src={Location1}></img>            
                <img className="location3" src={Location3}></img>
              </div>

              <img className="location2" src={Location2}></img>
            </div>  
          </div> 
                   
      </div>
      
      <Contact />
      <Footer />
      </>
  
  ) 
}
 export default Locations