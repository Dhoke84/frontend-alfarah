import React, { useEffect, useState } from "react";
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/demo.css";
import "../styles/responsive.css";

import icon10 from "../assets/img/10.png";
import icon1 from "../assets/icons/icon1.png";
import ArabicNavbar from "../components/Arabic-Navbar";
import ArabicFooter from "../components/Arabic-Footer";

const CareersAr = () => {
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
    <ArabicNavbar />
      {/* Offerings Section */}
   

       <section className="responsive-section" style={{ backgroundColor: "white" }}>
                    <div className="text-content text-right text-direction">
                      <h2 className="responsive-header ">العمل معنــا</h2>
                      <p className="responsive-paragraph text-right text-direction">
يسرنا اهتمامك بالانضمام الى فريقنا. سيتم اعلان الوظائف
المتاحة هنــا
                      </p>
                    </div>
                    <div className="image-content">
                      <img src={icon10} alt="Sample" className="responsive-image" />
                    </div>
                  </section>

      {/* Timeline and Form Section */}
      <section className="timeline-form-section">
      <div className="timeline">
      <div className="timeline-point text-reverse ">
        <div className="timeline-icon" onClick={() => handleNavigation("/role1")}>1</div>
        <div className="timeline-content text-right-nm text-right-new padd">
          <h3>الدور 1</h3>
          <p>وصف الدور الوظيفي والقيم للنقطة الأولى في المخطط الزمني.</p>
        </div>
      </div>
      <div className="timeline-point text-reverse">
        <div className="timeline-icon" onClick={() => handleNavigation("/role2")}>2</div>
        <div className="timeline-content text-right-nm text-right-new padd">
          <h3>الدور 2</h3>
          <p>وصف الدور الوظيفي والقيم للنقطة الأولى في المخطط الزمني.</p>
        </div>
      </div>
      <div className="timeline-point text-reverse">
        <div className="timeline-icon" onClick={() => handleNavigation("/role3")}>3</div>
        <div className="timeline-content text-right-nm text-right-new padd">
          <h3>الدور 3</h3>
          <p>وصف الدور الوظيفي والقيم للنقطة الأولى في المخطط الزمني.</p>
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
          <div className="form-description text-reverse">
            <img src={icon1} alt="Icon" />
            <p>للتقديم، أضف معلوماتك في القائمة. نتطلع الى استلام طلبك.</p>
          </div>

          <form
            id="application-form"
            action="mailto:hr@alfarahcenter.com"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="form-group text-right text-right-nm text-right-new">
              <label htmlFor="name">الاسم</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group text-right text-right-nm text-right-new">
              <label htmlFor="category">الفئة</label>
              <input type="text" id="category" name="category" required />
            </div>

            <div className="form-group text-right text-right-nm text-right-new">
              <label htmlFor="experience">الخبرة</label>
              <input type="text" id="experience" name="experience" required />
            </div>

            <div className="form-group text-right text-right-nm text-right-new">
              <label htmlFor="resume" className="resume-label">شارك سيرتك الذاتية</label>
              <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required />
            </div>

            <div className="form-group text-right text-right-nm text-right-new">
              <label htmlFor="message">رسالتك</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit" className="gradient-button-2">
            أرسل
            </button>
          </form>

          {/* Map Container */}
      
        </div>
      </section>
      <ArabicFooter />
    </>
  );
};

export default CareersAr;
