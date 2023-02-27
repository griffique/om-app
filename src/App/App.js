import './App.css';
import Meditate from '../Meditate/Meditate';
import bg from './starry-bg.jpg';
import Faqs from '../Faqs/Faqs';
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
          <p className="welcome-p"><span className="brand-name">OM</span> is a meditation trainer designed to support your experience on the cushion (or chair, or floor!) with real-time feedback and additional resources for when you are feeling stuck.</p>
          <br></br>
          <p className="welcome-p">Scroll down and press play to get started, then click the center button or tap the enter key whenever you notice a thought.</p>
        </div>
      </header>
      <Meditate />
      <Faqs />
      <div id="footer"><h2>Designed and Coded by <a className="link" href="http://www.quinneringriffin.com" rel="noreferrer" target="_blank">Quinn Griffin</a></h2></div>
    </div>
  );
}

export default App;
