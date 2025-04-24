import './App.css';
import Meditate from '../Meditate/Meditate';
import bg from './starry-bg.jpg';
import Navbar from './Navbar';

// TO DO:

// navbar: meditate, FAQs, blog
// add blog link (TBA)
// voiceovers
// toggle for message voiceover mute
// language modes: French, Italian, Spanish, German, Swedish?

//DONE 

//timer function including pause. 
// start and stop bells
// FAQS
// monkey mind function



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={bg} alt="stars" id="bg"></img>
        <h1 className="welcome">WELC<span className="brand-name">OM</span>E.</h1>
        <div className="welcome-p-area">
          <p className="welcome-p"><span className="brand-name">OM</span> is a meditation trainer designed to support your experience on the cushion (or chair, or floor!) with real-time feedback.</p>
          <br></br>
          <p className="welcome-p">To get started:</p>
          <br></br>
          <ol className="directions">
            <li>Press Play.
              <ul><li>A timer for ten minutes will begin.</li></ul>
            </li>
            <li>Rest your attention on your chosen anchor, e.g., your breath, or a sound in the room.</li>
            <li>Any time you notice a thought, tap the ENTER key or click the button.</li>
            <li>Return to your anchor and repeat until the timer runs out and the bell rings.</li>
          </ol>
        </div>
      </header>
      <Meditate />
      <div id="footer"><h2>Designed and Coded by <a className="link" href="http://www.quinneringriffin.com" rel="noreferrer" target="_blank">Quinn Griffin</a></h2></div>
    </div>
  );
}

export default App;
