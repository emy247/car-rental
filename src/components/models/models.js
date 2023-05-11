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
  const [active, setActive]=useState(cars[0]);


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


   const handleCarChange = (newCarInfo, newInfo,car) => {

    setCarInfo([newCarInfo]);
    setInfo([newInfo]);
    setSelectedBrand([newCarInfo]);
    setActive(car);
  };

  
  return ( 
        <div className="model-page" id="models">
        <h1 className="models-title">Select a car model  </h1>
        <div className="models" >
         
        <div className="select-cars">
          {cars.map((car, index) => (
            <button key={index} className={`btn ${active===car?'active':''}`} onClick={() => handleCarChange(car, informations[index])}>
              {car.name}
            </button>
          ))}
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