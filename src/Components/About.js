import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="About Background" />
      </div> 
      <div className="about-content-container">
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text"> 
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et 
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <p className="primary-text">
            Non tincidunt magna non et 
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button">
              <BsFillPlayCircleFill /> Watch Video
            </button>     
          </div>
        </div>
        <div className="about-image-container">
          <img src={AboutBackgroundImage} alt="About" />
        </div>
      </div>
    </div>
  );
}

export default About;
