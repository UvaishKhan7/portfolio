import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n2vmpzv', 'template_s5mux0s', form.current, 'eRco774tz1W2vAKbO')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon' fill='#EA4335'/>
            <h4>Email</h4>
            <a href="mailto:uvaish8248@gmail.com">Send a mail</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' fill='#006AFF'/>
            <h4>Messenger</h4>
            <a href="https://m.me/AshuEltero" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' fill='#25D366' />
            <h4>WhatsApp</h4>
            <a href="https://wa.me/918737916531" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/*======== END OF CONTACT OPTIONS ========*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required />
          <input type="email" name="email" id="" placeholder='Your Email' required />
          <input type="text" name="subject" id="" placeholder='Your Subject' required />
          <textarea name="message" id="textarea" rows="7" placeholder='Your Message'></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact;
