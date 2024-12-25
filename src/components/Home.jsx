import React, { useState } from "react";
import "../styles/style.css";
import "../styles/responsive.css";
import homeImage from "../assets/img/1.png";
import fullDayProgramIcon from "../assets/icons/full_day_program.png";
import assessmentIcon from "../assets/icons/assessment.png";
import speechTherapyIcon from "../assets/icons/speech_language_therapy.png";
import behavioralTherapyIcon from "../assets/icons/behavioral_therapy.png";
import occupationalTherapyIcon from "../assets/icons/occupational_therapy.png";
import individualSessionIcon from "../assets/icons/individual_session.png";
import emailIcon from "../assets/icons/email.png";
import phoneIcon from "../assets/icons/phone.png";
import locationIcon from "../assets/icons/location.png";
import infoIcon from "../assets/icons/info.png";
import sensoryRoomIcon from "../assets/icons/sensoryRoomIcon.png"
import gymIcon from '../assets/icons/icon4.png';
import serviceImage1 from '../assets/images/11.jpg';
import serviceImage2 from '../assets/images/10.jpg';
import serviceImage3 from '../assets/images/14.jpg';
import serviceImage4 from '../assets/images/13.jpg';
import individualTherapyIcon from "../assets/icons/individual.png"
import fullDayProgramIconSmall from "../assets/icons/filldayclass.png"
import { Link } from "react-router-dom"; // For navigation

const Home = () => {
  // State for the modal

  return (
    <>
      {/* Home Section */}
      <section className="home-section">
        <div className="home-text">
          <h1>
            Welcome to <span className="colorful-text">Alfarah</span>
          </h1>
          <h2>
            Together, we pave your child’s way to <br />
            <span>LEARN, ENJOY AND GROW.</span>
          </h2>
          <p>
            We aim to create a new destination where every child's potential can
            flourish, ensuring the highest quality of care and support for
            children of determination, enabling them to achieve their goals
            through comprehensive and specialized programs.
          </p>
          <Link to="/services" className="gradient-button"> {/* Fixed link to services page */}
            Explore More
          </Link>
        </div>
        <div className="home-image">
          <img src={homeImage} alt="Home" />
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="facilities-content">
          <div className="facilities-header">
            <h1>Our Services</h1>
            <p>
              Explore the various facilities we offer to enhance your experience and provide top-notch services.
            </p>
          </div>
          <div className="facilities-cards">
            <div className="card-facility">
              <img src={fullDayProgramIcon} alt="Full-Day Program" className="card-icon-facilities" />
              <h3>Full-Day Program</h3>
              <p>A classroom-like experience focused on skills development for children with mild to moderate Autism Spectrum Disorder and Intellectual Disability.</p>
            </div>
            <div className="card-facility">
              <img src={assessmentIcon} alt="Assessment" className="card-icon-facilities" />
              <h3>Assessment</h3>
              <p>Conducting standardized assessments using tools well-known in the field of child development and learning.</p>
            </div>
            <div className="card-facility">
              <img src={speechTherapyIcon} alt="Speech and Language Therapy" className="card-icon-facilities" />
              <h3>Speech and Language Therapy</h3>
              <p>Communication is a right for every child. This intervention reinforces the child’s ability to communicate functionally.</p>
            </div>
            <div className="card-facility">
              <img src={behavioralTherapyIcon} alt="Behavioral Therapy" className="card-icon-facilities" />
              <h3>Behavioral Therapy</h3>
              <p>Focusing on individual strengths, we help children learn new skills and address a wide range of challenging behaviors.</p>
            </div>
            <div className="card-facility">
              <img src={occupationalTherapyIcon} alt="Occupational Therapy" className="card-icon-facilities" />
              <h3>Occupational Therapy</h3>
              <p>Empowering motor and sensory skills, enabling children to perform daily activities independently and effectively.</p>
            </div>
            <div className="card-facility">
              <img src={individualSessionIcon} alt="Psychological Interventions" className="card-icon-facilities" />
              <h3>Psychological Interventions</h3>
              <p>Helping the child balance <strong>THOUGHTS</strong>, <strong>FEELINGS</strong>, and <strong>ACTIONS</strong>.</p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <div className="button">
            <Link to="/services" style={{ color: "#003C71" }}> {/* Fixed link to services page */}
              Explore More
            </Link>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </section>

      <section className="services-section">
      <div className="image-over-side-5"></div>

      <div className="services-left">
        <div className="collage">
          <img src={serviceImage1} alt="Service 1" id="image-1" className="collage-item one" />
          <img src={serviceImage2} alt="Service 2" id="image-2" className="collage-item two" />
          <img src={serviceImage3} alt="Service 3" id="image-3" className="collage-item three" />
          <img src={serviceImage4} alt="Service 4" id="image-4" className="collage-item four" />
        </div>
      </div>

      <div className="services-right">
        <h1>Our Facilities</h1>
        <p>
          We aim to reflect the quality of care children will receive through our facilities, creating a welcoming and joyful rehabilitation environment equipped with necessary resources. We place a high value on health and safety measures, as well as privacy and comfort for parents.
        </p>

        <div className="services-cards">
          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header">
                <img src={sensoryRoomIcon} alt="Card 1" className="card-icon-new" />
                <h3>Sensory Room</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header">
                <img src={fullDayProgramIconSmall} alt="Card 2" className="card-icon-new" />
                <h3>Classes of full-day program</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header">
                <img src={individualTherapyIcon} alt="Card 3" className="card-icon-new" />
                <h3>Individual therapy rooms</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>

          <a href="./facility.html" className="card-link">
            <div className="card-new">
              <div className="card-header">
                <img src={gymIcon} alt="Card 4" className="card-icon-new" />
                <h3>Gym</h3>
                <i className="fas fa-arrow-right"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>


    <section className="contact-section">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <div className="contact-item">
          <img src={emailIcon} alt="Email Icon" className="contact-icon" />
          <p>Email: info@alfarahcenter.com</p>
        </div>
        <div className="contact-item">
          <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
          <p>Phone: 0567019877</p>
        </div>
        <div className="contact-item">
          <img src={locationIcon} alt="Location Icon" className="contact-icon" />
          <p>
            Al Nawafil St - Khalifa City - Sector 33
            <br />
            Abu Dhabi
          </p>
        </div>
        <div className="contact-item">
          <img src={infoIcon} alt="Info Icon" className="contact-icon" />
          <p>
            A dedicated team of professionals passionate about contributing to
            the well-being of children, especially those of determination.
          </p>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.307835839213!2d54.566214574812186!3d24.40537086331785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e465fb41e0aa3%3A0xf25db3b6b1ae0fdd!2sAl%20Nawafil%20St%20-%20Khalifa%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1729500853190!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Modal Popup Form */}
      <section id="get-help"></section>
    \

      <div className="contact-form">
        <div className="background-design"></div>
        <h2>Contact Us</h2>
        <form action="https://api.web3forms.com/submit" method="POST">
          <div className="form-group">
            <input
              type="hidden"
              name="access_key"
              value="d7a9c841-de73-439d-9695-b548bdd993e8"
            />
            <input
              type="hidden"
              name="cc"
              value="admin@alfarahcenter.com"
            />
            <label htmlFor="first-name">Name</label>
            <input type="text" id="first-name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="send-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Home;
