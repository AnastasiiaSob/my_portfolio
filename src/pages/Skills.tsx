import './../styles/styles.css'
import React from 'react'
import SkillBars from '../components/SkillBars'

/**
 * 1. Frontend-Technologien
    JavaScript/TypeScript
    HTML
    CSS
    Web Components
    React

  2. Testing
    Cypress.io
    JUnit

  3. Versionierung und Zusammenarbeit
    Git
    Kanban
    Scrum
    Jira

  4. Mobile und Cross-Platform
    Flutter

  5. Backend-Grundkenntnisse
    Python
    Java
 * 
 */

export type SkillType = {
  skill: string,
  level: number
}

const SKILLS = [
  { skill: 'HTML', level: 99 },
  { skill: 'CSS', level: 98 },
  { skill: 'JavaScript', level: 87 },
  { skill: 'Flutter', level: 45 },
  { skill: 'React', level: 20 },
  { skill: 'Java', level: 14 },
]

function Skills() {
  return (
    <section id="skills" className="skills wrapper">
      <div className="skills-header">
        <h2>These are my skills</h2>
        <p>This section is made using useState and useEffect React Hooks.</p>
      </div>
      <SkillBars hue="287" saturation="100" skills={SKILLS} />
    </section>
  )
}

export default Skills
