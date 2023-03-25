import React from 'react';
import "./insurance.css";

const Insurance = () => {


  return (
    <div className="insurance">
      <div className="quote"><span className="travel">Travel with </span><span className="piece">piece of mind</span></div>
      <span className="insurance-description">At the counter, the car hire company will block a deposit amount on your credit card. 
        You could lose your whole deposit if the car is damaged or stolen, 
        but as long as you have our<span style={{color:'rgb(83, 96, 214)'}}> Full Protection Insurance</span>,
          Auto-Alliance will refund you! 
         (The cover price you see includes all applicable taxes and fees).</span>
      
         
      <div className="cover">
            <div className="line"/>
            <div className="what">
                <span className="what-is">What is covered:</span>
                <span>Collision & theft damage </span>
                <span>Wheels & tyres, windows, mirrors</span>
                <span>Administration and breakdown charges</span>
            </div>
            <div className="no-insurance">
            
                <span className="no">No insurance</span>
                <span>_</span>
                <span>_</span>
                <span>_</span>
            </div>
        
            <div className="full-insurance">      
                <span className="full">Full protection insurance</span>
                <span><i class='fa fa-check-circle' style={{color:'rgb(83, 96, 214)'}}></i></span>
                <span><i class='fa fa-check-circle' style={{color:'rgb(83, 96, 214)'}}></i></span>
                <span><i class='fa fa-check-circle' style={{color:'rgb(83, 96, 214)'}}></i></span>
            </div>
        </div>
        <span className="insurance-price">Total price:<span style={{color:"rgb(83, 96, 214)"}}> $18</span></span>
        <span className="cancellation">FREE CANCELLATION </span>
      
    </div>
  )
}

export default Insurance