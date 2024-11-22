import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import ProjectsOverview from './sections/ProjectsOverview'
import Contact from './sections/Contact'
import React from 'react'
import LocationInfo from './sections/LocationInfo'

function Home() {
  return (
    <>
      <AboutMe />
      <Skills />
      <ProjectsOverview />
      <Contact />
      <LocationInfo />
    </>
  )
}

export default Home
