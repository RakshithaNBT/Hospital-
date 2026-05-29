import React from 'react';
import { motion } from 'framer-motion';
import { FaAmbulance, FaPhone, FaHeartbeat, FaBrain, FaBone, FaLungs, FaChild } from 'react-icons/fa';
import { FiAlertTriangle, FiClock, FiMapPin } from 'react-icons/fi';
import './Emergency.css';

const emergencyServices = [
  { icon: <FaHeartbeat />, name: 'Cardiac Emergency', desc: 'Rapid response cath lab available 24/7 for heart attacks and cardiac arrests.' },
  { icon: <FaBrain />, name: 'Stroke Unit', desc: 'Dedicated stroke team with thrombolysis and mechanical thrombectomy capabilities.' },
  { icon: <FaBone />, name: 'Trauma Center', desc: 'Level 1 trauma center with dedicated OTs and trauma surgeons on standby.' },
  { icon: <FaLungs />, name: 'Respiratory Crisis', desc: 'Ventilator support and respiratory critical care with ICU step-down beds.' },
  { icon: <FaChild />, name: 'Pediatric Emergency', desc: 'Separate pediatric emergency unit with dedicated pediatric intensivists.' },
  { icon: <FaAmbulance />, name: 'Ambulance Service', desc: 'Advanced life support ambulances with GPS tracking and real-time hospital communication.' },
];

const Emergency = () => (
  <div className="emergency-page">
    {/* HERO */}
    <section className="emergency-hero">
      <div className="emhero-bg" />
      <div className="container emhero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="em-badge">
            <FiAlertTriangle /> EMERGENCY SERVICES
          </div>
          <h1 className="em-title">24/7 Emergency Care</h1>
          <p className="em-subtitle">Our emergency department never closes. Expert care available every minute of every day.</p>

          <div className="em-cta-btns">
            <a href="tel:108" className="em-ambulance-btn">
              <FaAmbulance /> Call Ambulance: 108
            </a>
            <a href="tel:+911234567890" className="em-phone-btn">
              <FaPhone /> Helpline: +91 123 456 7890
            </a>
          </div>

          <div className="em-location">
            <FiMapPin /> 123 Healthcare Avenue, Mumbai — Emergency Entrance: Gate 1 (Open 24/7)
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <div className="em-stats-bar">
      <div className="container em-stats-grid">
        {[
          { icon: <FiClock />, value: '< 5 min', label: 'Average Response Time' },
          { icon: <FaAmbulance />, value: '50+', label: 'Ambulances Available' },
          { icon: <FaHeartbeat />, value: '500+', label: 'Beds Including ICU' },
          { icon: <FiAlertTriangle />, value: '24/7', label: 'Emergency Specialists' },
        ].map(s => (
          <div key={s.label} className="em-stat">
            <div className="em-stat-icon">{s.icon}</div>
            <div className="em-stat-value">{s.value}</div>
            <div className="em-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Services */}
    <section className="section em-services-section">
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: 48 }}>
          <span className="section-label">Emergency Capabilities</span>
          <h2 className="section-title">Prepared for <span>Every Emergency</span></h2>
        </div>
        <div className="em-services-grid">
          {emergencyServices.map((s, i) => (
            <motion.div
              key={s.name}
              className="em-service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="emsc-icon">{s.icon}</div>
              <h3 className="emsc-name">{s.name}</h3>
              <p className="emsc-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* What To Do */}
    <section className="section em-steps-section">
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: 48 }}>
          <span className="section-label">In Case of Emergency</span>
          <h2 className="section-title">What To Do <span>Right Now</span></h2>
        </div>
        <div className="em-steps">
          {[
            { num: '1', title: 'Call 108', desc: 'Call our emergency number immediately. Our dispatcher will guide you.' },
            { num: '2', title: 'Stay Calm', desc: 'Keep the patient calm and comfortable. Do not move them if there is a spinal injury.' },
            { num: '3', title: 'Ambulance Arrives', desc: 'Our ALS ambulance will reach you within 5 minutes in the city.' },
            { num: '4', title: 'Immediate Treatment', desc: 'Emergency team starts treatment during transport. Zero waiting at ER.' },
          ].map(s => (
            <div key={s.num} className="em-step">
              <div className="em-step-num">{s.num}</div>
              <h3 className="em-step-title">{s.title}</h3>
              <p className="em-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sticky Emergency CTA */}
    <div className="em-sticky-cta">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ color: 'white' }}>
          <strong style={{ fontSize: '1.1rem' }}>Medical Emergency?</strong>
          <span style={{ opacity: 0.8, marginLeft: 12, fontSize: '0.9rem' }}>Our team is standing by 24/7</span>
        </div>
        <a href="tel:108" className="em-sticky-btn">
          <FaAmbulance /> Call 108 Now
        </a>
      </div>
    </div>
  </div>
);

export default Emergency;
