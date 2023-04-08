import React from 'react';
import "./faq.css";
import Supra from "../../media/supra.png";
import {useState} from 'react';
import questions_answers from './questions_answers';



const Faq = () => {


  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleClick = (questionId) => {
    setActiveQuestion(questionId === activeQuestion ? null : questionId);}
  
  const listQuestion=questions_answers.map(({id,question,answer})=>
  (<div className="question_answer" id={id}>
       <div className={`question ${id === activeQuestion ? 'active' : 'inactive'}`} onClick={() => handleClick(id)}>{question}</div>
       <div className={`answer ${id === activeQuestion ? 'active' : 'inactive'}`}>{answer}</div>
          
   </div>
  )
  
  )



  return (
    <div className="faq">
        <div className="faqs">
            <span className="faq-title">FAQ<span style={{color:"rgb(83, 96, 214)"}}>s</span></span>
            <span className="frequently-asked-questions">Frequently Asked Questions</span>        
            <span className="faq-description">Frequently asked questions about the 
                  car rental reservation process. Answers to common concerns and inquiries.</span> 
            <div className="questions">
             {listQuestion}
            </div>
              
                 
        </div>
        <div className="supra-wrapper">
            <img  className="supra" src={Supra} alt=""></img>
        </div>
    </div>
  )

}

export default Faq