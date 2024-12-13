import React from 'react'

// The main difference between React class components and functional components is
// how they manage state and lifecycle methods.
/**
 * Class components: older, more complex, use this, lifecycle methods.
Functional components: modern, simpler, use Hooks for state and side effects.
 */
function ProjectItem({ image, title, description }) {
  return (
    <div className="project-item">
      <div className="project-image">
        <img src={image} alt="project-logo" />
      </div>

      <div className="project-content">
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
        <button className="primary-button" onClick={() => console.log('hello')}>
          See My Projects
        </button>
      </div>
    </div>
  )
}

export default ProjectItem
