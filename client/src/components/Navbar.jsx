import React, { useEffect, useState } from 'react';
import useTheme from '../hooks/useTheme';
import { Award, Home, LayoutGrid, Menu, MessageSquare, Moon, Sun, UserRound, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'Brand', href: '#brands', icon: Award },
  { name: 'Categories', href: '#categories', icon: LayoutGrid },
  { name: 'About', href: '#about', icon: UserRound },
  { name: 'Contact', href: '#contact', icon: MessageSquare },
];

const contactNumber = '917383598553';
const contactDisplayNumber = '07383598553';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      if (window.scrollY > 24 && isOpen) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#top" className="navbar-brand" onClick={closeMenu}>
          <img
            src="/Logo_Oswal.jpeg"
            alt="Oswal Tiles"
            className="navbar-logo"
          />
          <span className="navbar-brand-copy">
            <span className="navbar-brand-title">Oswal Tiles</span>
          </span>
        </a>

        <div className="navbar-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
              onClick={closeMenu}
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="navbar-call" href={`tel:+${contactNumber}`}>
            <span>📞 Call Now</span>
          </a>
          <div className="navbar-divider" aria-hidden="true" />
          <a
            className="navbar-cta"
            href="https://www.google.com/maps/search/?api=1&query=18.160778154676212,74.58693038091967"
            target="_blank"
            rel="noreferrer"
          >
            <span>📍 Visit Store</span>
          </a>
          <button
            type="button"
            className="navbar-toggle"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`navbar-mobile-menu ${isOpen ? 'is-open' : ''}`}
      >
        <div className="navbar-mobile-content">
          <div className="navbar-mobile-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="navbar-mobile-link"
                onClick={closeMenu}
              >
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="navbar-mobile-actions">
            <button
              className="navbar-mobile-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <>
                  <Moon size={18} />
                  <span>Switch to Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun size={18} />
                  <span>Switch to Light Mode</span>
                </>
              )}
            </button>
            <a className="navbar-mobile-call" href={`tel:+${contactNumber}`} onClick={closeMenu}>
              <span>📞 Call {contactDisplayNumber}</span>
            </a>
            <a
              className="navbar-mobile-cta"
              href="https://www.google.com/maps/search/?api=1&query=18.160778154676212,74.58693038091967"
              target="_blank"
              rel="noreferrer"
            >
              <span>📍 Visit Store</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
