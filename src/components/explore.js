import "./explore.css";
import {HashLink as Link} from 'react-router-hash-link';

const Explore = () => {
  return (
   
    <div className="explore" tabIndex="0">Explore our models
    <Link to="#Models" smooth><i class='fas fa-angle-down' style={{fontSize:'36px'}}></i></Link>  
    </div>


  )
}

export default Explore