import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Category.css';

const categories = [
  {
    name: 'Tiles',
    image: '/tiles.png',
    accent: '#B91C1C',
    description: 'A wide tile selection with strong visual texture.',
  },
  {
    name: 'Wall Tiles',
    image: '/WhatsApp Image 2026-04-08 at.jpeg',
    accent: '#7C3AED',
    description: 'Elegant wall surfaces for bathrooms and feature areas.',
  },
];



const Category = () => {
  return (
    <section id="categories" className="category-section">
      <div className="container">
        <div className="category-header">
          <p className="category-kicker">Categories</p>
          <h2 className="category-title">Explore by product type</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.name} className="category-card">
              <div
                className="category-media"
                style={{ '--category-accent': category.accent }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-overlay" />
                <div className="category-label">
                  <span>{category.name}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
              <p className="category-description">{category.description}</p>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Category;
