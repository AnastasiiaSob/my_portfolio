import './../styles/styles.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logoImage from '../assets/logo_black.svg'
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

  const routerNavigate = (section: string) => {
      navigate(`/${section}`)
      closeMenuOnMobile()
  }

  return (
    <header className="navbar wrapper">
      <img src={logoImage} alt="logo" width="140" height="140" onClick={() => routerNavigate('')} />
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-elements">
          <div className="navbar-link" onClick={() => routerNavigate('about-me')}>
            ABOUT ME
          </div>
          <div className="navbar-link" onClick={() => routerNavigate('projects')}>
            PROJECTS
          </div>
          <div className="navbar-link" onClick={() => routerNavigate('contact')}>
            CONTACT
          </div>
          <div className="navbar-link" onClick={() => routerNavigate('impressum')}>
            IMPRESSUM
          </div>
        </div>
      </nav>
      <FontAwesomeIcon icon={faBars} className="hamburger" onClick={toggleMenu} />
    </header>
  )
}

export default Header