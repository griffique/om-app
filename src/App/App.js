import './App.css';
import Meditate from '../Meditate/Meditate';
import bg from './starry-bg.jpg';
import {FaArrowDown} from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bg} alt="stars" id="bg"></img>
        <h1 className="welcome">WELC<span className="brand-name">OM</span>E.</h1>
        <div className="welcome-p-area">
          <p className="welcome-p"><span className="brand-name">OM</span> is the meditation tool designed to support your experience on the cushion (or chair) with real-time feedback, progress tracking and additional resources for when you are feeling stuck.</p>
          <br></br>
          <p className="welcome-p">Set the timer and press play to get started, then click the center button or tap your spacebar to record a thought you have noticed. If you want to track your progress, create an account; or feel free to use our tool as a guest.</p>
        </div>
         <div className="try">
          <h2>Try It<br></br><FaArrowDown/></h2>
        </div>
      </header>
      <Meditate />
    </div>
  );
}

export default App;
