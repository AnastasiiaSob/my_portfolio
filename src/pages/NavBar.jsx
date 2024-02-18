import '../styles.css'
import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logoImage from '../assets/logo192.png';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <div className="navbar">
        <div>
        <img src={logoImage} alt="logo" width="45" height="45" />
        </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <Link
          activeClass="navbar-active-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="heroSection"
          className="navbar-link"
        >
          Meine Projekte
        </Link>
        <Link
          activeClass="navbar-active-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="heroSection"
          className="navbar-link"
        >
          Über Mich
        </Link>
        <Link
          activeClass="navbar-active-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="heroSection"
          className="navbar-link"
        >
          Kontakt
        </Link>
        <Link
          activeClass="navbar-active-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="heroSection"
          className="navbar-link"
        >
          Impressum
        </Link>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  )
}
