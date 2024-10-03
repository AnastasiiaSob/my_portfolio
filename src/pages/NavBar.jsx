import '../styles.css'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logoImage from '../assets/logo_ried.svg'
import { useNavigate } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigateHome = () => {
    navigate('/');
  };

  const navigateAboutMe = () => {
    navigate('/about-me');
    closeMenuOnMobile()
  };

  const navigateProjects = () => {
    navigate('/projects');
    closeMenuOnMobile()
  };

  const navigateContact = () => {
    navigate('/contact');
    closeMenuOnMobile()
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="navbar wrapper">
      <img src={logoImage} alt="logo" width="110" height="110" onClick={navigateHome}/>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-elements">
          <Link
            to="about-me"
            className="navbar-link"
            onClick={navigateAboutMe}
          >
            About Me
          </Link>
          <Link
            to="projects"
            className="navbar-link"
            onClick={navigateProjects}
          >
            My Projects
          </Link>
          <Link
            to="contact"
            className="navbar-link"
            onClick={navigateContact}
          >
            Contact
          </Link>
        </div>
      </nav>
      <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu} />
    </header>
  )
}

export default Header
