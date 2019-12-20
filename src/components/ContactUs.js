import React, {useState} from 'react';
import emailjs from 'emailjs-com';



export default function ContactUs() {

  const [email, setEmail] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'tao_by_night', e.target, 'user_JhMvHUyg9uzqFksC7Ppue')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  const add = (event) => {
      setEmail(event.target.value)
      console.log(email)
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={add} />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}