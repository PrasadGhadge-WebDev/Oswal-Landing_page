import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import './BottomNavbar.css';

const contactNumber = '917383598553';

const BottomNavbar = () => {
  const whatsappMessage = encodeURIComponent(
    'Hello Oswal Tiles, I would like to enquire about your products.'
  );

  return (
    <div className="bottom-navbar" aria-label="Quick contact actions">
      <a
        className="bottom-navbar-action bottom-navbar-whatsapp"
        href={`https://wa.me/${contactNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle size={18} />
        <span>WhatsApp</span>
      </a>

      <a className="bottom-navbar-action bottom-navbar-call" href={`tel:+${contactNumber}`}>
        <Phone size={18} />
        <span>Call</span>
      </a>
    </div>
  );
};

export default BottomNavbar;
