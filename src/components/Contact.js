import React, { useState } from 'react';

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
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-white mb-6">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-600 rounded-md bg-gray-800 text-white h-32"
          ></textarea>
        </div>
        <button type="submit" className="w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">Send</button>
      </form>
      <div className="text-center mt-6">
        <h2 className="text-xl font-bold text-white">Connect with me</h2>
        <a href="https://www.linkedin.com/in/ryanpyles" target="_blank" rel="noopener noreferrer" className="block text-orange-400 hover:underline">LinkedIn</a>
        <a href="mailto:ryan.pyles@me.com" className="block text-orange-400 hover:underline">Email</a>
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="block text-orange-400 hover:underline">GitHub</a>
      </div>
    </div>
  );
}

export default Contact;
