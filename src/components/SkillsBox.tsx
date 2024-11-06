import React from 'react'

function SkillsBox({ skillsIcon, title, skills }) {
  return (
    <div className="skills-container">
      <img className="skill-icon" src={skillsIcon} alt="skill-icon" />
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((item, index) => (
          <p key={item.skill} className='skills-item'>
            {item.skill}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SkillsBox
