import './App.css';
import Meditate from '../Meditate/Meditate';
import bg from './starry-bg.jpg';


// TO DO:

// timer function including pause. 
// start and stop bells
// language mode
// navbar
// about
// blog link (TBA)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bg} alt="stars" id="bg"></img>
        <h1 className="welcome">WELC<span className="brand-name">OM</span>E.</h1>
        <div className="welcome-p-area">
          <p className="welcome-p"><span className="brand-name">OM</span> is the meditation tool designed to support your experience on the cushion (or chair) with real-time feedback, progress tracking and additional resources for when you are feeling stuck.</p>
          <br></br>
          <p className="welcome-p">Set the timer and press play to get started, then click the center button or tap the enter key to record a thought you have noticed. If you want to track your progress, create an account; or feel free to use our tool as a guest.</p>
        </div>
      </header>
      <Meditate />
      <div id="footer"><h2>Designed and Coded by <a href="http://www.quinneringriffin.com" rel="noreferrer" target="_blank">Quinn Griffin</a></h2></div>
    </div>
  );
}

export default App;
