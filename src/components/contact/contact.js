import "./contact.css";
import Stars from "../../media/stars.png";

const Contact = () => {
  
  return (
  
    <div className="contact-page" id="Contact">
      <div className="get">Get in touch with us</div>
           
      <div className="phone-mail">
        <div  className="contact-data">
            <i className="fa fa-phone" style={{ fontSize: '36px' }}></i>
            <span className="phone-number"> (+40) 728 870 987</span></div>
        <div className="contact-data">
            <i class="fa fa-envelope" style={{fontSize:'36px'}}></i>
            <a href="mailto:rentals@star.com" className="mail-address">rentals@star.com</a></div>
      </div>     
    </div>
      
  
  )
}
 export default Contact