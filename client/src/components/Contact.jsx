import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const whatsappNumber = "917383598553";
  const whatsappMsg = encodeURIComponent("Hello Oswal Tiles, I'm interested in your tile collections!");

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">

          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-title section-title-left mb-6">
              Visit Our <span className="text-[#D20A10]">Studio</span>
            </h2>
            <p className="contact-info-text">
              Have a project in mind? Visit our showroom in Baramati for a physical
              consultation or drop us a message online. We're here to help you
              build your dream space.
            </p>

            <div className="contact-methods">
              <a
                href="https://www.google.com/maps/search/?api=1&query=5H6P%2B8Q+Baramati,+Maharashtra"
                target="_blank"
                rel="noreferrer"
                className="contact-method-item"
              >
                <div className="contact-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="contact-method-title">Our Location</h4>
                  <p className="contact-method-value">
                    Vishwa Empire Building, Opposite TVS Showroom,<br />
                    Bhigwan Road, Baramati HO, Baramati - 413102
                  </p>
                  <span className="text-xs font-bold text-[#D20A10] uppercase tracking-wider mt-1 inline-block">
                    Get Directions →
                  </span>
                </div>
              </a>

              <div className="contact-method-item">
                <div className="contact-icon-wrapper">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="contact-method-title">Call Us</h4>
                  <p className="contact-method-value">+91 73835 98553</p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="contact-method-title">Email Enquiry</h4>
                  <p className="contact-method-value">info@oswaltiles.com</p>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            {/* <div className="whatsapp-action-card">
               <div className="whatsapp-icon-bg">
                 <MessageCircle size={32} />
               </div>
               <div>
                  <h3 className="whatsapp-card-title">Quick WhatsApp Enquiry</h3>
                  <p className="whatsapp-card-text">Get instant quotes and product catalogs.</p>
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn whatsapp-btn"
                  >
                    Chat on WhatsApp
                  </a>
               </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h3 className="contact-form-title">Send a Message</h3>
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-input" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Service Needed</label>
                <select className="form-select">
                  <option>Vitrified Tiles</option>
                  <option>PGVT Designer Tiles</option>
                  <option>Wooden Flooring</option>
                  <option>Kitchen Sinks / Sinks</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea className="form-textarea" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Enquiry
                <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
