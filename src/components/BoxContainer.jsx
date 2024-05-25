import styles from './styles.module.css'
import React from 'react'

export default function BoxContainer({ headline, technologies }) {
  const techList = technologies.map((tech) => (
    <li>{tech}</li>
  ))
  return (
    <div className={styles.container}>
      <h2>{headline}</h2>
      <ul>{techList}</ul>
    </div>
  )
}
