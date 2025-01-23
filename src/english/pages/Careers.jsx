import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/demo.css";
import "../styles/responsive.css";

import icon10 from "../assets/img/10.png";
import icon1 from "../assets/icons/icon1.png";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch job data
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://alfarah-full-stack.vercel.app/jobs"); // Replace with your API endpoint if necessary
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      {/* Offerings Section */}
   <Navbar />

       <section className="responsive-section" style={{ backgroundColor: "white" }}>
                    <div className="text-content">
                      <h2 className="responsive-header">Our Careers</h2>
                      <p className="responsive-paragraph">
                      We are glad that you are interested in joining our team! Available posts will be announced here,
                      </p>
                    </div>
                    <div className="image-content">
                      <img src={icon10} alt="Sample" className="responsive-image" />
                    </div>
                  </section>

      {/* Timeline and Form Section */}
      <section className="timeline-form-section">
      <div className="timeline">
      <div className="timeline-point">
        <div className="timeline-icon" onClick={() => handleNavigation("/role1")}>1</div>
        <div className="timeline-content">
          <h3>Role 1</h3>
          <p>Description of job role and values for the first point on the timeline.</p>
        </div>
      </div>
      <div className="timeline-point">
        <div className="timeline-icon" onClick={() => handleNavigation("/role2")}>2</div>
        <div className="timeline-content">
          <h3>Role 2</h3>
          <p>Description of job role and values for the second point on the timeline.</p>
        </div>
      </div>
      <div className="timeline-point">
        <div className="timeline-icon" onClick={() => handleNavigation("/role3")}>3</div>
        <div className="timeline-content">
          <h3>Role 3</h3>
          <p>Description of job role and values for the third point on the timeline.</p>
        </div>
      </div>
      <div className="map-container">
        {/* Replace the src URL with your Google Maps iframe embed URL */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.307835839213!2d54.566214574812186!3d24.40537086331785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e465fb41e0aa3%3A0xf25db3b6b1ae0fdd!2sAl%20Nawafil%20St%20-%20Khalifa%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1729500853190!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
        {/* Form Section */}
        <div className="form-container">
          <div className="form-description">
            <img src={icon1} alt="Icon" />
            <p>Please fill out the form below to apply. We look forward to your application!</p>
          </div>

          <form
            id="application-form"
            action="mailto:hr@alfarahcenter.com"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" required />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience:</label>
              <input type="text" id="experience" name="experience" required />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Upload your resume:</label>
              <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="7" required></textarea>
            </div>

            <button type="submit" className="gradient-button-2">
              Submit
            </button>
          </form>

          {/* Map Container */}
          {/* <div className="map-container size-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.307835839213!2d54.566214574812186!3d24.40537086331785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e465fb41e0aa3%3A0xf25db3b6b1ae0fdd!2sAl%20Nawafil%20St%20-%20Khalifa%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1729500853190!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Careers;
