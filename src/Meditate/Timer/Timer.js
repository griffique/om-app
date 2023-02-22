import './Timer.css';
import {FaPlay, FaPause} from 'react-icons/fa';
import { useState } from 'react';

function Timer(props) {

  const [playing, setPlaying] = useState(false);
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);

  const handleClick = ()=>{
    setPlaying(!playing);
    console.log(playing);
  }

  return (
    <div className="Timer" >
      <div className="play-button"><button className="button is-ghost is-large" onClick={()=>{handleClick()}}>{playing ? <FaPause /> :<FaPlay /> }</button></div>
      <p className="time">
        {minutes}:{seconds === 0 ? seconds+'0' : seconds}
      </p>
    </div>
  );
}

export default Timer;
