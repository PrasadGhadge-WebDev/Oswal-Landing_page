import React from 'react';
import { BadgeCheck, MapPin, Sparkles, Store } from 'lucide-react';
import './About.css';

const aboutHighlights = [
  'Premium tile and surface selections',
  'Guidance for kitchens, baths, and living spaces',
  'Friendly support from a local Baramati showroom',
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-image-frame">
              <img
                src="/Oswal Tiles storefront in daylight.png"
                alt="Oswal Tiles showroom storefront"
                className="about-image"
              />
            </div>
            <div className="about-badge about-badge-top">
              <Store size={16} />
              <span>Designer Studio</span>
            </div>
            <div className="about-badge about-badge-bottom">
              <MapPin size={16} />
              <span>Baramati, Maharashtra</span>
            </div>
          </div>

          <div className="about-copy">
            <p className="about-kicker">About Oswal Tiles</p>
            <h2 className="about-title">
              We help customers choose surfaces that look refined and perform well.
            </h2>
            <p className="about-text">
              Oswal Tiles is a showroom-led experience built around practical
              product advice, curated finishes, and dependable service for homes
              and interior projects.
            </p>

            <div className="about-note">
              <Sparkles size={18} />
              <span>From first look to final selection, we keep the process simple.</span>
            </div>

            <div className="about-highlights">
              {aboutHighlights.map((item) => (
                <div key={item} className="about-highlight">
                  <BadgeCheck size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
