import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/style.css";
import "../styles/responsive.css";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  }); // State to handle form data

  // Open modal when the button is clicked
  const openModal = () => setModalOpen(true);

  // Close modal when the close button is clicked
  const closeModal = () => setModalOpen(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data (replace this with backend logic if needed)
    console.log('Form Submitted:', formData);

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Close the modal
    closeModal();
  };

  // Function to open WhatsApp chat
  const openWhatsApp = () => {
    window.open("https://wa.me/971567019877", "_blank"); // Update the link with your number
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-left">
          <img src={logo} alt="Alfarah Logo" className="footer-logo" />
          <p className="footer-info">
            Alfarah is dedicated to providing exceptional services and solutions. We are committed to quality and excellence in all that we do. Contact us for more information and partnership opportunities.
          </p>
        </div>

        <div className="quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/news&events">News & Events</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>Follow Us</h2>
          <div className="social-media">
            <a href="https://www.facebook.com/profile.php?id=61566609495845" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/alfarahcenter/posts/?feedView=all" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/alfarahcenter.ae/" className="social-icon" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="button-container-beneath">
            {/* Talk to Professional button that opens the modal */}
            <button
              id="talkToProsBtnNew"
              className="talk-to-pros-btn"
              onClick={openModal} // This triggers the modal opening
            >
              Talk to Professional
            </button>

            {/* Get In Touch button */}
            <Link to="/contact">
              <button id="contact-link" className="Get-In">
                Get In Touch
              </button>
            </Link>

            {/* Chat on WhatsApp button */}
            <button
              id="talkTo"
              className="Chat-On"
              onClick={openWhatsApp}
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </footer>

      <div className="footer-copyright">
        <p>&copy; 2024 Alfarah. All rights reserved.</p>
      </div>

      {/* Modal */}
      <div id="contactModal" className={`contact-modal ${modalOpen ? 'open' : ''}`}>
        <div className="contact-modal-content">
          <span
            id="contact-close"
            className="contact-close"
            onClick={closeModal} // Close modal when clicked
          >
            &times;
          </span>
          <h2>Leave Your Message</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
