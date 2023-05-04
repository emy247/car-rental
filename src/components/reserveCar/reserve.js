import React from 'react';
import ReactDom from 'react-dom';
import './reserve.css';
import '../models/models';
import  { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import cars from '../models/models_data';





const overlay_style={
  position:'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor:'rgba(0,0,0,0.3)',
  zIndex:1000
}



const Reserve = ({open,onClose,selectedCar}) => {
  const [startDate,setStartDate]=useState('');
  const [endDate,setEndDate]=useState('');
  const [startHour,setStartHour]=useState('');
  const [endHour,setEndHour]=useState('');
  const [value, setValue] = useState("");
  const [currentCar, setCurrentCar]=useState(selectedCar? [cars[selectedCar-1]]:[cars[0]]);
  const [isChecked, setIsChecked] = useState(false);
  
  let insurancePrice=0;

  if(isChecked) 
  insurancePrice=18;
  else 
  insurancePrice=0;
  
  if(!open) 
  return null

  console.log("selected:",selectedCar)
  

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
  
  const listImages=currentCar.map((item)=>
  (<div className="car-image" key={item.id}>
     <img src={item.image_front} alt=""/>
  </div>)
  )

  const listPrice=currentCar.map((item)=>(
    <span className="car-price" key={item.id}>
     {item.price*days}
     
  </span>)
  )

  const listTotal=currentCar.map((item)=>(
    <span className="car-total" key={item.id}>
     {insurancePrice+item.price*days}
  </span>)
  )


  const handleChange=(event)=>{
    setCurrentCar([cars[event.target.value-1]]);
  };
  
 

  return ReactDom.createPortal(
  
  <>
  
    <div style={overlay_style}/>

    <div className="book-now-style">
     
      <div className="header">Complete your reservation</div>
      <i class="fa fa-close" style={{fontSize: '30px'}} onClick={onClose}></i>
      <div className='date-picker'>
          <span className="select-car-title">Select your car:</span>
          <select className="select-car" onChange={(event)=>handleChange(event)} defaultValue={selectedCar ? cars[selectedCar - 1].id : cars[0].id} >  
            {
              cars.map((item) => (
             <option key={item.id} value={item.id}>
               {item.name}
             </option>
              ))
            }
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
          <input className="forms-input" placeholder="First name *" autoComplete="first-name"></input> 
          <input className="forms-input" placeholder="Last name *" autoComplete="family-name"></input>
              
          <input className="forms-input" placeholder="Email address(optional)" id="input-field"></input>
          <PhoneInput
          className="phoneInput"
          defaultCountry="RO"
          placeholder="Enter phone number *"
          value={value}
          onChange={setValue}/> 

         
      </div>


      <div className="payment">

          <div className="insurance-check">
             <input className="insurance-check-box" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
             <span className="insurance-check-text">Full protection insurance</span>
          </div>

          <div className="terms-check">
             <input className="terms-check-box" type="checkbox"/>
             <span className="terms-check-text">Terms and conditions *</span>
          </div>
          
          <div className="age-check">
             <input className="age-check-box" type="checkbox" />
             <span className="insurance-check-text">I am over 18 *</span>
          </div>

          <div className="cost">
              <span className="car-rent">Car rent charge:</span>
              <span>${listPrice}</span>
          </div>

          <div className="insurance1">
             <span className="insurance-cost">Insurance cost:</span>
             <span>${insurancePrice}</span>
          </div>

            
      </div>
      
      <div className="total">
             <div className="total-cost-days"><span>Total cost for <span className="days"> {days} days:</span> </span>
            </div>
            <span className="total-cost">${listTotal}</span>
          </div>    
          
      <button className="submit" onClick={onClose}>Confirm reservation</button>    
    
    </div>
    
    
    </>,
    document.getElementById('reserve'),
    
  )
}

export default Reserve