import '../styles.css'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
  return (
    <section id='contact' className="contact wrapper">
      <div className="contact-info">
        <h2>Get in touch with me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit quibusdam sapiente id officiis incidunt nostrum facilis
          distinctio atque officia at iure, tempora, inventore ea quisquam perferendis assumenda, recusandae error?
        </p>
      </div>
      <div className="contact-buttons">
        <div>
          <SocialIcon url="https://mail.google.com/" target="_blank" />
          <p>Write me an Email</p>
        </div>
        <div>
          <SocialIcon url="https://www.linkedin.com/in/anastasiia-ried/" target="_blank" />
          <p>Contact me via LinkedIn</p>
        </div>
      </div>
    </section>
  )
}
