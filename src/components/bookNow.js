import React from 'react';
import ReactDom from 'react-dom';
import './bookNow.css';
import './models';
import  { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import carsImages from './carsImages';
import payment_methods from '../media/payment_methods.png'




const overlay_style={
  position:'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor:'rgba(0,0,0,0.7)',
  zIndex:1000
}



const BookNow = ({open,onClose,selectedCar}) => {
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');
  const [startHour,setStartHour]=useState('');
  const [endHour,setEndHour]=useState('');
  const [value, setValue] = useState();
  const [image, setImage]=useState([carsImages[0]]);
  const [price, setPrice]=useState([carsImages[0]]);

  const [isChecked, setIsChecked] = useState(false);
  
let insurancePrice=0;

  if(isChecked) 
  insurancePrice=18;
  else 
  insurancePrice=0;

  if(!open) return null
  console.log(selectedCar)

  const listImages=image.map((item)=>
  (<div className="car-image" key={item.id}>
     <img src={item.image} alt=""/>
  </div>)
  )

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }
  
  let next_day=0;
  if(Number(endHour.charAt(0)+endHour.charAt(1))>Number(startHour.charAt(0)+startHour.charAt(1)))
  {next_day=1;}
  const days=Number(endDate.charAt(8)+endDate.charAt(9))-Number(startDate.charAt(8)+startDate.charAt(9))+next_day;
  console.log(days);
  //console.log(next_day);
  console.log(startDate);
  console.log(startHour);

  const listPrice=price.map((item)=>(
    <span className="car-price" key={item.id}>
     {item.price*days}
     
  </span>)
  )


  const listTotal=price.map((item)=>(
    <span className="car-total" key={item.id}>
     {insurancePrice+item.price*days}
  </span>)
  )
  
  const handleChange=(event)=>{
    setImage([carsImages[event.target.value]]);
    setPrice([carsImages[event.target.value]]);
  };
  
   
 

  return ReactDom.createPortal(
  
  <>
 
    <div style={overlay_style}/>

    <div className="book-now-style">
     
      <div className="header">Complete your reservation</div>

      <div className='left-column'>
          <span className="select-car-title">Select your car:</span>
          <select className="select-car" onChange={(event)=>handleChange(event)}>
            <option value="0">{selectedCar}</option>
            <option value="1">VW Golf 7</option>
            <option>Toyota Corolla</option>
            <option>VW Golf 7</option>
          </select>

          <span className="date-style-title">Pick-up date</span>
          <div className="start-time">
              <input className="date-style" id="date-picker-start" type="date" onChange={(e)=>setStartDate(e.target.value)}/>
              <input className="time" id="time-picker-start" type="time" onChange={(e)=>setStartHour(e.target.value)}/>
          </div>
      
          <span className="date-style-title">Drop-off date</span>
          <div className="end-time">
            <input className="date-style" id="date-picker-end" type="date" onChange={(e)=>setEndDate(e.target.value)}/> 
            <input className="time" id="time-picker-end" type="time" onChange={(e)=>setEndHour(e.target.value)}/>
          </div>
      
      </div>
      
      <div className="car-image-card">
        {listImages}
      </div>

      

      <div className="forms">
          <span className="forms-title">Personal information</span>
          <input className="first-name" placeholder="First name *" autoComplete="first-name"></input> 
          <input className="last-name" placeholder="Last name *" autoComplete="family-name"></input>
              
          <input className="email-style" placeholder="Email address(optional)" id="input-field"></input>
          <PhoneInput
          className="phoneInput"
          defaultCountry="RO"
          placeholder="Enter phone number *"
          value={value}
          onChange={setValue}/> 

          <div className="insurance-check">
             <input className="insurance-check-box" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
             <span className="insurance-check-text">Full protection insurance</span>
          </div>

          <div className="terms-check">
             <input className="terms-check-box" type="checkbox"/>
             <span className="terms-check-text">Terms and conditions *</span>
          </div>


      </div>

      <div className="payment">
          <span className="payment-title">Payment methods</span>
            <div className="payment-methods"><img src={payment_methods} alt=""/></div>
          <input className="credit-number" placeholder="Credit number *"></input> 
          <div className="number-cvv">
          <input className="expiration-date" placeholder="Expiration date *" ></input>
          <input className="cvv-number" placeholder="CVV *" ></input>
          </div>
          <div className="cost">
              <span className="car-rent">Car rent charge:</span>
              <span>${listPrice}</span>
          </div>

          <div className="insurance">
             <span className="insurance-cost">Insurance cost:</span>
             <span>${insurancePrice}</span>
          </div>

          <div className="total">
             <div className="total-cost-days"><span>Total cost for </span> 
             <span className="days">{days} days:</span></div>
             <span className="total-cost">${listTotal}</span>
          </div>          
      </div>
      
      <button className="submit" onClick={onClose}>Confirm & pay</button>
    
    </div>
    </>,
    document.getElementById('book-now'),
    
  )
}

export default BookNow