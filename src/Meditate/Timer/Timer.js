import './Timer.css';
import {FaPlay, FaPause} from 'react-icons/fa';
import bell from '../bell.mp3';

import { useState } from 'react';

function Timer(props) {
  
  const [started, setStarted] = useState(false);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [secondDisplay, setSecondDisplay] = useState('00');

  const audio = new Audio(bell);

 

  const handleClick = ()=>{
    props.setPlaying(!props.playing);
    if (!started) {audio.play();}
    setStarted(true);
  }

  const ticker = () => {
    if (seconds === 0 && minutes > 0) {setSeconds(59); }
    else{setSeconds(seconds - 1);}
    if (seconds === 0 && minutes === 0) {
      props.setPlaying(false);
      audio.play();
    }

    if (seconds === 60) {setSecondDisplay('00')}
    else if (seconds < 10 ) {setSecondDisplay('0'+seconds)}
    else setSecondDisplay(seconds);
    
    if (seconds === 59) {setMinutes(minutes - 1);}
  
  }

  if (props.playing) {setTimeout(()=> ticker(), 1000);}

  return (
    <div className="Timer" >
      <div className="play-button"><button className="button is-ghost is-large" onClick={()=>{handleClick()}}>{props.playing ? <FaPause /> : <FaPlay /> }</button></div>
      <p className="time">
        {minutes}:{secondDisplay}
      </p>
    </div>
  );
}

export default Timer;
