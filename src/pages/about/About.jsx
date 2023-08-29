import React from 'react'
import './About.css'
import aboutImg from '../../images/about-img.jpg'

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
            <h2 className="about-title fs-26 ls-1">
               About Bookhub
            </h2>
            <p className="fs-17">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima consequuntur laudantium officia dolorem corporis perferendis obcaecati, ipsum nisi. Accusamus harum corporis vitae possimus ullam voluptatibus distinctio nisi adipisci, fugiat quaerat tenetur pariatur maxime assumenda blanditiis quidem cum illum, doloribus et id officiis nulla voluptas! Laboriosam facilis eos officiis eius.</p>
            <p className="fs-17">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis corporis dolor consequuntur. Illum numquam commodi ut. Cum fuga molestias, assumenda sunt aspernatur nemo repudiandae voluptatum eum, delectus, accusantium similique minima!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About