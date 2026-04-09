import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Category.css';

const categories = [
  {
    name: 'Kitchen Sinks',
    image: '/Whataap.jpeg',
    accent: '#0F766E',
    description: 'Functional sink setups for modern kitchens.',
  },
  {
    name: 'Tiles',
    image: '/tiles.png',
    accent: '#B91C1C',
    description: 'A wide tile selection with strong visual texture.',
  },
  {
    name: 'Floor Tiles',
    image: '/hero.png',
    accent: '#1D4ED8',
    description: 'Durable finishes that suit high-traffic spaces.',
  },
  {
    name: 'Wall Tiles',
    image: '/WhatsApp Image 2026-04-08 at.jpeg',
    accent: '#7C3AED',
    description: 'Elegant wall surfaces for bathrooms and feature areas.',
  },
];

const floorTileProducts = [
  {
    name: 'OSWAL Pgvt-198 Pgvt Floor Tiles',
    size: '600 x 600 mm',
    price: 'Request for Price',
    image: '/brands/oswal-pgvt-198.jpg',
  },
  {
    name: 'OSWAL Pgvt-217 Pgvt Floor Tiles',
    size: '600 x 600 mm',
    price: 'Request for Price',
    tone: 'wood-beige',
  },
  {
    name: 'OSWAL Pgvt-219 Pgvt Floor Tiles',
    size: '600 x 600 mm',
    price: 'Request for Price',
    tone: 'stone-blue',
  },
  {
    name: 'OSWAL Pgvt-235 Pgvt Floor Tiles',
    size: '600 x 600 mm',
    price: 'Request for Price',
    tone: 'cream-sand',
  },
];

const kitchenSinkProducts = [
  {
    name: 'Nirali Silent Square Ornate Kitchen Sink Satin',
    price: 'Rs. 15.79 K - Rs. 16.62 K',
    details: ['Finish: Satin', 'Series: Silent Square'],
    image: '/Whataap.jpeg',
    mediaClass: 'stainless',
  },
  {
    name: "Nirali D'signo Fantasy Big Kitchen Sink Glossy",
    price: 'Rs. 11.79 K - Rs. 12.15 K',
    details: ['Bowl Size: 180 X 312 X 125 Mm', 'Bowl Size: 460 X 400 X 215 Mm'],
    image: '/WhatsApp Image 2026-04-08 at 11.3.jpeg',
    mediaClass: 'brushed',
  },
  {
    name: 'Nirali Popular Square Plain Big Kitchen Sink Glossy',
    price: 'Rs. 5.67 K - Rs. 6.04 K',
    details: ['Finish: Glossy', 'Series: Popular'],
    mediaClass: 'gloss',
  },
  {
    name: 'Nirali Pearl Globus Delux Premium Big Kitchen Sink',
    price: 'Rs. 6.62 K - Rs. 6.83 K',
    details: ['Size: 510 Mm', 'Bowl Size: 410 Mm'],
    mediaClass: 'dark',
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

        <div className="sink-products-section">
          <div className="floor-tiles-header">
            <p className="category-kicker">Kitchen Sinks</p>
            <h3 className="floor-tiles-title">Popular kitchen sink picks</h3>
          </div>

          <div className="sink-products-grid">
            {kitchenSinkProducts.map((product) => (
              <article key={product.name} className="sink-product-card">
                <div className={`sink-product-media ${product.mediaClass || 'stainless'}`}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="sink-product-image"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="sink-product-placeholder">
                      <span className="sink-product-bowl" />
                      <span className="sink-product-drain" />
                    </div>
                  )}
                </div>
                <div className="sink-product-copy">
                  <h4>{product.name}</h4>
                  <strong>{product.price}</strong>
                  <ul className="sink-product-meta">
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="floor-tiles-section">
          <div className="floor-tiles-header">
            <p className="category-kicker">Floor Tiles</p>
            <h3 className="floor-tiles-title">Popular floor tile picks</h3>
          </div>

          <div className="floor-tiles-grid">
            {floorTileProducts.map((product) => (
              <article key={product.name} className="floor-tile-card">
                <div className={`floor-tile-media ${product.tone || 'image-card'}`}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="floor-tile-image"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="floor-tile-swatch-border" />
                  )}
                </div>
                <div className="floor-tile-copy">
                  <h4>{product.name}</h4>
                  <p>{product.size}</p>
                  <span>{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
