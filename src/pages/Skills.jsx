import '../styles.css'
import React from 'react'
import SkillBars, {SKILLS} from '../components/SkillBars.jsx'

export default function Skills() {
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
