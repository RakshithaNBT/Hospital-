import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  FaHeartbeat, FaUserMd, FaHospital, FaSmile, FaAmbulance,
  FaArrowRight, FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight,
  FaPlay, FaStethoscope, FaBrain, FaBone, FaLungs, FaChild,
  FaVenus, FaEye, FaTooth
} from 'react-icons/fa';
import { FiCheckCircle, FiClock, FiGlobe, FiShield, FiPhone } from 'react-icons/fi';
import './Home.css';

/* ─── Animated Counter Hook ─── */
const useCounter = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);
  return [count, ref];
};

/* ─── Fade-up animation variant ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

/* ─── Specialties Data ─── */
const specialties = [
  { id: 'cardiology', icon: <FaHeartbeat />, name: 'Cardiology', desc: 'Advanced cardiac care, interventional cardiology and heart surgery.', color: '#ef4444' },
  { id: 'neurology', icon: <FaBrain />, name: 'Neurology', desc: 'Comprehensive brain and nervous system treatment programs.', color: '#7c3aed' },
  { id: 'orthopedics', icon: <FaBone />, name: 'Orthopedics', desc: 'Joint replacement, spine surgery, and sports medicine.', color: '#f59e0b' },
  { id: 'pulmonology', icon: <FaLungs />, name: 'Pulmonology', desc: 'Respiratory care, lung disease management and sleep medicine.', color: '#06b6d4' },
  { id: 'pediatrics', icon: <FaChild />, name: 'Pediatrics', desc: 'Specialized child healthcare from newborns to adolescents.', color: '#10b981' },
  { id: 'gynecology', icon: <FaVenus />, name: 'Gynecology', desc: "Women's health, obstetrics, and maternal care services.", color: '#ec4899' },
  { id: 'oncology', icon: <FaStethoscope />, name: 'Oncology', desc: 'Comprehensive cancer treatment with advanced therapies.', color: '#8b5cf6' },
  { id: 'emergency', icon: <FaAmbulance />, name: 'Emergency Care', desc: '24/7 emergency response with ICU and trauma facilities.', color: '#dc2626' },
];

/* ─── Doctors Data ─── */
const doctors = [
  { name: 'Dr. Arun Sharma', spec: 'Cardiologist', exp: '22 Years', rating: 4.9, fee: '₹1500', available: true },
  { name: 'Dr. Priya Mehta', spec: 'Neurologist', exp: '18 Years', rating: 4.8, fee: '₹1200', available: true },
  { name: 'Dr. Rahul Verma', spec: 'Orthopedic Surgeon', exp: '15 Years', rating: 4.9, fee: '₹1800', available: false },
  { name: 'Dr. Sneha Kapoor', spec: 'Oncologist', exp: '20 Years', rating: 4.7, fee: '₹2000', available: true },
  { name: 'Dr. Vikram Patel', spec: 'Pulmonologist', exp: '12 Years', rating: 4.8, fee: '₹1100', available: true },
];

/* ─── Testimonials Data ─── */
const testimonials = [
  { name: 'Rajesh Kumar', location: 'Mumbai', rating: 5, text: 'GlobalCare saved my life. The cardiac team performed a complex surgery and I recovered faster than expected. World-class infrastructure and compassionate staff.' },
  { name: 'Sarah Johnson', location: 'United Kingdom', rating: 5, text: 'As an international patient, I was nervous but the team made everything seamless — from visa assistance to post-surgery care. Truly outstanding hospital.' },
  { name: 'Mohammed Al-Rashid', location: 'Dubai, UAE', rating: 5, text: 'I traveled from Dubai for my knee replacement surgery. The cost was a fraction of what it would be at home, and the quality was exceptional.' },
  { name: 'Ananya Singh', location: 'Delhi', rating: 5, text: 'My mother received cancer treatment here. The oncology team was incredibly supportive throughout the entire journey. Forever grateful.' },
];

/* ─── Health Packages Preview ─── */
const packages = [
  { name: 'Full Body Checkup', price: '₹2,499', tests: '72+ Tests', tag: 'Popular', color: 'var(--primary)' },
  { name: 'Heart Care Package', price: '₹3,999', tests: '45+ Tests', tag: 'Best Value', color: '#ef4444' },
  { name: "Women's Wellness", price: '₹2,999', tests: '58+ Tests', tag: 'Recommended', color: '#ec4899' },
];

