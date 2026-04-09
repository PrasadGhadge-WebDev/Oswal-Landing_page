import React from 'react';
import { Award, Package, ThumbsUp, Clock } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Award size={32} />,
    title: "Showroom Support",
    description: "Get help browsing products and matching finishes for your space."
  },
  {
    icon: <Package size={32} />,
    title: "Product Range",
    description: "Explore tiles and interior surfaces for floors, walls, and everyday use."
  },
  {
    icon: <ThumbsUp size={32} />,
    title: "Local Consultation",
    description: "Talk through your requirements and get practical guidance for your project."
  },
  {
    icon: <Clock size={32} />,
    title: "Project Guidance",
    description: "Choose options that suit homes, offices, and renovation work."
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
