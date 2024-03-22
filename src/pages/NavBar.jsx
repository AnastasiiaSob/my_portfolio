import '../styles.css'
import React, { useState, useEffect } from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logoImage from '../assets/logo_ried.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="navbar wrapper">
      <img src={logoImage} alt="logo" width="100" height="100" />
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='navbar-elements'>
        <Link activeClass="navbar-active-link" spy={true} smooth={true} offset={-70} duration={500} to="about-me" className="navbar-link" onClick={closeMenuOnMobile}>
          About Me
        </Link>
        <Link activeClass="navbar-active-link" spy={true} smooth={true} offset={-70} duration={500} to="skills" className="navbar-link" onClick={closeMenuOnMobile}>
          My Skills
        </Link>
        <Link activeClass="navbar-active-link" spy={true} smooth={true} offset={-70} duration={500} to="projects" className="navbar-link" onClick={closeMenuOnMobile}>
          My Projects
        </Link>
        <Link activeClass="navbar-active-link" spy={true} smooth={true} offset={-70} duration={500} to="contact" className="navbar-link" onClick={closeMenuOnMobile}>
          Contact
        </Link>
        </div>
        {/* <FontAwesomeIcon icon="fa-solid fa-xmark" className='nav-close' onClick={toggleMenu}/>*/}
      </nav>
      <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu} />
    </header>
  )
}
