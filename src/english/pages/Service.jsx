import React from "react";
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/demo.css";
import "../styles/responsive.css";

import therapy1 from "../assets/img/1.png";
import therapy2 from "../assets/img/2.png";
import therapy3 from "../assets/img/3.png";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
const servicesData = [
  {
    id: 1,
    title: "Assessments",
    description:
      "Alfarah relies on the usage of standardized assessment tools that are well known worldwide in the field of child development and learning career. The assessments are considered a core demand to decide therapy needs prior to intervention and they are also used for re-testing to monitor therapy gains and progress. Following the assessment, a formal report is issued and a feedback meeting with parents takes place to reach a mutual understanding of the support plan that suits the child the best, based on the outcomes and recommendation of the assessment. The available battery of assessments covers the fields of emotional-behavioural wellbeing, cognitive abilities, psychoeducational profile, motor skills, sensory integration, and language abilities.",
    image: therapy1,
  },
  {
    id: 2,
    title: "Full-Day Program",
    description:
      "A classroom like experience focused on skills development. This program targets children with mild to moderate Autism Spectrum Disorder and Intellectual Disability of age 4 -18 years. Children attend regularly for five days a week, five hours a day (Monday to Friday, 8:00 am to 1:00 pm).",
    image: therapy2,
    subSection1: {
      heading: "For the younger group",
      text: "The program focuses on school readiness, including skills such as adaptive behaviour, cognitive operations, play, communication, pre-academic knowledge, and social-emotional regulation.",
    },
    subSection2: {
      heading: "For the older group",
      text: "The program emphasizes life skills, independence in daily living, and basic academic skills in literacy and math. It aims to help children and adolescents with special learning needs develop the necessary competencies for everyday tasks.",
      bulletPoints: [
        "Using evidence-based learning curriculums implemented by trained special educators.",
        "Joining small groups of 5-8 students max to ensure sufficient attention for each child.",
        "Pairing with classmates providing a space to practice and improve social skills.",
        "Transportation.",
      ],
    },
  },
  {
    id: 3,
    title: "Individual Sessions",
    description:
      "The primary goal of individual therapy is to promote the child's overall well-being and support a healthy acquisition of skills. At Alfarah, evidence-based approaches are used through the sessions which are held in one-to-one interaction for 45 minutes with a weekly frequency that depends on the child’s need.",
    image: therapy3,
    subSection1: {
      bulletPoints: [
        "Behavioural Therapy",
        "Speech and Language Therapy",
        "Occupational Therapy",
        "Psychological Interventions",
      ],
    },
  },

  {
    id: 4,
    title: "Behavioural Therapy",
    description:
      "Children do well when they are able to, rather than just when they want to. Our team focuses on understanding and changing behaviour patterns through positive reinforcement and skill-building in areas such as:",
    image: therapy3,
    subSection1: {
      heading: "Learning Prerequisites",
      text: "Eliciting joint attention, play and imitation skills, and following instructions.",
    },
    subSection2: {
      heading: "Emotional regulation",
      text: "Improving the ability to manage and respond to one's emotional experiences in a healthy and adaptive way enhancing the overall well-being, social interactions, and academic performance.",
    },
    subSection3: {
      heading: "Building Self-Confidence",
      text: "Encouraging participation in activities where the child can experience success.",
    },
  },

  {
    id: 5,
    title: "Speech and Language Therapy",
    description:
      "Having the ability to communicate is a right for each human. This intervention reinforces child’s ability to communicate functionally. Our team is dedicated to support children depending on the need and this may include :",
    image: therapy3,
    subSection1: {
      text: "Enhancing Language Development, through building their vocabulary, understanding grammar, and using language effectively to express self and understand others.",
    },
    subSection2: {
      text: "Addressing Speech Disorders, such as phonological, articulation, fluency, or social communication disorders.",
    },
    subSection3: {
      text: "Supporting or replacing verbal spoken language with AAC (Augmentative and Alternative Communication) for children who have difficulty communicating verbally.",
    },
  },
  {
    id: 6,
    title: "Occupational Therapy",
    description:
      "Children thrive when they have the skills and tools they need to succeed. Occupational therapy focuses on enabling children to perform daily activities independently and effectively. Our team uses evidence-based practices to enhance functional skills through targeted interventions in areas such as:",
    image: therapy3,
    subSection1: {
      heading: "Motor Skills",
      text: "Developing both fine and gross motor skills. This includes improving hand-eye coordination and dexterity for tasks like coloring, writing, and using utensils, as well as enhancing large muscle movements for activities like balancing, walking, and climbing.",
    },
    subSection2: {
      heading: "Sensory and Cognitive Processing",
      text: "Helping children manage and respond to sensory input, such as sounds, textures, and lights, to improve focus and reduce overstimulation. Building attention, memory, and problem-solving abilities for better academic performance and everyday functioning.",
    },
    subSection3: {
      heading: "Daily Living and Social Skills",
      text: "Teaching independence in daily activities like dressing, feeding, and grooming. Enhancing interaction abilities, including sharing, taking turns, and understanding social cues.",
    },
  },
  {
    id: 7,
    title: "Psychological Interventions",
    description:
      "For children who are neurotypically developed and for children of determination, psychological interventions aim on helping the child to learn how to balance THOUGHTS, FEELINGS, and ACTIONS. Areas related to cognitive abilities and functions are also addressed. Services include:",
    image: therapy1,
    subSection1: {
      heading: "Evidence based therapy techniques are followed to address areas:",
      text: "Emotional maturity – Self Control - Managing Anxiety disorders- Social play skills- Anger control- Behavioural management- School adjustment, Self-confidence – Study habits- Improving thinking and learning abilities. More services include:",
      bulletPoints: [
        "Formal assessments in(cognitive-emotional-educational) areas.",
        "Individual and group therapy sessions.",
        "Parental guidance.",
        "Siblings support (Siblings of children with determination).",
      ],
    },
  },
];

const Services = () => {
  return (
    <>
    <Navbar />
      {/* Offerings Section */}
      <section className="responsive-section">
        <div className="text-content">
          <h2 className="responsive-header">Our Services</h2>
          <p className="responsive-paragraph">
            We provide a wide range of services aimed at improving the quality
            of life and enhancing personal well-being. Discover how we can help
            you achieve your goals.
          </p>
        </div>
        <div className="image-content">
          <img src={therapy3} alt="Sample" className="responsive-image" />
        </div>
      </section>

      {/* Services Page */}
      <div className="services-page">
        <div className="services-list">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`service-item ${
                index % 2 === 0 ? "left-aligned" : "right-aligned"
              }`}
            >
              {/* Therapy Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>

              {/* Therapy Text */}
              <div className="service-text">
                <h2>{service.title}</h2>
                <p>{service.description}</p>

                {/* Subsections (conditionally rendered) */}
                <div className="service-subsections">
                  {service.subSection1 && (
                    <div className="subsection">
                      {service.subSection1.heading && (
                        <h4>{service.subSection1.heading}</h4>
                      )}
                      {service.subSection1.text && (
                        <p>{service.subSection1.text}</p>
                      )}
                      {service.subSection1.bulletPoints && (
                        <ul className="bullet-points">
                          {service.subSection1.bulletPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {service.subSection2 && (
                    <div className="subsection">
                      {service.subSection2.heading && (
                        <h4>{service.subSection2.heading}</h4>
                      )}
                      {service.subSection2.text && (
                        <p>{service.subSection2.text}</p>
                      )}
                      {service.subSection2.bulletPoints && (
                        <ul className="bullet-points">
                          {service.subSection2.bulletPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
