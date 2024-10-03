import '../styles.css'
import React from 'react'
import ContactForm from './../components/ContactForm'

function Contact() {
  return (
    <section id="contact" className="contact wrapper">
      <div className="contact-info">
        <h2>Get in touch with me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fugit quibusdam sapiente id officiis incidunt nostrum facilis
          distinctio atque officia at iure, tempora, inventore ea quisquam perferendis assumenda, recusandae error?
        </p>
      </div>
      <div className="contact-buttons">
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
