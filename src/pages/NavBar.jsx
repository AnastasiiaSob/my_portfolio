import './../styles/styles.css'
import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logoImage from '../assets/logo_ried.svg'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setIsMenuOpen(false)
    }
  }

  const routerNavigate = (section) => {
      navigate(`/${section}`)
      closeMenuOnMobile()
  }

  return (
    <header className="navbar wrapper">
      <img src={logoImage} alt="logo" width="110" height="110" onClick={() => routerNavigate('')} />
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-elements">
          <Link to="about-me" className="navbar-link" onClick={() => routerNavigate('about-me')}>
            About Me
          </Link>
          <Link to="projects" className="navbar-link" onClick={() => routerNavigate('projects')}>
            My Projects
          </Link>
          <Link to="contact" className="navbar-link" onClick={() => routerNavigate('contact')}>
            Contact
          </Link>
          <Link to="impressum" className="navbar-link" onClick={() => routerNavigate('impressum')}>
            Impressum
          </Link>
        </div>
      </nav>
      <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu} />
    </header>
  )
}

export default Header
