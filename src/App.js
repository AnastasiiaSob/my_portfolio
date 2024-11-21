import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../src/Home'
import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import NavBar from './sections/NavBar'
import NotFound from './sections/NotFound'
import ProjectsDetail from './sections/ProjectsDetails'
import './styles/styles.css'

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app-wrapper">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/projects" element={<ProjectsDetail />}></Route>
            <Route path="/about-me" element={<AboutMe />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/impressum" element={<h2> Impressum </h2>}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
