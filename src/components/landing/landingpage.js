import React from 'react';
import './landingpage.css';
import BgVideo from '../../media/bg.mp4';
import Navbar from '../navbar/navbar';
import Explore from './explore';



 const LandingPage = () => {
  
  return (
    
    <>
        <div className="landingpage" >
            <video src={BgVideo} autoPlay loop muted className="video-bg"/>
            <div className="bg-overlay"></div>
            <Navbar />
            <Explore />
        </div>
    </>
   
  )
}

export default LandingPage