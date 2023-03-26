import "./explore.css";
import {HashLink as Link} from 'react-router-hash-link';

const Explore = () => {
  return (
  <>
    <Link to="#Models" smooth>
    <div className="explore" tabIndex="0">Explore our models</div>
     </Link>  
   
  </>

  )
}

export default Explore