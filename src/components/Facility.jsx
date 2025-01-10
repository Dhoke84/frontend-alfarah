import React from 'react';
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/responsive.css";
import "../styles/facility.css";
import "../styles/demo.css";
import icon4 from "../assets/icons/icon1.png"; // Import icon for mission
import icon2 from "../assets/icons/icon2.png"; // Import icon for vision
import icon3 from "../assets/icons/icon3.png"; 

import image11 from "../assets/img/11.png";
import icon1 from '../assets/icons/icon4.png';


const Facility = () => {
  return (
   <>
    <>
      {/* Offerings Section */}
   

        <section className="responsive-section" style={{ backgroundColor: "white" }}>
              <div className="text-content">
                <h2 className="responsive-header">Our Facilities</h2>
                <p className="responsive-paragraph">
                We aim to reflect the quality of care children will receive through our facilities, creating a welcoming and joyful rehabilitation environment equipped with necessary resources. We place a high value on health and safety measures, as well as privacy and comfort for parents.
                </p>
              </div>
              <div className="image-content">
                <img src={image11} alt="Sample" className="responsive-image" />
              </div>
            </section>

      {/* Card Section */}
      <section>
        <div className="card-grid">
          {/* Card Item 1 */}
          <div className="card-item">
            <div className="icon">
              <img src={icon1} alt="Icon 1" />
            </div>
            <div className="text">
              <h3>Classes of full-day program</h3>
              <p>Full-day program classes focus on skill development for children with developmental delays.</p>
            </div>
          </div>

          {/* Card Item 2 */}
          <div className="card-item">
            <div className="icon">
              <img src={icon2} alt="Icon 2" />
            </div>
            <div className="text">
              <h3>Individual therapy rooms</h3>
              <p>Individual therapy rooms provide focused care for children's unique needs.</p>
            </div>
          </div>

          {/* Card Item 3 */}
          <div className="card-item">
            <div className="icon">
              <img src={icon3} alt="Icon 3" />
            </div>
            <div className="text">
              <h3>Sensory Room</h3>
              <p>Sensory room supports sensory development through various interactive stimuli and activities.</p>
            </div>
          </div>

          {/* Card Item 4 */}
          <div className="card-item">
            <div className="icon">
              <img src={icon4} alt="Icon 4" />
            </div>
            <div className="text">
              <h3>Gym</h3>
              <p>The gym is equipped to support physical development with exercises and equipment tailored to children's needs.</p>
            </div>
          </div>
        </div>
      </section>
    </></>
  )
}

export default Facility
