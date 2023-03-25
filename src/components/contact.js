import "./contact.css";
import Stars from "../media/stars.png";


const Contact = () => {

  return (
  
    <div className="contact-page" id="Contact">

      <div className="contact-info">
        <span className="all-star-rentals">All Star Rentals</span>
        <img className="stars" src={Stars} alt=""></img>
        <i className="fa fa-phone" style={{ fontSize: '36px' }}></i>
        <i class="fa fa-envelope" style={{fontSize:'36px'}}></i>
        <span className="phone-number"> (+40) 728 870 987</span>
        <i className="fa fa-map-marker-alt" style={{fontSize:'36px'}}></i>
        <span className="address">Gura Arieșului Street, Bucharest 032605</span>
    
        <a href="mailto:allstar.rentals@email.com" className="mail-address">allstar_rentals@gmail.com</a>     
      </div>

      <div className="schedule">
       
        <span className="monday-friday">Monday - Friday <span className="monday-friday-hours">9:00 - 20:00</span></span>
       
        <span className="saturday-sunday">Saturday & Sunday <span className="saturday-sunday-hours">9:00 - 17:00</span></span>
     
       
      </div>
      <span className="schedule-vary">The schedule may vary depending on the holidays</span>
      <div className="where">
       <span>Where to find us</span>
      </div>

      <div>
      <iframe className="map-location" src="https://my.atlistmaps.com/map/359f84b4-31a9-4888-a4fc-3750df5f088b?share=true" allow="geolocation 'self' https://my.atlistmaps.com" width="38%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
      </div>
    </div>
      
  
  )
}
 export default Contact