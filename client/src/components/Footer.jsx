import React from 'react';
import {
  Award,
  Camera,
  ChevronRight,
  ChevronUp,
  Globe,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  UserRound,
} from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { href: '#hero', label: 'Home', icon: Home },
  { href: '#brands', label: 'Brand Page', icon: Award },
  { href: '#about', label: 'About Us', icon: UserRound },
  { href: '#spotlight', label: 'Featured Collection', icon: Sparkles },
  { href: '#contact', label: 'Contact Support', icon: MessageSquare },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="flex items-center gap-2">
              <img
                src="/Logo_Oswal.jpeg"
                alt="Oswal Tiles"
                className="footer-logo"
              />
            </div>
            <p className="footer-brand-text">
              Oswal Tiles serves customers from its Baramati showroom with tile
              and interior product options for homes and projects.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" aria-label="Instagram">
                <Camera size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Website">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="footer-brand">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <link.icon size={14} className="footer-link-icon" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-brand">
            <h4 className="footer-heading">Our Products</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link"><ChevronRight size={14} className="footer-link-icon" />Vitrified Tiles</a></li>
              <li><a href="#" className="footer-link"><ChevronRight size={14} className="footer-link-icon" />PGVT Designer Series</a></li>
              <li><a href="#" className="footer-link"><ChevronRight size={14} className="footer-link-icon" />Wooden Plank Tiles</a></li>
              <li><a href="#" className="footer-link"><ChevronRight size={14} className="footer-link-icon" />Glazed Vitrified</a></li>
            </ul>
          </div>

          <div className="footer-brand">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>5H6P+8Q Baramati, Maharashtra - 413102</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={18} className="contact-icon" />
                <span>07383598553</span>
              </li>
              <li className="footer-contact-item">
                <Mail size={18} className="contact-icon" />
                <span>info@oswaltiles.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Oswal Tiles Baramati. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
