import React from 'react';
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/responsive.css";

import image3 from "../assets/img/3.png";
import image4 from "../assets/img/4.png";
import image5 from "../assets/img/5.png";
import image6 from "../assets/img/6.png";
import image8 from "../assets/img/8.png";



const Services = () => {
  return (
    <>
      <section className="offerings-section">
        <div className="offerings-content">
          <div className="offerings-header">
            <h1>Our Services</h1>
            <p>
              Explore the various facilities we offer to enhance your experience and provide top-notch services
            </p>
          </div>
        </div>
        <div className="offerings-image">
          <img src={image3} alt="Offerings Image" />
        </div>
        <div id="assesment"></div>
      </section>

      <section className="services-section">
        <div className="service-reverse service-reverse-asses">
          <div className="service-image-reverse service-image-reverse-2">
            <img src={image5} alt="Full-Day Program Image" />
          </div>
          <div className="service-content-reverse">
            <h3>1. Assessments</h3>
            <div id="program"></div>
            <p>
              Alfarah relies on the usage of standardized assessment tools that are well known worldwide in the field of child development and learning career. The assessments are considered a core demand to decide therapy needs prior to intervention and they are also used for re-testing to monitor therapy gains and progress. Following the assessment, a formal report is issued and a feedback meeting with parents takes place to reach a mutual understanding of the support plan that suits the child the best, based on the outcomes and recommendation of the assessment. The available battery of assessments covers the fields of emotional-behavioural wellbeing, cognitive abilities, psychoeducational profile, motor skills, sensory integration, and language abilities.
            </p>
          </div>
        </div>

        <div className="service service-two" style={{ marginTop: '1rem' }}>
          <div className="service-content">
            <h3>2. Full-Day Program</h3>
            <p>
              A classroom like experience focused on skills development. This program targets children with mild to moderate Autism Spectrum Disorder and Intellectual Disability of age 4 -18 years. Children attend regularly for five days a week, five hours a day (Monday to Friday, 8:00 am to 1:00 pm).
            </p>
            <div className="sub-service">
              <h4>For the younger group</h4>
              <p>The program focuses on school readiness, including skills such as adaptive behaviour, cognitive operations, play, communication, pre-academic knowledge, and social-emotional regulation.</p>
            </div>
            <div className="sub-service">
              <h4>For the older group</h4>
              <p>The program emphasizes life skills, independence in daily living, and basic academic skills in literacy and math. It aims to help children and adolescents with special learning needs develop the necessary competencies for everyday tasks. Further benefits include:</p>
            </div>
            <div id="theory"></div>
            <ul className="service-points">
              <li><span className="point-icon"></span> Using evidence-based learning curriculums implemented by trained special educators.</li>
              <li><span className="point-icon"></span> Joining small groups of 5-8 students max to ensure sufficient attention for each child.</li>
              <li><span className="point-icon"></span> Pairing with classmates providing a space to practice and improve social skills.</li>
              <li><span className="point-icon"></span> Transportation.</li>
            </ul>
          </div>

          <div className="service-image service-image-sec">
            <img src={image4} alt="Full-Day Program Image" />
          </div>
        </div>

        <div className="service-reverse">
          <div className="service-image-reverse service-image-reverse-indi">
            <img src={image6} alt="Full-Day Program Image" />
          </div>
          <div className="service-content-reverse service-content-reverse-two service-content-reverse-two-new">
            <h3>3. Individual sessions</h3>
            <p>
              The primary goal of individual therapy is to promote the child&#39;s overall well-being and support a healthy acquisition of skills. At Alfarah, evidence-based approaches are used through the sessions which are held in one-to-one interaction for 45 minutes with a weekly frequency that depends on the child’s need. The therapist and the parents agree on the intervention goals set for a time frame of 6 months. The goals are stated on a document known as Individualized Therapy Plan (ITP). Available forms of therapy:
            </p>
            <ul className="service-points-reverse">
              <li><span className="point-icon-reverse"></span> Behavioural Therapy</li>
              <li><span className="point-icon-reverse"></span> Speech and Language Therapy</li>
              <li><span className="point-icon-reverse"></span> Occupational Therapy</li>
              <li><span className="point-icon-reverse"></span> Psychological Interventions</li>
            </ul>
          </div>
        </div>

        <div className="service service-two">
          <div className="service-content service-content-two" style={{ marginTop: '8rem' }}>
            <h4 className="new-font">Behavioural Therapy</h4>
            <p className="new-font-p">Children do well when they are able to, rather than just when they want to. Our team focuses on understanding and changing behaviour patterns through positive reinforcement and skill-building in areas such:</p>
            <div className="sub-service">
              <h4>Learning Prerequisites</h4>
              <p>Eliciting joint attention, play and imitation skills, and following instructions.</p>
            </div>
            <div className="sub-service">
              <h4>Emotional regulation</h4>
              <p>Improving the ability to manage and respond to one's emotional experiences in a healthy and adaptive way enhancing the overall well-being, social interactions, and academic performance.</p>
            </div>
            <div className="sub-service">
              <h4>Building Self-Confidence</h4>
              <p>Encouraging participation in activities where the child can experience success.</p>
            </div>
          </div>
          <div className="service-image service-image-sec service-image-sec-2">
            <img src={image6} alt="Full-Day Program Image" />
          </div>
        </div>

        <div className="service-reverse">
          <div className="service-image-reverse service-image-reverse-indi">
            <img src={image6} alt="Full-Day Program Image" />
          </div>
          <div className="service-content-reverse service-content-reverse-two">
            <h4 className="new-font">Speech and Language Therapy</h4>
            <p className="new-font-p">
              Having the ability to communicate is a right for each human. This intervention reinforces the child’s ability to communicate functionally. Our team is dedicated to support children depending on the need and this may include :
            </p>
            <ul className="service-points-reverse">
              <li><span className="point-icon-reverse"></span> Enhancing Language Development, through building their vocabulary, understanding grammar, and using language effectively to express self and understand others.</li>
              <li><span className="point-icon-reverse"></span> Addressing Speech Disorders, such as phonological, articulation, fluency, or social communication disorders.</li>
              <li><span className="point-icon-reverse"></span> Supporting or replacing verbal spoken language with AAC (Augmentative and Alternative Communication) for children who have difficulty communicating verbally.</li>
            </ul>
          </div>
        </div>

        <div className="service service-two">
          <div className="service-content service-content-two" style={{ marginTop: '8rem' }}>
            <h4 className="new-font">Occupational Therapy</h4>
            <p className="new-font-p">Children thrive when they have the skills and tools they need to succeed. Occupational therapy focuses on enabling children to perform daily activities independently and effectively. Our team uses evidence-based practices to enhance functional skills through targeted interventions in areas such as:</p>
            <div className="sub-service">
              <h4>Motor Skills</h4>
              <p>Developing both fine and gross motor skills. This includes improving hand-eye coordination and dexterity for tasks like coloring, writing, and using utensils, as well as enhancing large muscle movements for activities like balancing, walking, and climbing.</p>
            </div>
            <div className="sub-service">
              <h4>Sensory and Cognitive Processing</h4>
              <p>Helping children manage and respond to sensory input, such as sounds, textures, and lights, to improve focus and reduce overstimulation. Building attention, memory, and problem-solving abilities for better academic performance and everyday functioning.</p>
            </div>
            <div className="sub-service">
              <h4>Daily Living and Social Skills</h4>
              <p>Teaching independence in daily activities like dressing, feeding, and grooming. Enhancing interaction abilities, including sharing, taking turns, and understanding social cues.</p>
            </div>
          </div>
          <div className="service-image service-image-sec service-image-sec-2">
            <img src={image8} alt="Full-Day Program Image" />
          </div>
        </div>

        <div className="service-reverse">
          <div className="service-image-reverse service-image-reverse-indi">
            <img src={image6}  alt="Full-Day Program Image" />
          </div>
          <div className="service-content-reverse service-content-reverse-two">
            <h4 className="new-font">Psychological Interventions</h4>
            <p className="new-font-p">
              For children who are neurotypically developed and for children of determination, psychological interventions aim on helping the child to learn how to balance THOUGHTS, FEELINGS, and ACTIONS. Areas related to cognitive abilities and functions are also addressed. Services include:
            </p>
            <div className="sub-service">
              <h4>Evidence based therapy techniques are followed to address areas:</h4>
              <p>Emotional maturity – Self Control - Managing Anxiety disorders- Social play skills- Anger control- Behavioural management- School adjustment, Self-confidence – Study habits- Improving thinking and learning abilities. More services include:</p>
            </div>
            <ul className="service-points-reverse">
              <li><span className="point-icon-reverse"></span> Formal assessments in(cognitive-emotional-educational) areas.</li>
              <li><span className="point-icon-reverse"></span> Individual and group therapy sessions.</li>
              <li><span className="point-icon-reverse"></span> Parental guidance.</li>
              <li><span className="point-icon-reverse"></span> Siblings support (Siblings of children with determination).</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
