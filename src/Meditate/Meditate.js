import './Meditate.css';
import Messages from './Messages/Messages';
import { useState } from 'react';
import bell from './bell.mp3';

function Meditate() {

  
  const messageArr = [
    "Keep it up!",
    "Go with the flow.",
    "In, out. Deep, slow.",
    "Let thoughts go by like clouds.",
    "Ease over effort.",
    "Just be here.",
    "I am not my thoughts.",
    "All vibes welcome.",
    "Do less.",
    "Present over perfect.",
    "Coudla, woulda, shoulda, Buddha.",
    "Be the observer, not the thinker."
  ]
  
  const messageMax = messageArr.length - 1;
  let [messageNo, setMessageNo] = useState(0);

  const audio = new Audio(bell);

  const handleClick = () => {
    audio.play();
    if (messageNo < messageMax) {setMessageNo(messageNo++);
      console.log(messageArr[messageNo]);}
    else {setMessageNo(0)
    console.log(messageNo)} 
  }

  let triggerButton = document.getElementById("tap");

  document.onkeydown = function (e) {
      if (e.key === "Enter") {
          e.preventDefault();
          triggerButton.click();
      }
  };
  return (
    <div className="Meditate">
      <Messages message={messageArr[messageNo]} />
      <div className="meditate-button">
        <button onClick={()=>{handleClick()}} className="button is-white" id="tap">CLICK<br></br>or<br></br>ENTER KEY</button>
      </div>
    </div>
  );
}

export default Meditate;
