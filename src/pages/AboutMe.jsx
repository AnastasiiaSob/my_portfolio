import '../styles.css'
import React from 'react'
import myPhoto from '../assets/logo192.png'

export default function AboutMe() {
  return (
    <section id='about-me' className="about-me">
      <div className="greeting">
        <h1>Anastasiia here! 🧡</h1>
      </div>
      <div className="about-me-info">
        <div className="about-me-text">
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
            <img src={myPhoto} alt="myPhoto" width="200" height="200" />
          </div>
        </div>
      </div>
    </section>
  )
}
