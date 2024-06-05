import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the form data to an email service or API
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="section contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        <h2>Connect with me</h2>
        <a href="https://www.linkedin.com/in/ryanpyles" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:ryan.pyles@me.com">Email</a>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default Contact;
