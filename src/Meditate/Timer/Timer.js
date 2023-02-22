import './Timer.css';
import {FaPlay, FaPause} from 'react-icons/fa';
import { useState } from 'react';

function Timer(props) {

  const [playing, setPlaying] = useState(false);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [secondDisplay, setSecondDisplay] = useState('00');

  const handleClick = ()=>{
    setPlaying(!playing);
  }

  const ticker = () => {
    if (seconds === 0) {setSeconds(59)}
    else{setSeconds(seconds - 1);}
    if (seconds === 0 && minutes === 0) {
      setPlaying(false);
    }
    if (seconds === 60) {setSecondDisplay('00')}
    else if (seconds < 10 ) {setSecondDisplay('0'+seconds)}
    else setSecondDisplay(seconds);
  
  }

  if (playing) {setTimeout(()=> ticker(), 1000);}

  return (
    <div className="Timer" >
      <div className="play-button"><button className="button is-ghost is-large" onClick={()=>{handleClick()}}>{playing ? <FaPause /> : <FaPlay /> }</button></div>
      <p className="time">
        {minutes}:{secondDisplay}
      </p>
    </div>
  );
}

export default Timer;
