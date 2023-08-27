import "./App.css";

function Navbar() {
  return (
    <nav className="navbar is-black" role="navigation">
      <div id="navbarItems">
        <div className="navbar-start">
          <a className="navbar-item nav-link" href="/">
            <img alt="OM logo" src="/favicon-32x32.png"></img>
          </a>
          <a className="navbar-item nav-link" href="#meditate">
            Meditate
          </a>
          <a
            className="navbar-item nav-link"
            href="https://IncidentalBuddhist.com"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <a className="navbar-item nav-link" href="#faqs">
            FAQs
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
