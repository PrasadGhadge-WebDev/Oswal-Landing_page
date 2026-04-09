import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Spotlight.css';

const spotlightPoints = [
  'Premium surface finishes',
  'Modern interior styling ideas',
  'Ideal for kitchen and living spaces',
];

const Spotlight = () => {
  return (
    <section id="spotlight" className="spotlight-section">
      <div className="container">
        <div className="spotlight-card">
          <div className="spotlight-copy">
            <p className="spotlight-kicker">Featured Collection</p>
            <h2 className="spotlight-title">
              A showroom visual that helps customers picture the final space.
            </h2>
            <p className="spotlight-text">
              Experience our curated collection of luxury surfaces, designed to 
              bring sophisticated styling and lasting durability to every corner 
              of your project.
            </p>

            <ul className="spotlight-list">
              {spotlightPoints.map((point) => (
                <li key={point} className="spotlight-list-item">
                  <CheckCircle2 size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="spotlight-actions">
              <a href="#contact" className="btn btn-primary spotlight-button">
                Get In Touch
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="spotlight-visual">
            <img
              src="/hero.png"
              alt="Premium interior showroom inspiration"
              className="spotlight-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
