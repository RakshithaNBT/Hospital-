import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube,
  FaAmbulance, FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Emergency Band */}
      <div className="footer-emergency">
        <div className="container">
          <div className="footer-emergency-content">
            <div className="footer-emergency-item">
              <FaAmbulance className="fe-icon" />
              <div>
                <span className="fe-label">Emergency</span>
                <a href="tel:108" className="fe-number">108</a>
              </div>
            </div>
            <div className="footer-emergency-divider" />
            <div className="footer-emergency-item">
              <FaPhone className="fe-icon" />
              <div>
                <span className="fe-label">Helpline</span>
                <a href="tel:+911234567890" className="fe-number">+91 123 456 7890</a>
              </div>
            </div>
            <div className="footer-emergency-divider" />
            <div className="footer-emergency-item">
              <FaEnvelope className="fe-icon" />
              <div>
                <span className="fe-label">Email</span>
                <a href="mailto:care@globalcare.com" className="fe-number">care@globalcare.com</a>
              </div>
            </div>
            <Link to="/appointments" className="footer-appt-btn">
              Book Appointment <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon"><FaHeartbeat /></div>
                <div>
                  <span className="footer-logo-main">GlobalCare</span>
                  <span className="footer-logo-sub">Health Hospitals</span>
                </div>
              </div>
              <p className="footer-desc">
                Delivering world-class healthcare with compassion, innovation, and excellence. 
                Trusted by over 1 million patients across the globe.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Departments', path: '/departments' },
                  { label: 'Our Doctors', path: '/doctors' },
                  { label: 'Book Appointment', path: '/appointments' },
                  { label: 'Emergency', path: '/emergency' },
                ].map(l => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Specialities */}
            <div className="footer-col">
              <h4 className="footer-heading">Specialities</h4>
              <ul className="footer-links">
                {[
                  'Cardiology', 'Neurology', 'Oncology', 'Orthopedics',
                  'Pediatrics', 'Gynecology', 'Pulmonology', 'Emergency Care'
                ].map(s => (
                  <li key={s}><Link to="/departments">{s}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact-list">
                <li>
                  <FaMapMarkerAlt className="fc-icon" />
                  <span>123 Healthcare Avenue, Medical District, Mumbai - 400001, India</span>
                </li>
                <li>
                  <FaPhone className="fc-icon" />
                  <a href="tel:+911234567890">+91 123 456 7890</a>
                </li>
                <li>
                  <FaEnvelope className="fc-icon" />
                  <a href="mailto:care@globalcare.com">care@globalcare.com</a>
                </li>
              </ul>
              <div className="footer-hours">
                <h5>Working Hours</h5>
                <p>Mon – Fri: 8:00 AM – 8:00 PM</p>
                <p>Sat – Sun: 9:00 AM – 5:00 PM</p>
                <p className="emergency-24">Emergency: 24/7 Open</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 GlobalCare Health Hospitals. All rights reserved.</p>
            <div className="footer-bottom-links">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/cookies">Cookie Policy</Link>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
