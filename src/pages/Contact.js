import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle, FiUser, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/contact', form);
    } catch {}
    setLoading(false);
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>Get In Touch</span>
            <h1>Contact Us</h1>
            <p>We're here for you 24/7. Reach out with any questions, feedback, or appointment requests.</p>
          </motion.div>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container contact-grid">
          {/* Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="section-title">We're Always <span>Here For You</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>Whether you have questions about our services, need help with a booking, or are a medical professional looking to refer a patient — we're ready to assist.</p>

            <div className="contact-info-cards">
              <div className="cic-card">
                <FiMapPin className="cic-icon" />
                <div>
                  <h4>Address</h4>
                  <p>123 Healthcare Avenue, Medical District<br />Mumbai — 400001, Maharashtra, India</p>
                </div>
              </div>
              <div className="cic-card">
                <FiPhone className="cic-icon" />
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:+911234567890">+91 123 456 7890</a> (General)</p>
                  <p><a href="tel:108">108</a> (Emergency)</p>
                </div>
              </div>
              <div className="cic-card">
                <FiMail className="cic-icon" />
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:care@globalcare.com">care@globalcare.com</a></p>
                  <p><a href="mailto:international@globalcare.com">international@globalcare.com</a></p>
                </div>
              </div>
              <div className="cic-card">
                <FiClock className="cic-icon" />
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon – Fri: 8:00 AM – 8:00 PM</p>
                  <p>Sat – Sun: 9:00 AM – 5:00 PM</p>
                  <p style={{ color: '#22c55e', fontWeight: 600 }}>Emergency: 24/7 Open</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Follow Us</h4>
              <div className="contact-social-links">
                <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="contact-form-card">
              <h3 className="form-title">Send Us a Message</h3>

              {sent && (
                <div className="contact-success">
                  <FiCheckCircle /> Thank you! We'll get back to you within 2 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="appt-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><FiUser /> Your Name</label>
                    <input name="name" type="text" className="form-input" placeholder="Full name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label"><FiPhone /> Phone</label>
                    <input name="phone" type="tel" className="form-input" placeholder="Your phone" value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label"><FiMail /> Email</label>
                  <input name="email" type="email" className="form-input" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input name="subject" type="text" className="form-input" placeholder="How can we help?" value={form.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label"><FiMessageSquare /> Message</label>
                  <textarea name="message" className="form-input form-textarea" placeholder="Your message..." value={form.message} onChange={handleChange} rows={5} required />
                </div>
                <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                  <FiSend /> {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                title="GlobalCare Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160989515!2d72.74109995709988!3d19.08255508563583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
