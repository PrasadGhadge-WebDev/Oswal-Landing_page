import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import './Hero.css';

const storefrontImage = encodeURI('/Oswal Tiles storefront in daylight.png');

const Hero = () => {
  return (
    <section id="hero" className="hero-section">

      <div className="hero-visual hero-visual-backdrop" aria-hidden="true">
        <img
          src={storefrontImage}
          alt=""
          className="hero-image hero-image-backdrop"
        />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-container">
        <div className="hero-copy">
          <h1 className="hero-title">
            Premium Tiles<br />
            <span className="hero-title-accent">&amp; Surfaces</span>
          </h1>

          <p className="hero-description">
            Browse the showroom, compare finishes, and get help choosing the right products.
          </p>

          <div className="hero-actions">
            <a href="#about" className="btn btn-primary hero-button">
              About Us
            </a>
            <a href="#contact" className="btn btn-outline hero-secondary-button">
              <MessageSquare size={18} />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
