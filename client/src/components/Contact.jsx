import React from 'react';
import { Mail, Navigation2, Phone, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactNumber = '919766875355';

  const buildMessage = (form) => {
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const phone = data.get('phone')?.toString().trim();
    const service = data.get('service')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    return [
      'Hello Oswal Tiles, I am interested in your products.',
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      service ? `Service Needed: ${service}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const openMessageChannel = (platform, event) => {
    event.preventDefault();
    const form = event.currentTarget.form;

    if (!form) return;

    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const phone = data.get('phone')?.toString().trim();

    // Validation
    if (!name) {
      alert('Please enter your full name.');
      return;
    }

    if (!phone || !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    const message = buildMessage(form);
    const encodedMessage = encodeURIComponent(message);
    const url =
      platform === 'sms'
        ? `sms:+${contactNumber}?body=${encodedMessage}`
        : `https://wa.me/${contactNumber}?text=${encodedMessage}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-kicker">Map Location</p>
            <h2 className="contact-map-title">Visit Our Baramati Showroom</h2>
            <p className="contact-info-text">
              Find us on the map, get directions, or call the store directly.
            </p>

            <div className="contact-map-wrapper">
              <div className="map-bg-decoration" />
              <div className="contact-map-card">
                <iframe
                  title="Oswal Tiles location map"
                  className="contact-map-iframe"
                  src="https://www.google.com/maps?q=18.160778154676212,74.58693038091967&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>


            <div className="contact-map-actions">
              <a
                href="https://www.google.com/maps/search/?api=1&query=18.160778154676212,74.58693038091967"
                target="_blank"
                rel="noreferrer"
                className="contact-map-button contact-map-button-primary"
              >
                <Navigation2 size={18} />
                <span>Directions</span>
              </a>
            </div>

          </div>

          <div className="contact-form-container">
            <h3 className="contact-form-title">Send a Message</h3>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                    }}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    className="form-input"
                    placeholder="Enter your phone"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
                    }}
                  />
                </div>

              </div>
              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  className="form-textarea"
                  name="message"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="contact-action-row">
                <button
                  type="button"
                  className="btn btn-primary submit-btn"
                  onClick={(event) => openMessageChannel('whatsapp', event)}
                >
                  Send on WhatsApp
                  <MessageCircle size={20} />
                </button>
                <a
                  className="btn btn-outline submit-btn submit-btn-secondary"
                  href="tel:+919766875355"
                >
                  Call Us
                  <Phone size={20} />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
