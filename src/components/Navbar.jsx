import React, { useState } from 'react';
import "../styles/style.css";
import "../styles/responsive.css";
import logo from "../assets/images/new-logo.png";
import { Link } from 'react-router-dom';
import form from "../assets/img/APPLICATION_FORM.pdf"

const Navbar = () => {
  // State for handling mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  
    // Open modal when the button is clicked
    const openModal = () => setModalOpen(true);
  
    // Close modal when the close button is clicked
    const closeModal = () => setModalOpen(false);


  const downloadForm = () => {
    // URL of the form you want to download
    const formUrl = {form};  // Change to your file's URL
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = formUrl;
    link.download = 'Application_Form.pdf';  // Optional: specify the file name to be used
    link.target = '_blank'; // Open in a new tab if needed
    
    // Trigger the download by simulating a click
    link.click();
  };

  return (
    <>
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img src={logo} alt="LOGO IMAGE" />
        </div>

        {/* Menu icon for mobile view */}
        <div
          className={`fas fa-bars ${isMenuOpen ? 'hidden' : ''}`}
          id="menu-icon"
          onClick={toggleMenu}
        ></div>

        {/* Close icon for mobile view */}
        <div
          className={`fas fa-times ${isMenuOpen ? '' : 'hidden'}`}
          id="close-icon"
          onClick={toggleMenu}
        ></div>

        <div className="header-link">
          <Link to="/faq" id="faq-link">FAQs</Link>
          <Link to="#" id="talkToProsBtn"  onClick={openModal} >Talk To Professional</Link>
          <Link to="/arabic-index.html" id="arabic-link">العربية</Link>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <i className="fas fa-search"></i>
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>

      {/* Main navigation menu */}
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} id="main-nav">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li>
            <Link to="/about" className="nav-link">
              About Us <i className="fa-solid fa-caret-down dropdown-icon"></i>
            </Link>
            <ul>
              <li><Link to="/about" className="nav-link">Our Team</Link></li>
              <li><Link to="/about" className="nav-link">Vision & Mission</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Services <i className="fa-solid fa-caret-down dropdown-icon"></i>
            </Link>
            <ul>
              <li><Link to="/services" className="nav-link">Assessment</Link></li>
              <li><Link to="/services" className="nav-link">Full Day Program</Link></li>
              <li><Link to="/services" className="nav-link">Therapy</Link></li>
            </ul>
          </li>
          <li><Link to="/facility" className="nav-link">Facilities</Link></li>
          <li><Link to="/careers" className="nav-link">Careers</Link></li>
          <li><Link to="/news&events" className="nav-link">News & Events</Link></li>
          <li>
            <Link to="#" className="nav-link">
              Application Form <i className="fas fa-download"></i>
            </Link>
            <ul>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfm8_QR_t7AoCTDGm4N4tCyXP7VnHvkPY0Aleybmawjdj6kfA/viewform"
                  id="confirm-download"
                  className="nav-link"
                >
                  Registration form
                </a>
              </li>
              <li>
              <Link to="#" id="cancel-download" className="nav-link" onClick={downloadForm}>Download Form</Link>
              </li>
            </ul>
          </li>
          <li className="arabic">
            <Link to="/arabic-index.html" id="arabic-link">العربية</Link>
          </li>
        </ul>
      </nav>
    </header>

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
          <h2>Leave Here Message</h2>
          <form
            id="contactForm"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="31c3f84a-a9aa-41ee-9c8d-4406996a1bf7"
            />
            <input
              type="hidden"
              name="to_email"
              value="info@alfarahcenter.com"
            />
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      </>
  );
};

export default Navbar;