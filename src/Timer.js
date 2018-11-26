import React from 'react'
import './Timer.css';

const convertMS = milliseconds => {
    milliseconds = 30100000
    var  hour, minute, seconds;
    console.log(milliseconds)
    seconds = Math.floor(milliseconds / 1000);
    console.log(seconds)
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    console.log(hour)
    return (String(hour).padStart(2, '0') +
    ':' + String(minute).padStart(2, '0') +
    ':' + String(seconds).padStart(2, '0')) 
}

const Timer = ({milliseconds}) => {

      return <div className ="number-text">
                <div className="number">  
                    <div className="numbers">{convertMS( milliseconds )}</div>     
                </div>
       <div className="text">
           <div className="texts">Hours</div>
           <div className="texts">Minutes</div>
           <div className="texts">Secondes</div>
       </div>   
       <div className="buttons">
           <button value ="Start">Start</button>
           <button value ="Reset">Reset</button>
       </div>
       
   </div> 
   }
   

export default Timer
