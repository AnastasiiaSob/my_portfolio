import React from 'react'
import styles from './styles.module.css'
import image from '../assets/logo_short.svg';

export default function ProjectItem() {
  return (
    <div className={styles.projectItem}>
      <div className={styles.projectImage}>
        <img src={image} alt="project-logo" height={30} width={30} />
      </div>
      <div className={styles.projectText}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa ab tenetur, in autem doloribus quidem sint vero labore dolore
          laborum dolor eligendi expedita culpa, doloremque odio quas sed! Excepturi, non.
        </p>
      </div>
    </div>
  )
}
