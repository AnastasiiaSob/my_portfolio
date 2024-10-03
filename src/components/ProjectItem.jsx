import React from 'react'
import styles from './styles.module.css'

// The main difference between React class components and functional components is 
// how they manage state and lifecycle methods.
/**
 * Class components: older, more complex, use this, lifecycle methods.
Functional components: modern, simpler, use Hooks for state and side effects.
 */
class ProjectItem extends React.Component {
  render(){

    // destructuring assignment 
    const { image, title, description } = this.props;

    return (
      <div className={styles.projectItem}>
        <div className={styles.projectImage}>
          <img src={image} alt="project-logo" />
        </div>
       
        <div className={styles.projectText}>
        <h3>{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    )
  }
}

export default ProjectItem