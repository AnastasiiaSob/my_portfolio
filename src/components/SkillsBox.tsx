import React from 'react'

function SkillsBox({ skillsIcon, title, skills }) {
  return (
    <div className="skills-container">
      <img className="skill-icon" src={skillsIcon} alt="skill-icon" />
      <h3>{title}</h3>
      <ul className="skills-bars">
        {skills.map((item, index) => (
          <li key={item.skill}>
            <p>{item.skill}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SkillsBox
