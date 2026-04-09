import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <footer className="footer-section">
         <div className="container">
            <div className="footer-grid">

               {/* Brand Info */}
               <div className="footer-brand">
                  <div className="flex items-center gap-2">
                     <img
                        src="/Logo_Oswal.jpeg"
                        alt="Oswal Tiles"
                        className="footer-logo"
                     />
                  </div>
                  <p className="footer-brand-text">
                     Oswal Tiles serves customers from its Baramati showroom
                     with tile and interior product options for homes and projects.
                  </p>
                  <div className="footer-socials">
                     <a href="#" className="social-link"><span className="text-xl">📸</span></a>
                     <a href="#" className="social-link"><span className="text-xl">🌐</span></a>
                  </div>
               </div>

               {/* Quick Links */}
               <div className="footer-brand">
                  <h4 className="footer-heading">Quick Links</h4>
                  <ul className="footer-links">
                     <li><a href="#hero" className="footer-link">Home</a></li>
                     <li><a href="#brands" className="footer-link">Brand Page</a></li>
                     <li><a href="#about" className="footer-link">About Us</a></li>
                     <li><a href="#spotlight" className="footer-link">Featured Collection</a></li>
                     <li><a href="#contact" className="footer-link">Contact Support</a></li>
                  </ul>
               </div>

               {/* Products */}
               <div className="footer-brand">
                  <h4 className="footer-heading">Our Products</h4>
                  <ul className="footer-links">
                     <li><a href="#" className="footer-link">Vitrified Tiles</a></li>
                     <li><a href="#" className="footer-link">PGVT Designer Series</a></li>
                     <li><a href="#" className="footer-link">Wooden Plank Tiles</a></li>
                     <li><a href="#" className="footer-link">Glazed Vitrified</a></li>
                     <li><a href="#" className="footer-link">Nirali NG Sinks</a></li>
                  </ul>
               </div>

               {/* Contact Details */}
               <div className="footer-brand">
                  <h4 className="footer-heading">Contact Info</h4>
                  <ul className="footer-contact-list">
                     <li className="footer-contact-item">
                        <MapPin size={18} className="contact-icon" />
                        <span>5H6P+8Q Baramati, Maharashtra - 413102</span>
                     </li>
                     <li className="footer-contact-item">
                        <Phone size={18} className="contact-icon" />
                        <span>+91 73835 98553</span>
                     </li>
                     <li className="footer-contact-item">
                        <Mail size={18} className="contact-icon" />
                        <span>info@oswaltiles.com</span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
               <p className="copyright-text">
                  &copy; {new Date().getFullYear()} Oswal Tiles Baramati. All Rights Reserved.
               </p>
               <button
                  onClick={scrollToTop}
                  className="scroll-top-btn"
               >
                  UP
               </button>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
