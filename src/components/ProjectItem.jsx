import React from 'react'
import styles from './styles.module.css'

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

      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectItem
