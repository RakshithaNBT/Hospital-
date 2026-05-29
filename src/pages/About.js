import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiGlobe, FiShield, FiTarget } from 'react-icons/fi';
import { FaUserMd, FaHospital, FaStar, FaArrowRight } from 'react-icons/fa';

const milestones = [
  { year: '1999', title: 'Founded', desc: 'GlobalCare was established with a 50-bed facility in Mumbai.' },
  { year: '2005', title: 'NABH Accreditation', desc: 'Achieved NABH accreditation — becoming a symbol of quality care.' },
  { year: '2010', title: 'International Expansion', desc: 'Launched International Patient Services and JCI Accreditation.' },
  { year: '2015', title: 'Robotic Surgery', desc: 'Introduced Da Vinci Robotic Surgical System for minimally invasive surgery.' },
  { year: '2020', title: 'AI Diagnostics', desc: 'Implemented AI-powered diagnostic systems across all departments.' },
  { year: '2024', title: 'Global Leader', desc: 'Serving 1M+ patients, 80+ countries, recognized as Top 10 hospital in Asia.' },
];

const team = [
  { name: 'Dr. Rajan Mehra', role: 'Chief Medical Officer', exp: '30+ Years' },
  { name: 'Dr. Priya Bose', role: 'Director of Nursing', exp: '25+ Years' },
  { name: 'Mr. Suresh Kumar', role: 'Hospital Administrator', exp: '20+ Years' },
  { name: 'Dr. Anil Kapoor', role: 'Head of Research', exp: '28+ Years' },
];

const About = () => (
  <div className="page-wrapper">
    <div className="page-hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>Our Story</span>
          <h1>About GlobalCare</h1>
          <p>25 years of healing, innovation, and compassionate care for patients from across the world.</p>
        </motion.div>
      </div>
    </div>

    {/* Vision Mission */}
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 64 }}>
          {[
            { icon: <FiTarget />, title: 'Our Mission', desc: 'To deliver world-class healthcare by combining cutting-edge medical technology with genuine human compassion, making excellent care accessible to all.' },
            { icon: <FiGlobe />, title: 'Our Vision', desc: 'To be Asia\'s most trusted international healthcare destination — where patients from every country receive care without compromise on quality or safety.' },
            { icon: <FiShield />, title: 'Our Values', desc: 'Patient-first philosophy, medical excellence, ethical practice, continuous innovation, and compassionate care form the foundation of everything we do.' },
          ].map(v => (
            <motion.div
              key={v.title}
              style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 32 }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            >
              <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, rgba(0,119,182,0.1), rgba(0,180,216,0.1))', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--primary)', marginBottom: 16 }}>{v.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', lineHeight: 1.7 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* About Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">A Legacy of <span>Excellence</span></h2>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 24 }}>
              Founded in 1999 by a group of visionary physicians, GlobalCare Health Hospitals was born out of a simple yet powerful conviction — that every person deserves access to the best possible medical care. Starting with a 50-bed facility in Mumbai, we have grown into one of Asia's most respected multi-specialty hospital systems.
            </p>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 24 }}>
              Today, our hospital spans over 500 beds, employs 2,000+ healthcare professionals, and welcomes patients from 80+ countries. We hold both NABH and JCI international accreditation — the highest standards in global healthcare quality.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
              {['NABH Accredited', 'JCI Certified', '500+ Beds', '2000+ Staff', '80+ Countries', '25+ Years'].map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-mid)' }}>
                  <FiCheckCircle style={{ color: 'var(--accent)' }} /> {f}
                </div>
              ))}
            </div>
            <Link to="/departments" className="btn-primary">Explore Our Services <FaArrowRight /></Link>
          </motion.div>

          <motion.div
            style={{ background: 'var(--gradient-hero)', borderRadius: 'var(--radius-xl)', padding: 48, color: 'white', textAlign: 'center', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            {[
              { num: '1M+', label: 'Patients Treated' },
              { num: '500+', label: 'Expert Doctors' },
              { num: '50+', label: 'Departments' },
              { num: '25+', label: 'Years of Excellence' },
            ].map(s => (
              <div key={s.label} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 900, marginBottom: 4 }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: 56 }}>
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">25 Years of <span>Milestones</span></h2>
        </div>
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'var(--gradient-primary)', transform: 'translateX(-50%)' }} />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', marginBottom: 32, position: 'relative' }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ width: '44%', background: 'white', borderRadius: 'var(--radius-lg)', padding: 24, boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{m.year}</div>
                <h4 style={{ fontWeight: 700, marginBottom: 6 }}>{m.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', lineHeight: 1.6 }}>{m.desc}</p>
              </div>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 16, height: 16, background: 'var(--primary)', borderRadius: '50%', border: '3px solid white', boxShadow: '0 0 0 4px rgba(0,119,182,0.2)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="section-header-center" style={{ marginBottom: 48 }}>
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Our Management <span>Team</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              style={{ background: 'var(--off-white)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', textAlign: 'center' }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div style={{ height: 160, background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', color: 'rgba(255,255,255,0.7)' }}>
                <FaUserMd />
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, marginBottom: 4 }}>{t.name}</h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--primary)', fontWeight: 600, marginBottom: 4 }}>{t.role}</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{t.exp} Experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