const Home = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [doctorIdx, setDoctorIdx] = useState(0);
  const [cardWidth, setCardWidth] = useState(340);

  const [doc500, doc500Ref] = useCounter(500);
  const [dep50, dep50Ref] = useCounter(50);
  const [pat1M, pat1MRef] = useCounter(1000000);
  const [yrs25, yrs25Ref] = useCounter(25);

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(window.innerWidth <= 480 ? 280 : 340);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx(i => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home-page">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-overlay" />
          <div className="hero-particles">
            {[...Array(8)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FiShield /> NABH & JCI Accredited Hospital
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Advanced Healthcare<br />
              <span className="hero-gradient-text">For A Better Tomorrow</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Trusted by over 1 million patients worldwide. GlobalCare combines 
              cutting-edge technology with compassionate care to deliver 
              internationally-accredited medical excellence.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/appointments" className="btn-primary hero-btn-primary">
                Book Appointment <FaArrowRight />
              </Link>
              <Link to="/departments" className="hero-btn-outline">
                <span className="play-btn"><FaPlay /></span>
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              className="hero-trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="trust-item"><FiCheckCircle /> 500+ Expert Doctors</div>
              <div className="trust-item"><FiCheckCircle /> 24/7 Emergency Care</div>
              <div className="trust-item"><FiCheckCircle /> International Patients Welcome</div>
            </motion.div>
          </motion.div>

          {/* Hero Card */}
          <motion.div
            className="hero-card-wrapper"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="hero-glass-card">
              <div className="hgc-header">
                <FiClock className="hgc-icon" />
                <span>Book An Appointment</span>
              </div>
              <div className="hgc-body">
                <select className="hgc-select">
                  <option>Select Department</option>
                  {specialties.map(s => <option key={s.id}>{s.name}</option>)}
                </select>
                <select className="hgc-select">
                  <option>Select Doctor</option>
                  {doctors.map(d => <option key={d.name}>{d.name}</option>)}
                </select>
                <input type="date" className="hgc-input" />
                <Link to="/appointments" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Confirm Appointment
                </Link>
              </div>
              <div className="hgc-footer">
                <FiPhone /> <span>Or call us: <a href="tel:+911234567890">+91 123 456 7890</a></span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="hero-float-badge badge-1">
              <FaUserMd /> <span>500+ Specialist<br />Doctors</span>
            </div>
            <div className="hero-float-badge badge-2">
              <FaStar style={{ color: '#fbbf24' }} /> <span>4.9 Rating<br />Patient Satisfaction</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <div className="scroll-dot" />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { ref: doc500Ref, value: doc500, suffix: '+', label: 'Expert Doctors', icon: <FaUserMd /> },
              { ref: dep50Ref, value: dep50, suffix: '+', label: 'Departments', icon: <FaHospital /> },
              { ref: pat1MRef, value: pat1M, suffix: '+', label: 'Happy Patients', icon: <FaSmile />, format: true },
              { ref: yrs25Ref, value: yrs25, suffix: ' Yrs', label: 'Of Excellence', icon: <FaStar /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                ref={stat.ref}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  {stat.format
                    ? stat.value >= 1000000
                      ? `1M${stat.suffix}`
                      : `${(stat.value / 1000).toFixed(0)}K${stat.suffix}`
                    : `${stat.value}${stat.suffix}`}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section about-preview">
        <div className="container about-grid">
          <motion.div
            className="about-image-side"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="about-img-main">
              <div className="about-img-placeholder">
                <FaHospital />
                <span>State-of-the-Art Facility</span>
              </div>
            </div>
            <div className="about-img-accent">
              <FiShield /> <span>NABH Accredited</span>
            </div>
            <div className="about-img-accent about-img-accent-2">
              <FiGlobe /> <span>JCI Certified</span>
            </div>
          </motion.div>

          <motion.div
            className="about-text-side"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span className="section-label" variants={fadeUp}>About GlobalCare</motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              A Legacy of <span>Healing & Innovation</span>
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              For over 25 years, GlobalCare Health Hospitals has been at the forefront of 
              medical innovation, combining advanced technology with compassionate care. 
              Our internationally-accredited facilities serve patients from 80+ countries.
            </motion.p>

            <motion.div className="about-features" variants={stagger}>
              {[
                'Advanced robotic surgery center',
                '500+ bed capacity with private suites',
                'On-site diagnostics & pharmacy',
                'International patient services desk',
                'AI-powered diagnostic systems',
                'Video consultation available',
              ].map(f => (
                <motion.div key={f} className="about-feature" variants={fadeUp}>
                  <FiCheckCircle className="af-icon" /> {f}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link to="/about" className="btn-primary">
                Discover Our Story <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="section specialties-section">
        <div className="container">
          <motion.div
            className="section-header-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Specialities</span>
            <h2 className="section-title">World-Class Medical <span>Departments</span></h2>
            <p className="section-subtitle">
              Advanced care across 50+ specialities, powered by cutting-edge technology and experienced specialists.
            </p>
          </motion.div>

          <div className="specialties-grid">
            {specialties.map((spec, i) => (
              <motion.div
                key={spec.id}
                className="specialty-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/departments/${spec.id}`}>
                  <div className="sc-icon" style={{ background: `${spec.color}18`, color: spec.color }}>
                    {spec.icon}
                  </div>
                  <div className="sc-dot" style={{ background: spec.color }} />
                  <h3 className="sc-name">{spec.name}</h3>
                  <p className="sc-desc">{spec.desc}</p>
                  <span className="sc-link">Learn More <FaArrowRight /></span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="center-cta">
            <Link to="/departments" className="btn-outline">View All 50+ Departments <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* ── DOCTORS SLIDER ── */}
      <section className="section doctors-section">
        <div className="container">
          <div className="doctors-header">
            <div>
              <span className="section-label">Our Specialists</span>
              <h2 className="section-title">Meet Our <span>Expert Doctors</span></h2>
            </div>
            <div className="slider-controls">
              <button
                className="slider-btn"
                onClick={() => setDoctorIdx(i => Math.max(0, i - 1))}
                disabled={doctorIdx === 0}
              >
                <FaChevronLeft />
              </button>
              <button
                className="slider-btn"
                onClick={() => setDoctorIdx(i => Math.min(doctors.length - (window.innerWidth > 768 ? 3 : 1), i + 1))}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          <div className="doctors-track-wrapper">
            <div
              className="doctors-track"
              style={{ transform: `translateX(-${doctorIdx * (cardWidth + 24)}px)` }}
            >
              {doctors.map((doc, i) => (
                <motion.div
                  key={doc.name}
                  className="doctor-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <div className="dc-avatar">
                    <div className="dc-avatar-placeholder">
                      <FaUserMd />
                    </div>
                    <span className={`dc-badge ${doc.available ? 'available' : 'unavailable'}`}>
                      {doc.available ? 'Available Today' : 'Next Available'}
                    </span>
                  </div>
                  <div className="dc-info">
                    <h3 className="dc-name">{doc.name}</h3>
                    <p className="dc-spec">{doc.spec}</p>
                    <div className="dc-meta">
                      <span><FiClock /> {doc.exp}</span>
                      <span><FaStar className="star" /> {doc.rating}</span>
                    </div>
                    <div className="dc-footer">
                      <span className="dc-fee">{doc.fee} / visit</span>
                      <Link to="/appointments" className="dc-book-btn">Book Now</Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="center-cta">
            <Link to="/doctors" className="btn-outline">View All Doctors <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* ── HEALTH PACKAGES ── */}
      <section className="section packages-preview">
        <div className="container">
          <motion.div
            className="section-header-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Health Packages</span>
            <h2 className="section-title">Preventive Care <span>Packages</span></h2>
            <p className="section-subtitle">Comprehensive health checkup packages designed by our expert medical team.</p>
          </motion.div>

          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                className="pkg-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="pkg-tag" style={{ background: pkg.color }}>{pkg.tag}</div>
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-tests">{pkg.tests} Included</div>
                <div className="pkg-price" style={{ color: pkg.color }}>{pkg.price}</div>
                <Link to="/health-packages" className="btn-primary" style={{ background: pkg.color, width: '100%', justifyContent: 'center' }}>
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="center-cta">
            <Link to="/health-packages" className="btn-outline">View All Packages <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div
            className="section-header-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Patient Stories</span>
            <h2 className="section-title">What Our Patients <span>Say</span></h2>
          </motion.div>

          <div className="testimonials-wrapper">
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`t-dot ${i === testimonialIdx ? 'active' : ''}`}
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.div
              key={testimonialIdx}
              className="testimonial-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
            >
              <FaQuoteLeft className="t-quote" />
              <div className="t-stars">
                {[...Array(testimonials[testimonialIdx].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="t-text">"{testimonials[testimonialIdx].text}"</p>
              <div className="t-author">
                <div className="t-avatar">
                  {testimonials[testimonialIdx].name.charAt(0)}
                </div>
                <div>
                  <div className="t-name">{testimonials[testimonialIdx].name}</div>
                  <div className="t-location">{testimonials[testimonialIdx].location}</div>
                </div>
              </div>
            </motion.div>

            <div className="t-nav">
              <button onClick={() => setTestimonialIdx(i => Math.max(0, i - 1))} className="slider-btn"><FaChevronLeft /></button>
              <button onClick={() => setTestimonialIdx(i => Math.min(testimonials.length - 1, i + 1))} className="slider-btn"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL PATIENTS STRIP ── */}
      <section className="intl-strip">
        <div className="container intl-content">
          <div className="intl-text">
            <FiGlobe className="intl-icon" />
            <div>
              <h3>Serving Patients from 80+ Countries</h3>
              <p>Visa assistance, interpreter services, airport pickup & accommodation support.</p>
            </div>
          </div>
          <Link to="/international-patients" className="btn-white">
            International Services <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="section cta-section">
        <div className="container cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaHeartbeat className="cta-icon" />
            <h2>Your Health Is Our Priority</h2>
            <p>Book a consultation with our expert doctors today. Same-day appointments available.</p>
            <div className="cta-buttons">
              <Link to="/appointments" className="btn-white">Book Appointment <FaArrowRight /></Link>
              <a href="tel:+911234567890" className="btn-outline-white"><FaAmbulance /> Emergency: 108</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
