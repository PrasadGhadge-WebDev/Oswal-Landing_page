import React from 'react';
import './Brand.css';

const featuredBrands = [
  {
    name: 'Kajaria',
    logo: '/brands/kajaria.png',
    accent: '#1672B8',
    tint: 'rgba(22, 114, 184, 0.10)',
  },
  {
    name: 'Somany',
    logo: '/brands/somany.png',
    accent: '#8C1020',
    tint: 'rgba(140, 16, 32, 0.10)',
  },
  {
    name: 'Nitco',
    logo: '/brands/nitco.png',
    accent: '#111111',
    tint: 'rgba(17, 17, 17, 0.08)',
  },
  {
    name: 'Asian Granito',
    logo: '/brands/asian-granito.png',
    accent: '#D11A1C',
    tint: 'rgba(209, 26, 28, 0.10)',
  },
];

const Brand = () => {
  return (
    <section id="brands" className="brand-section">
      <div className="container">
        <div className="brand-header">
          <p className="brand-kicker">Brands</p>
          <h2 className="brand-title">Trusted names under one roof</h2>
        </div>

        <div className="brand-logo-grid">
          {featuredBrands.map((brand) => (
            <article key={brand.name} className="brand-logo-card">
              <div
                className="brand-logo-panel"
                style={{
                  '--brand-accent': brand.accent,
                  '--brand-tint': brand.tint,
                }}
              >
                <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo-mark" />
              </div>
              <h3 className="brand-name">{brand.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
