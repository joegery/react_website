import { useState } from "react";

const Header = () => {
    const [show, setShow] = useState(false);

    return (
    <header className="header" id="home">
    <nav className="nav container">
      <a href="#home" className="nav-logo">BARBARIAN <span>MMA</span> ⚔️</a>

      <div className={`nav-menu ${show ? 'show-menu' : ' '}`} id="nav-menu">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setShow(!show)}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setShow(!show)}>About</a>
          </li>
          <li className="nav-item">
            <a href="#program" className="nav-link" onClick={() => setShow(!show)}>Program</a>
          </li>
          <li className="nav-item">
            <a href="#pricing" className="nav-link" onClick={() => setShow(!show)}>Pricing</a>
          </li>
          <div className="nav-close" id="nav-close" onClick={() => setShow(!show)}>
            <i className="ri-close-line nav-close"></i>
          </div>
        </ul>

        <a href="#program" className="nav-button" onClick={() => setShow(!show)}>Become Member</a>
      </div>

      <div className="nav-toggle" onClick={() => setShow(!show)}>
        <i className="ri-menu-4-line"></i>
      </div>
    </nav>
  </header>
);
};


export default Header