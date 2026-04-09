import React from 'react';
import { ArrowRight, MapPin, MessageSquare } from 'lucide-react';
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
            Premium Tiles <br />
            <span className="hero-title-accent">&amp; Interior Surfaces</span>
          </h1>

          <p className="hero-description">
            Browse the showroom, compare finishes, and speak with the team<br className="desktop-break" />
            for help choosing products that fit your space perfectly.
          </p>

          <div className="hero-actions">
            <a href="#about" className="btn btn-primary hero-button">
              About Us
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline hero-secondary-button">
              <MessageSquare size={18} />
              Contact Us
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <MapPin size={16} />
              <span>5H6P+8Q Baramati, Maharashtra</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-dot" />
              <span>Showroom and product assistance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
