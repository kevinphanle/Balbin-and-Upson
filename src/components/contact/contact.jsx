import React, { useState } from 'react';
import axios from 'axios';
import bert from '../../images/bert.JPG';

function Contact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setSent] = useState(false);
  const [wait, setWait] = useState(false);

  const data = {
    name,
    email,
    phone,
    message
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    setWait(true);
    axios({
      method: "POST", 
      url:"https://us-central1-balbinupson-c491a.cloudfunctions.net/sendMail", 
      data:  data
    }).then((response) => {
      if (response.data.status === 'success') {
        setSent(true)
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  let complete = 
    <div className="sent-confirmation">
      <p> Sent! Thank you!</p>
      <img src={bert} alt=""/>
    </div>
  
  let waitdialog = wait ? <p>Sending... Please wait.</p> : null;

  let form = isSent ? complete :
    <form onSubmit={handleSubmit} method="POST">
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
      />
    </div>

    <div className="form-group">
      <input
        type="email"
        className="form-control" aria-describedby="emailHelp"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
    </div>

    <div className="form-group">
      <input
        type="tel"
        className="form-control" aria-describedby="phonenumberHelp"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        placeholder="Phone"
      />
    </div>

    <div className="form-group">
      <textarea
        // rows="5"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="You're awesome...!"
      />
    </div>

      <button
        type="submit" className="contact-form-btn"
        
      >Submit</button>
      
      {waitdialog}
  </form>


  return (
    <div className="contact_us">
      <h2>Contact Us</h2>
      <p>We will try our best to get back to you within a few business days.</p>
      {form}
    </div>
  )
}

export default Contact;