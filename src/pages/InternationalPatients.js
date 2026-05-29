import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlane, FaPassport, FaHotel, FaCar, FaLanguage, FaVideo, FaGlobe, FaHospital, FaArrowRight, FaHeartbeat } from 'react-icons/fa';
import { FiCheckCircle, FiPhone, FiMail } from 'react-icons/fi';
import './InternationalPatients.css';

const services = [
  { icon: <FaPassport />, title: 'Visa Assistance', desc: 'Complete support for medical visa applications including documentation, letters from treating doctors, and embassy liaison services.' },
  { icon: <FaPlane />, title: 'Travel Support', desc: 'Flight booking assistance, airport pickups, and seamless transfer arrangements from the moment you land.' },
  { icon: <FaLanguage />, title: 'Interpreter Services', desc: 'Professional medical interpreters available in 30+ languages including Arabic, Russian, French, German, and more.' },
  { icon: <FaHotel />, title: 'Accommodation', desc: 'Partnered hotels and serviced apartments near the hospital with special rates for patients and their families.' },
  { icon: <FaCar />, title: 'Airport Pickup', desc: '24/7 dedicated ambulance or premium cab service from the airport directly to our hospital or accommodation.' },
  { icon: <FaVideo />, title: 'Video Consultation', desc: 'Pre-arrival consultations with our specialists via secure video calls before you travel, at no extra cost.' },
  { icon: <FaGlobe />, title: 'International Insurance', desc: 'We work with 150+ international insurance providers and assist with claim processing and pre-authorization.' },
  { icon: <FaHospital />, title: 'Treatment Planning', desc: 'Personalized treatment plans sent before your arrival including cost estimates, timelines, and specialist assignments.' },
];

const countries = ['United States', 'United Kingdom', 'UAE', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bangladesh', 'Nigeria', 'Kenya', 'Maldives', 'Sri Lanka', 'Nepal', 'Iraq', 'Oman', 'Russia'];

const InternationalPatients = () => (
  <div className="page-wrapper">
    <div className="page-hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>
            <FaGlobe /> World's Best Healthcare
          </span>
          <h1>International Patient Services</h1>
          <p>We make world-class Indian healthcare accessible to patients from over 80 countries with end-to-end support.</p>
        </motion.div>
      </div>
    </div>

    {/* Stats */}
    <div className="intl-stats-bar">
      <div className="container intl-stats-grid">
        {[
          { num: '80+', label: 'Countries Served' },
          { num: '50,000+', label: 'International Patients' },
          { num: '30+', label: 'Languages Supported' },
          { num: '150+', label: 'Insurance Partners' },
        ].map(s => (
          <div key={s.label} className="intl-stat">
            <div className="intl-stat-num">{s.num}</div>
            <div className="intl-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Services */}
    <section className="section">
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: 48 }}>
          <span className="section-label">Comprehensive Support</span>
          <h2 className="section-title">Everything You Need, <span>Handled For You</span></h2>
          <p className="section-subtitle">From the moment you contact us to your safe return home, we take care of every detail.</p>
        </div>

        <div className="intl-services-grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="intl-service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="isc-icon">{s.icon}</div>
              <h3 className="isc-title">{s.title}</h3>
              <p className="isc-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section intl-process-section">
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: 48 }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Simple <span>4-Step Process</span></h2>
        </div>
        <div className="process-steps">
          {[
            { step: '01', title: 'Contact Us', desc: 'Send us your medical records via email or WhatsApp for a free preliminary assessment.' },
            { step: '02', title: 'Get Treatment Plan', desc: 'Our specialists review your case and send a detailed treatment plan with cost estimate within 24 hours.' },
            { step: '03', title: 'Travel & Arrive', desc: 'Our team assists with visa, flights, and airport pickup. We handle all logistics.' },
            { step: '04', title: 'Treatment & Recovery', desc: 'Receive world-class treatment and full post-procedure support before returning home.' },
          ].map((p, i) => (
            <motion.div
              key={p.step}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="ps-number">{p.step}</div>
              <h3 className="ps-title">{p.title}</h3>
              <p className="ps-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Countries */}
    <section className="section intl-countries-section">
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: 40 }}>
          <span className="section-label">Our Global Reach</span>
          <h2 className="section-title">Serving Patients From <span>Across the World</span></h2>
        </div>
        <div className="countries-grid">
          {countries.map(c => (
            <div key={c} className="country-tag">
              <FiCheckCircle /> {c}
            </div>
          ))}
          <div className="country-tag more-tag">+ 65 More Countries</div>
        </div>
      </div>
    </section>

    {/* Contact CTA */}
    <section className="intl-cta">
      <div className="container intl-cta-content">
        <FaHeartbeat className="intl-cta-icon" />
        <h2>Ready To Start Your Medical Journey?</h2>
        <p>Contact our International Patient Services team — available 24/7 in your language.</p>
        <div className="intl-cta-btns">
          <Link to="/appointments" className="btn-primary">Book Consultation <FaArrowRight /></Link>
          <a href="mailto:international@globalcare.com" className="btn-outline-white"><FiMail /> Email Us</a>
          <a href="tel:+911234567890" className="btn-outline-white"><FiPhone /> Call Now</a>
        </div>
      </div>
    </section>
  </div>
);

export default InternationalPatients;
