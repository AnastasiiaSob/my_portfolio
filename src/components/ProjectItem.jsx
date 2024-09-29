import React from 'react'
import styles from './styles.module.css'

export default function ProjectItem({image, text}) {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectImage}>
        <img src={image} alt="project-logo" />
      </div>
      <div className={styles.projectText}>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}
