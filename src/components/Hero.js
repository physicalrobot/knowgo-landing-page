import React from "react";
import logo from "../assets/knowgologo.png";
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="title">
        Welcome to <span className="know">Know</span>
        <span className="go">Go</span>!
      </h1>
      <div className="logo">
        <img src={logo} alt="the site logo" className="image" />
      </div>
      <p className="subtitle">
        “I learned very early the difference between knowing the name of
        something and knowing something.” - Richard Feynman
      </p>
      <button className="ctaButton">Coming Soon</button>
    </section>
  );
};

export default Hero;
