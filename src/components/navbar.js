import './navbar.css';
import {useState,useRef} from 'react';
import Stars from '../media/stars.png'
import BookNow from './bookNow';
import {HashLink as Link} from 'react-router-hash-link';
import Sound from "../media/bg_music.mp3";


const Navbar = () => {
   
  const audioRef = useRef(new Audio(Sound));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStopButtonClick = () => {
    audioRef.current.pause();
    
    setIsPlaying(false);
  };

  const [open,setOpen]=useState(false);
  const [isOpen,setIsOpen]=useState(false);

  return (
    
    <div className="navbar">

        <div className={`menu ${open? 'pressed':''}`} onClick={()=>{setOpen(!open)}}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
        </div>   
        
        <div className={`dropdown-menu ${open?'active':'inactive'}`}>
   
              <Link className="about-link" to="/about">
              <div className="menu-item" tabIndex="0">About</div>
              </Link>  

              <Link to="#Models" smooth>
              <div className="menu-item" tabIndex="0">Models</div></Link>

              <div className="menu-item" tabIndex="0"  onClick={()=>setIsOpen(true)}>Book now</div>
              <BookNow open={isOpen} onClose={()=>setIsOpen(false)}>Modal</BookNow>

              <Link to="#Contact" smooth>
              <div className="menu-item" tabIndex="0" >Contact</div></Link>

              
       
        </div>
        {isPlaying ? (
          <i className='fas fa-volume-up'  onClick={handleStopButtonClick}></i> 
        ) : (
          <i className='fas fa-volume-mute'  onClick={handlePlayButtonClick}></i>
        )}
        <div className="website-title">All Star Rentals
        <img className="stars-up" src={Stars} alt=""></img>
        </div>
       
     
        
    </div>

    
  )
}

export default Navbar
