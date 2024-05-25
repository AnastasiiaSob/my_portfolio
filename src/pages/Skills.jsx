import '../styles.css'
import React from 'react'
import tsIcon from '../assets/skills/typescript.svg'
import BoxContainer from '../components/BoxContainer.jsx'

export default function Skills() {
    const frontendStack = ['TypeScript', 'React', 'Angular', 'CSS']
  return (
    <section id="skills" className="skills wrapper">
      <div className="skills-header">
        <h2>These are my skills</h2>
        <p>So much skills, so many smArT</p>
      </div>
      <div className="skills-list">
        <BoxContainer headline={"Frontend"} technologies={frontendStack}/>
        <BoxContainer headline={"Backend"} technologies={frontendStack}/>
        <BoxContainer headline={"DevOps"} technologies={frontendStack}/>
        <BoxContainer headline={"Languages"} technologies={frontendStack}/>
      </div>
    </section>
  )
}
