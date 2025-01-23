import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "../styles/style.css";
import "../styles/responsive.css";
import logo from "../assets/images/logo.png";

const ArabicFooter = () => {
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
      <footer className="footer-section text-reverse">
        <div className="footer-left">
          <img src={logo} alt="Alfarah Logo" className="footer-logo text-right" />
          <p className="footer-info text-right">
          يلتزم الفرح بتقديم خدمات نوعية ومتميزة. تواصلوا معنا
          للحصول على المزيد من المعلومات ولبحث سبل التعاون.
          </p>
        </div>

        <div className="quick-links text-right">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/arabic">الرئيسية</Link></li>
            <li><Link to="/arabic-about">نبذة عنا</Link></li>
            <li><Link to="/arabic-services">خدماتنا</Link></li>
            <li><Link to="/arabic-careers">العمل معنا</Link></li>
            <li><Link to="/arabic-news&events">أخبارنا</Link></li>
            <li><Link to="/arabic-faq">أسئلة متكررة</Link></li>
          </ul>
        </div>

        <div className="footer-right text-right">
          <h2>تابعونا</h2>
          <div className="text-reverse social-media">
            <a href="https://www.facebook.com/profile.php?id=61566609495845" className="social-icon text-reverse" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
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
            تحدّث إلى مختص
            </button>

            {/* Get In Touch button */}
            <Link to="/contact">
              <button id="contact-link" className="Get-In">
              تواصل معنا
              </button>
            </Link>

            {/* Chat on WhatsApp button */}
            <button
              id="talkTo"
              className="Chat-On"
              onClick={openWhatsApp}
            >
           الدردشة على الواتساب
            </button>
          </div>
        </div>
      </footer>

      <div className="footer-copyright">
        <p> ©2024 الفرح. جميع الحقوق محفوظة</p>
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
          <h2>أترك رسالة</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name">الإسم:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">البريد الإليكتروني:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">الرسالة:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit" className="send-button">
            أرسل:
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ArabicFooter;
