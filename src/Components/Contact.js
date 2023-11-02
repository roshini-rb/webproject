import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bookingTime: '',
    foodPreferences: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending a message to the restaurant with the collected data
    const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nBooking Time: ${formData.bookingTime}\nFood Preferences: ${formData.foodPreferences}\nEmail: ${formData.email}`;
    alert("Simulating sending the following message to the restaurant:\n\n" + message);

    // You would typically send this data to the server using an API request
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundImage: 'url("data:image/jpeg;base64,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")', // Add your image URL here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative', // For pseudo-elements
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay color
      zIndex: -1, // Pseudo-element goes beneath content
    },
    color: 'white', // Set text color to white
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow
  };

  const labelStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={centerStyle}>
      <h1>Contact Us</h1>
      <p style={{ fontSize: '20px' }}>Email: contact@example.com</p>
      
      <form onSubmit={handleSubmit} className="contact">
        <label htmlFor="name" style={labelStyle}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />
        

        <label htmlFor="phone" style={labelStyle}>Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />

        <label htmlFor="bookingTime" style={labelStyle}>Booking Time:</label>
        <input
          type="text"
          id="bookingTime"
          name="bookingTime"
          value={formData.bookingTime}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />

        <label htmlFor="foodPreferences" style={labelStyle}>Food Preferences:</label>
        <input
          type="text"
          id="foodPreferences"
          name="foodPreferences"
          value={formData.foodPreferences}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />

        <label htmlFor="email" style={labelStyle}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;