import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHeartbeat, FaBrain, FaBone, FaLungs, FaChild, FaVenus,
  FaAmbulance, FaEye, FaTooth,
  FaArrowRight, FaMicroscope
} from 'react-icons/fa';
import { GiKidneys } from 'react-icons/gi';
import { FiActivity } from 'react-icons/fi';
import './Departments.css';

const departments = [
  { id: 'cardiology', icon: <FaHeartbeat />, name: 'Cardiology', desc: 'Advanced cardiac care, interventional cardiology, electrophysiology, and heart surgery with state-of-the-art cath labs.', color: '#ef4444', doctors: 28, procedures: '5000+' },
  { id: 'neurology', icon: <FaBrain />, name: 'Neurology', desc: 'Comprehensive brain and nervous system treatment including stroke care, epilepsy, movement disorders, and neurosurgery.', color: '#7c3aed', doctors: 22, procedures: '3500+' },
  { id: 'oncology', icon: <FaMicroscope />, name: 'Oncology', desc: 'Comprehensive cancer treatment combining chemotherapy, radiation therapy, immunotherapy, and targeted therapies.', color: '#8b5cf6', doctors: 18, procedures: '4000+' },
  { id: 'orthopedics', icon: <FaBone />, name: 'Orthopedics', desc: 'Joint replacement, spine surgery, sports medicine, arthroscopy, and trauma care with minimally invasive techniques.', color: '#f59e0b', doctors: 25, procedures: '6000+' },
  { id: 'pediatrics', icon: <FaChild />, name: 'Pediatrics', desc: 'Specialized child healthcare from neonates to adolescents including NICU, PICU, and pediatric surgery.', color: '#10b981', doctors: 30, procedures: '8000+' },
  { id: 'gynecology', icon: <FaVenus />, name: 'Gynecology', desc: "Women's reproductive health, high-risk obstetrics, laparoscopic surgery, and maternal-fetal medicine.", color: '#ec4899', doctors: 20, procedures: '5500+' },
  { id: 'pulmonology', icon: <FaLungs />, name: 'Pulmonology', desc: 'Respiratory care, chronic obstructive pulmonary disease, lung cancer, sleep apnea, and bronchoscopy services.', color: '#06b6d4', doctors: 15, procedures: '3000+' },
  { id: 'gastroenterology', icon: <FiActivity />, name: 'Gastroenterology', desc: 'Comprehensive digestive system care including endoscopy, colonoscopy, liver disease, and bariatric surgery.', color: '#f97316', doctors: 18, procedures: '4500+' },
  { id: 'ent', icon: <FaEye />, name: 'ENT', desc: 'Ear, nose, and throat care including cochlear implants, rhinoplasty, tonsillectomy, and sinus surgeries.', color: '#14b8a6', doctors: 14, procedures: '3200+' },
  { id: 'urology', icon: <FaTooth />, name: 'Urology', desc: 'Urological conditions, robotic surgery, kidney stone treatment, prostate care, and laparoscopic procedures.', color: '#3b82f6', doctors: 16, procedures: '4200+' },
  { id: 'nephrology', icon: <GiKidneys />, name: 'Nephrology', desc: 'Kidney disease management, dialysis, kidney transplantation, and hypertension-related renal conditions.', color: '#6366f1', doctors: 12, procedures: '2800+' },
  { id: 'emergency', icon: <FaAmbulance />, name: 'Emergency Care', desc: '24/7 emergency response with Level 1 trauma center, ICU, advanced cardiac life support, and rapid response teams.', color: '#dc2626', doctors: 45, procedures: '20000+' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5 } }),
};

const Departments = () => (
  <div className="page-wrapper">
    {/* Hero */}
    <div className="page-hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>Our Specialities</span>
          <h1>Departments & Specialities</h1>
          <p>50+ specialized departments led by world-class physicians and surgeons dedicated to your care.</p>
        </motion.div>
      </div>
    </div>

    {/* Department Cards */}
    <section className="section">
      <div className="container">
        <div className="dept-grid">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              className="dept-card"
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/departments/${dept.id}`}>
                <div className="dept-icon" style={{ background: `${dept.color}18`, color: dept.color }}>
                  {dept.icon}
                </div>
                <h3 className="dept-name">{dept.name}</h3>
                <p className="dept-desc">{dept.desc}</p>
                <div className="dept-stats">
                  <span>{dept.doctors} Doctors</span>
                  <span>{dept.procedures} Procedures</span>
                </div>
                <div className="dept-link">
                  <span>View Department</span> <FaArrowRight />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <div className="dept-cta-strip">
      <div className="container dept-cta-content">
        <div>
          <h3>Can't Find Your Condition?</h3>
          <p>Our team will guide you to the right specialist for your needs.</p>
        </div>
        <div className="dept-cta-btns">
          <Link to="/appointments" className="btn-primary">Book Appointment</Link>
          <a href="tel:+911234567890" className="btn-outline">Call Us Now</a>
        </div>
      </div>
    </div>
  </div>
);

export default Departments;
