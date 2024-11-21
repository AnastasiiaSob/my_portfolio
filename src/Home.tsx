import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import ProjectsOverview from './sections/ProjectsOverview'
import Contact from './sections/Contact'
import React from 'react'

function Home() {
  return (
    <>
      <AboutMe />
      <Skills />
      <ProjectsOverview />
      <Contact />
    </>
  )
}

export default Home
