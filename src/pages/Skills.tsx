import './../styles/styles.css'
import React from 'react'
import SkillBars from '../components/SkillBars'

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
