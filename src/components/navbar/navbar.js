import './navbar.css';
import {useState,useEffect,useRef} from 'react';
import Stars from '../../media/stars.png'
import Reserve from '../reserveCar/reserve';
import {HashLink as Link} from 'react-router-hash-link';
import Sound from "../../media/bg_music.mp3";



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
  const [show, setShow] = useState(false);
  const [showResponsive, setShowResponsive]=useState(false);
  const [width, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    function handleScroll() {
       const scrollPosition = window.scrollY;
       
       if (scrollPosition > 600) { 
          setShow(true);
       }
         else
         setShow(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
       window.removeEventListener('scroll', handleScroll);
    };
 }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    if(width<1000){
      setShowResponsive(true);
    }
    else if(width>1000)
      setShowResponsive(false);
    

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth]);
   
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, []);


  return (
    
    <div className="navbar">
         
         <div className="website-title">All Star Rentals
        <img className="stars-up" src={Stars} alt=""></img>
        </div>   

        {isPlaying ? (
          <i className='fas fa-volume-up'  onClick={handleStopButtonClick}></i> 
        ) : (
          <i className='fas fa-volume-mute'  onClick={handlePlayButtonClick}></i>
        )}

        <div className="navigation-menu">
                 
                 <Link className="navigation-item"  to="/" >
                 
                   Home
                  </Link>  
                  
                  <Link className="navigation-item"  to="/about" >
                  
                  About
                  </Link>  

                  <Link  className="navigation-item" to="/locations" >
                  Locations
                  
                  </Link>  

                  <div  className="navigation-item"  tabIndex="0"  onClick={()=>setIsOpen(true)}>Reserve</div>
                  <Reserve open={isOpen} onClose={()=>setIsOpen(false)}>Modal</Reserve>

                  

                  <button className="sign">Log In</button> 
                  <button className="sign in">Sign Up</button>   
                       
        </div>
        
        
        <div className="scrolling-menu" >
          <div className={`menu ${open? 'pressed':''}`} style={{ display: show || showResponsive ? '' : 'none' }} onClick={()=>{setOpen(!open)}}>
              <div className="menu-bar" style={{backgroundColor:show? 'black':'white'}}></div>
              <div className="menu-bar" style={{backgroundColor:show? 'black':'white'}}></div>
              <div className="menu-bar" style={{backgroundColor:show? 'black':'white'}}></div>
          </div>   
          
          <div className={`dropdown-menu ${open?'active':'inactive'}`}  >            

                <Link className="home-link" to="/home">
                <div className="menu-item" tabIndex="0">Home</div>
                </Link>  

                <Link className="about-link" to="/about">
                <div className="menu-item" tabIndex="0">About</div>
                </Link>             

                <Link className="locations-link" to="/locations" smooth>
                <div className="menu-item" tabIndex="0" >Locations</div></Link>   

                <div className="menu-item" tabIndex="0"  onClick={()=>setIsOpen(true)}>Reserve</div>
                <Reserve open={isOpen} onClose={()=>setIsOpen(false)}>Modal</Reserve>   

          </div>
        </div>
       
        
    </div>

    
  )
}

export default Navbar
