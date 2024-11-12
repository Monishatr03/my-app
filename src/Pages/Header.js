import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">Powered By SidLabs</div>
      <nav className={`header-nav ${isNavOpen ? 'active' : ''}`}>
        <a href="#about-dr-manpreet">About Dr. Manpreet</a>
        <a href="#about-assessments">About Assessments</a>
        <a href="#care-platform">CARE Platform</a>
      </nav>
      <div className="hamburger" onClick={toggleNav}>
        ☰
      </div>
    </header>
  );
}

export default Header;
