import './../styles/styles.css'
import React from 'react'
import myPhoto from '../assets/avatar_2.png'

function AboutMe() {
  return (
    <section id="about-me" className="about-me wrapper">
      <div className="about-me-info">
        <div className="about-me-text">
          <h1>
            Frontend <span>Developer</span> <br />& IT-<span>Consultant</span>
          </h1>
          <div className="text-wrapper">
            <p>I love when IT meets business and makes it work like magic.</p>
          </div>
          <div className="about-me-buttons">
            <button className="primary-button" onClick={() => console.log('hello')}>
              Download my CV
            </button>
            <button className="secondary-button" onClick={() => console.log('hello')}>
              More About Me
            </button>
          </div>
        </div>
        <div className="about-me-foto">
          <div className="foto-wrapper">
            <img src={myPhoto} alt="myPhoto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
