import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <h2 className="about-header section-header">About Us</h2>
        <p>
          As one of the oldest universities of the country, Jadavpur University,
          and its students have a certain duty - the duty to give back to
          society across all disciplines and inculcate the habit of thinking in
          every individual who comes along. The IEEE Jadavpur University Student
          Branch is one little endeavor in that process. Founded in 2010, we
          belong to the Kolkata section of Region 10 of the organization. One of
          the most active student branches in our section, we are dedicated to
          furthering technical and entrepreneurial innovations through hands-on
          interactive sessions. With large scale events and intimate, basic
          workshops, we try to keep something happening all year round - so that
          the fire of knowledge, learning and innovation never burns out. In
          this process of sharing our love for technology, we have slowly grown,
          met new people, evolved as a group and built around us, a community of
          like-minded individuals who are driven by a passion for learning and
          giving back to society.
        </p>
        <a href="https://www.ieee.org" className="about-button button" target="_blank">
          More about IEEE
        </a>
      </div>
    </div>
  );
}

export default About;
