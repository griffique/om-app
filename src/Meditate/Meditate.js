import './Meditate.css';
import Messages from './Messages/Messages';
import Timer from './Timer/Timer';
import { useState } from 'react';
import bell from './bell.mp3';

function Meditate() {
  
  
  const messageArr = [
    "Press play to begin.",
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
  const [messageNo, setMessageNo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (num) => {
    setModalOpen(!modalOpen);
}

  const audio = new Audio(bell);

  const handleClick = () => {
    audio.pause();
    audio.play();
    if (messageNo < messageMax) {
      setMessageNo(messageNo + 1);
    }
    else {setMessageNo(1)
    }
    setClicks(clicks + 1); 
    if (clicks === 6) {
      toggleModal();
    }
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
      <Messages message={messageNo} messageArr={messageArr} />
      <div className="meditate-button">
        <button title= {playing ? null : "Press play to begin."} disabled={!playing} onClick={()=>{handleClick()}} className="button is-white" id="tap" autoFocus>CLICK<br></br>or<br></br>ENTER KEY</button>
      </div>
      <Timer playing={playing} setPlaying={setPlaying} />
      <div className={`modal modal-monkey-mind ${modalOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
            <div className="modal-content">
              <p className='modal-content'>Your mind is active today, and that's great! Take one breath, then close this window.</p>
            </div>
          <button className="modal-close is-large" aria-label="close" onClick={()=>{toggleModal();}}></button>
        </div>
    </div>
  );
}

export default Meditate;
