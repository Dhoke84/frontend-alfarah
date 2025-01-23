import React from 'react';
import "../styles/style.css";
import "../styles/about.css";
import "../styles/responsive.css";
import image2 from "../assets/img/2.png";  // Import the image for the about us section
import icon1 from "../assets/icons/icon1.png"; // Import icon for mission
import icon2 from "../assets/icons/icon2.png"; // Import icon for vision
import icon3 from "../assets/icons/icon3.png"; 
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
   <>
   <Navbar />
   <section class="about-us">
        <div class="about-content">
            <div class="about-header">
                <h1>Learn More About Who We Are !</h1>
               
              </div>
            <p>A dedicated team of professionals passionate about contributing to the well-being of children, especially those of determination. Our mission is to support and empower children, helping them reach their fullest potential through specialized care and individualized attention
               </p>
        </div>
        <div class="about-image-2">
            <img src={image2} alt="About Us Image" />
        </div>

        
    </section>
    <section>
        <div class="info-card-container">
            <div class="info-card">
              <div class="icon">
                <img src={icon1} alt="Icon 1" />
              </div>
              <div class="text">
                <h3>Our Mission</h3>
                <p>Tailor rehabilitation to each child, ensuring progress toward their full potential.</p>
              </div>
            </div>
          
            <div class="info-card">
              <div class="icon">
                <img src={icon2} alt="Icon 2" />
              </div>
              <div class="text">
                <h3>Our Vision</h3>
                <p>Lead in empowering children of determination and building community understanding.</p>
              </div>
            </div>
          
            <div class="info-card">
              <div class="icon">
                <img src={icon3} alt="Icon 3" />
              </div>
              <div class="text">
                <h3>Our Values</h3>
                <p>Respect- Dedication - Honesty- Acceptance- Collaboration- Consistency. 
                </p>
              </div>
            </div>
          </div>
          
    </section>
    <Footer />
   </>
  )
}

export default About
