import '../styles.css'
import React from 'react'
import SkillBars from '../components/SkillBars.jsx'

const SKILLS = [
  { type: 'HTML', level: 99 },
  { type: 'CSS', level: 98 },
  { type: 'JavaScript', level: 87 },
  { type: 'Flutter', level: 45 },
  { type: 'React', level: 20 },
  { type: 'Java', level: 14 },
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
