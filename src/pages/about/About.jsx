import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="about image" />
          </div>

          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About Bookhub</h2>
            <p className="fs-17">
            Welcome to our innovative and comprehensive Book Search App, your ultimate destination for exploring the literary world like never before. In a society increasingly driven by digital advancements, our app stands as a testament to the seamless fusion of technology and the written word. Whether you're an avid reader, a student, a researcher, or simply someone with a curiosity for knowledge, our app is designed to be your trusted companion on your literary journey.
            </p>
            <p className="fs-17">
            Our app boasts a vast collection of titles, from timeless classics to contemporary bestsellers. Whether you're searching for a rare edition or the latest release, we have you covered.
            <br />  Say goodbye to the frustration of aimless searching. Our app learns from your reading history and preferences, offering recommendations that align with your tastes. Discover new authors, genres, and hidden gems that you might have missed otherwise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
