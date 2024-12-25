import React from 'react'
import "../styles/style.css";
import "../styles/services.css";
import "../styles/about.css";
import "../styles/responsive.css";

import newsimg from "../assets/images/about-container.png"

import newsimg2 from "../assets/images/unnamed.jpg"

const News = () => {
  return (
    <div>
    {/* Offerings Section */}
    <section className="offerings-section offerings-section-news">
      <div className="offerings-content offerings-content-news">
        <div className="offerings-header offerings-header-news">
          <h1>All Events</h1>
          <p>
            Stay updated with the latest news and upcoming events.
            <br />
            At Alfarah, we never stop learning and empowering children, the team, educators, families, and caregivers.
          </p>
        </div>
      </div>
      <div className="offerings-image">
        <img src={newsimg} alt="Offerings" />
      </div>
    </section>

    {/* Event Card */}
    <div className="event-card">
      {/* Left: Image */}
      <div className="event-image">
        <img src={newsimg2} alt="Event" />
      </div>

      {/* Middle: Event Details */}
      <div className="event-details">
        <h3>Festival by AD Early Childhood Authority</h3>
        <p className="event-date">Date: 31 Oct to 3 Nov 2024</p>
        <p className="event-location">Location: Umm al Emarat Park</p>
        <p className="event-description">
          Join Us at the Festival by Abu Dhabi Early Childhood Authority. From October 31 to November 3, 2024, visit
          our booth at Umm Al Emarat Park. We will have engaging activities for children and our specialists will be
          on hand to answer all your questions about early childhood development. Don’t miss out on the fun and
          valuable insights. See you there.
        </p>
      </div>

      {/* Right: Book Now Button (commented out) */}
      {/* <div className="event-action">
        <button className="book-now">Book Now</button>
      </div> */}
    </div>
  </div>
  )
}

export default News
