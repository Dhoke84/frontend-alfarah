import React, { useState } from "react";
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/demo.css";
import "../styles/responsive.css";
import image9 from "../assets/img/9.png"

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: "Is transportation available?",
        answer: `Yes, transportation is available for children attending the full-day program from 8:00 am to 1:00 pm. This service is provided through a third-party company. Scheduling and arrangements are handled directly with the company. The center's administration will provide you with the contact details for the transportation provider.`,
      },
      {
        question: "Are assessments and individual therapy sessions covered by insurance?",
        answer: `We provide reimbursement forms. Our center is not directly linked with insurance. However, our administrative staff can assist with providing necessary information and documentation for insurance claims. Coverage varies depending on your plan, so we recommend checking with your insurance provider for details on your specific benefits.`,
      },
      {
        question: "Can you help me determine which service suits my child the best?",
        answer: `Confusion on a starting point for your child’s support plan is normal. In such a case, you may book a FREE CONSULTATION with one of our program consultants, and they will assist you. If available, bringing previous reports to the meeting will be helpful.`,
      },
      {
        question: "Are afternoon programs available?",
        answer: `Yes, our center operates from 8:00 am to 6:00 pm, Sunday through Friday. We can tailor an afternoon program to meet your child’s specific needs.`,
      },
      {
        question:
          "In individual therapy sessions, how many sessions will it take for my child to show noticeable progress?",
        answer: `Progress is influenced by factors such as the nature of the issues being addressed, the child's engagement in therapy, cooperation from parents/caregivers, and the frequency of sessions. Notable progress may appear in 3 months, with goals set for no more than 6 months. Further sessions may be advised based on results.`,
      },
      {
        question: "Is the program equivalent to academic grade systems?",
        answer: `No, our program is focused on skills development curriculums and is not considered equivalent to academic grade systems.`,
      },
      {
        question: "Do you only see children of determination and special needs?",
        answer: `No, children who are neurotypically developed but experience mild to moderate issues in their behaviour, language development, learning, and overall wellbeing can also benefit from our services.`,
      },
      {
        question:
          "Can I use my company's education allowance to cover the fees for the full-day program?",
        answer: `Yes, you may be able to use your company's education allowance to cover the fees for the full-day program, but this depends on your discussions with your company. We can assist by providing quotations for the program.`,
      },
      {
        question: "Do you have Holiday/break camps?",
        answer: `Yes, our center is open throughout the year. Preapproved camps for winter, spring, and summer breaks will be announced in the news & events section. These camps typically focus on skills development in a fun and interactive way.`,
      },
    ];
  
    return (
      <div>
      
         <section className="responsive-section">
                      <div className="text-content">
                        <h2 className="responsive-header">FAQs</h2>
                        <p className="responsive-paragraph">
                        Here are some frequently asked questions we often receive. We’ve compiled answers to common queries to
                help you find the information you need quickly. If you have any other questions, feel free to reach out
                to us!
                        </p>
                      </div>
                      <div className="image-content">
                        <img src={image9} alt="Sample" className="responsive-image" style={{"width":"50%"}}/>
                      </div>
                    </section>
  
        {/* FAQ Section */}
        <section className="faq-section">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span className="toggle-icon">{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  
  export default Faq;