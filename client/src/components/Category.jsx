import React from 'react';
import './Category.css';

const categories = [
  {
    name: 'Kitchen Sinks',
    image: '/categories/kitchen_sink.png',
    accent: '#0D9488',
    description: 'Clean, durable sink options for everyday kitchen use.',
  },
  {
    name: 'Floor Tiles',
    image: '/categories/floor_tiles.png',
    accent: '#2563EB',
    description: 'Strong, low-maintenance finishes for busy homes.',
  },
  {
    name: 'Parking Tiles',
    image: '/categories/parking_tiles.png',
    accent: '#B91C1C',
    description: 'Durable, stylish options designed for parking and outdoor surfaces.',
  },
  {
    name: 'Wall Tiles',
    image: '/categories/tiles.png',
    accent: '#7C3AED',
    description: 'Elegant wall surfaces for bathrooms and accent spaces.',
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
                  loading="eager"
                  decoding="async"
                />
                <div className="category-overlay" />
                <div className="category-label">
                  <span>{category.name}</span>
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
