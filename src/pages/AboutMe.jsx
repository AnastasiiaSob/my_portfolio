import '../styles.css'
import React from 'react'
import myPhoto from '../assets/avatar_2.png'

function AboutMe() {
  return (
    <section id="about-me" className="about-me wrapper">
      <div className="about-me-info">
        <div className="about-me-text">
          <h1>
            <span>{'<'}</span>Anastasiia<span>{'>'}</span> here!
          </h1>
          <div className="text-wrapper">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quam laudantium, dolor voluptate voluptas, vero cumque ad,
              autem sunt voluptatem sapiente maxime suscipit doloremque delectus corrupti sint quas deleniti facilis!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, deserunt vel aliquid esse similique accusantium deleniti
              impedit ab exercitationem omnis! Nemo adipisci est in itaque. Nesciunt ullam minima neque. Ullam.
            </p>
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
