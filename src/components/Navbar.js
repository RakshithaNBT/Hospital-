import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhone, FiMenu, FiX, FiChevronDown,
} from 'react-icons/fi';
import { FaHeartbeat, FaAmbulance } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About', path: '/about',
  },
  {
    label: 'Services', path: '#', dropdown: [
      { label: 'Departments', path: '/departments' },
      { label: 'Health Packages', path: '/health-packages' },
      { label: 'International Patients', path: '/international-patients' },
    ]
  },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Emergency Top Strip */}
      <div className="nav-emergency-strip">
        <FaAmbulance />
        <span>24/7 Emergency Helpline:</span>
        <a href="tel:+911234567890">+91 123 456 7890</a>
        <span className="strip-divider">|</span>
        <span>Ambulance: <a href="tel:108">108</a></span>
      </div>

      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="logo-icon">
              <FaHeartbeat />
            </div>
            <div className="logo-text">
              <span className="logo-main">GlobalCare</span>
              <span className="logo-sub">Health Hospitals</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="nav-item"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className="nav-link nav-link-btn">
                      {link.label} <FiChevronDown className={`chevron ${activeDropdown === link.label ? 'open' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.ul
                          className="nav-dropdown"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.dropdown.map((sub) => (
                            <li key={sub.label}>
                              <NavLink to={sub.path} className="dropdown-link">{sub.label}</NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="nav-cta">
            <a href="tel:+911234567890" className="nav-phone">
              <FiPhone /> <span>+91 123 456 7890</span>
            </a>
            <Link to="/appointments" className="btn-primary nav-btn">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        className="mobile-link mobile-link-btn"
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      >
                        {link.label} <FiChevronDown className={activeDropdown === link.label ? 'open' : ''} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            className="mobile-dropdown"
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                          >
                            {link.dropdown.map((sub) => (
                              <NavLink key={sub.label} to={sub.path} className="mobile-sub-link">{sub.label}</NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink to={link.path} className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}>
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
              <div className="mobile-cta">
                <Link to="/appointments" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Appointment
                </Link>
                <a href="tel:+911234567890" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  <FiPhone /> Emergency Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
