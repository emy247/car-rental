import './models.css';
import React from 'react'
import cars from './models_data';
import informations from './models_info';
import {useState} from 'react';
import Reserve from '../reserveCar/reserve';



const Models = () => {
  
  const [carInfo, setCarInfo]=useState([cars[0]]);

  const [info, setInfo]=useState([informations[0]]);

  const [isOpen,setIsOpen]=useState(false);
  
  const [selectedBrand, setSelectedBrand] = useState();
  


   const listCars=carInfo.map((item)=>
   (<div className="card" key={item.id}>
      <div className="card_image">
        <img src={item.image} alt=""/>
      </div>
      <div className="card_header">
        <h1 className="brand-name" id="brand-name">{item.name}</h1>
        <p className="description">{item.description}</p>

        <button className="reserve-now" onClick={()=>{setIsOpen(true); setSelectedBrand(item.id)}}>Reserve now</button>
        {console.log(selectedBrand)}
        <Reserve open={isOpen} onClose={()=>setIsOpen(false)}>Modal</Reserve>
        {isOpen && selectedBrand && <Reserve open={isOpen} onClose={()=>setIsOpen(false)} selectedCar={selectedBrand}>Modal</Reserve>}
      </div>
      
   </div>
   )
   
   );
   


   const listInfo=info.map((item)=>
   (
   <table key={item.id}>
    <tbody>
    <tr>
      <td className="table-type-1">Brand</td>
      <td className="table-info-1">{item.brand}</td>
    </tr>
    <tr>
      <td className="table-type-2">Model</td>
      <td className="table-info-2">{item.model}</td>
    </tr>
    <tr>
      <td className="table-type-1">Type</td>
      <td className="table-info-1">{item.type}</td>
    </tr>
    <tr>
      <td className="table-type-2">Transmission</td>
      <td className="table-info-2">{item.transmission}</td>
    </tr>
    <tr>
      <td className="table-type-1">Doors</td>
      <td className="table-info-1">{item.doors}</td>
    </tr>
    <tr>
      <td className="table-type-2">Fuel</td>
      <td className="table-info-2">{item.fuel}</td>
    </tr>
    </tbody>
  </table>)
   
   );

   

  const listStats=carInfo.map((item)=>{
    
    const loadBarWidth_power = 100*(item.power/300);
    const powerBar = {'--load-bar-width-power': `${loadBarWidth_power}%`};
    console.log(loadBarWidth_power);

    const loadBarWidth_comfort = item.comfort;
    const  comfortBar = {'--load-bar-width-comfort': `${loadBarWidth_comfort}%`};
    
    const loadBarWidth_trunk = item.trunk / 100; 
    const  trunkBar = {'--load-bar-width-trunk': `${loadBarWidth_trunk}%`};
 

   return (
   <div className="stats" key={item.id}>
   <div className="price-section"><span className="price">${item.price}</span><span className="per-day">/per day</span></div>              
   <span>Power</span>
   <div className="power-bar-empty" > <div className="power-bar" style={powerBar}></div></div>
   <span>Comfort</span>
   <div className="comfort-bar-empty"> <div className="comfort-bar" style={comfortBar}></div></div>
   <span>Trunk</span>
   <div className="trunk-bar-empty"> <div className="trunk-bar" style={trunkBar}></div></div>
     
 </div>);
 
 });


   
   const handleCarChange = (newCarInfo, newInfo) => {

    setCarInfo([newCarInfo]);
    setInfo([newInfo]);
    setSelectedBrand([newCarInfo]);

  };

  

  return ( 
        <div className="model-page" id="models">
        <h1 className="models-title">Select a car model  </h1>

        <div className="models" >
         
            <div className="select-cars">         
              <button className="btn" onClick={() => handleCarChange(cars[0], informations[0])}>{cars[0].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[1], informations[1])}>{cars[1].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[2], informations[2])}>{cars[2].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[3], informations[3])}>{cars[3].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[4], informations[4])}>{cars[4].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[5], informations[5])}>{cars[5].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[6], informations[6])}>{cars[6].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[7], informations[7])}>{cars[7].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[8], informations[8])}>{cars[8].name}</button>
              <button className="btn" onClick={() => handleCarChange(cars[9], informations[9])}>{cars[9].name}</button>            
            </div>
                  
            <div className="car-select">{listCars}</div>

            <div className="car-stats-info">
              {listStats}
              {listInfo} 
            </div> 

        </div>
        
       
      
        </div>
     
  )
}

export default Models