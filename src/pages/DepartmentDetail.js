import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaBrain, FaBone, FaLungs, FaChild, FaVenus, FaStethoscope, FaAmbulance, FaEye, FaTooth, FaMicroscope, FaArrowLeft } from 'react-icons/fa';
import { GiKidneys } from 'react-icons/gi';
import { FiActivity } from 'react-icons/fi';

const deptData = {
  cardiology: { icon: <FaHeartbeat />, name: 'Cardiology', color: '#ef4444', desc: 'Our Cardiology department is equipped with state-of-the-art cardiac catheterization labs, electrophysiology labs, and advanced imaging technology. Our team of expert cardiologists provides comprehensive cardiac care from diagnosis to treatment and rehabilitation.', services: ['Coronary Angiography', 'Angioplasty & Stenting', 'Electrophysiology', 'Echocardiography', 'Pacemaker Implantation', 'Open Heart Surgery', 'Cardiac Rehabilitation', 'Heart Failure Management'] },
  neurology: { icon: <FaBrain />, name: 'Neurology', color: '#7c3aed', desc: 'Our Neurology department offers comprehensive care for all neurological disorders including stroke, epilepsy, Parkinsons disease, multiple sclerosis, and more. We combine advanced neuroimaging with minimally invasive neurosurgical techniques.', services: ['Stroke Management', 'Epilepsy Treatment', 'Deep Brain Stimulation', 'Neuro-oncology', 'Movement Disorders', 'Memory Clinic', 'Neurosurgery', 'Spine Surgery'] },
  oncology: { icon: <FaMicroscope />, name: 'Oncology', color: '#8b5cf6', desc: 'Our Oncology department provides comprehensive cancer care with the latest treatment modalities including immunotherapy, targeted therapy, and robotic surgery. We offer multidisciplinary tumor boards for personalized cancer treatment.', services: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Targeted Therapy', 'Robotic Surgery', 'Bone Marrow Transplant', 'Palliative Care', 'Genetic Counseling'] },
  orthopedics: { icon: <FaBone />, name: 'Orthopedics', color: '#f59e0b', desc: 'Our Orthopedics department specializes in joint replacement, spine surgery, and sports medicine using minimally invasive and robotic-assisted techniques ensuring faster recovery and better outcomes for our patients.', services: ['Hip Replacement', 'Knee Replacement', 'Spine Surgery', 'Arthroscopy', 'Sports Medicine', 'Trauma Surgery', 'Fracture Management', 'Deformity Correction'] },
  pediatrics: { icon: <FaChild />, name: 'Pediatrics', color: '#10b981', desc: 'Our Pediatrics department provides specialized care for children from birth through adolescence. We have dedicated NICU, PICU, and pediatric surgical suites with child-friendly environments.', services: ['Neonatology (NICU)', 'Pediatric Surgery', 'Pediatric Cardiology', 'Pediatric Neurology', 'Vaccination Programs', 'Adolescent Medicine', 'Pediatric Oncology', 'Child Development'] },
  gynecology: { icon: <FaVenus />, name: 'Gynecology', color: '#ec4899', desc: "Our Gynecology and Obstetrics department provides comprehensive women's healthcare including high-risk pregnancy management, minimally invasive surgeries, and fertility treatments in a comfortable, supportive environment.", services: ['High-Risk Pregnancy', 'Laparoscopic Surgery', 'Hysterectomy', 'IVF & Fertility', 'Colposcopy', 'Menopause Management', 'PCOS Management', 'Fetal Medicine'] },
  pulmonology: { icon: <FaLungs />, name: 'Pulmonology', color: '#06b6d4', desc: 'Our Pulmonology department provides expert care for all respiratory conditions including COPD, asthma, lung cancer, and sleep disorders using advanced bronchoscopy and pulmonary function testing.', services: ['COPD Management', 'Asthma Treatment', 'Bronchoscopy', 'Sleep Study Lab', 'Lung Cancer Care', 'Pleural Disease', 'Pulmonary Rehabilitation', 'Interstitial Lung Disease'] },
  gastroenterology: { icon: <FiActivity />, name: 'Gastroenterology', color: '#f97316', desc: 'Our Gastroenterology department offers comprehensive care for digestive system conditions with advanced endoscopic procedures, hepatology services, and bariatric surgery.', services: ['Endoscopy', 'Colonoscopy', 'Liver Disease', 'Bariatric Surgery', 'Crohns Disease', 'Pancreatitis', 'Hepatitis Treatment', 'Colorectal Surgery'] },
  ent: { icon: <FaEye />, name: 'ENT', color: '#14b8a6', desc: 'Our ENT department provides comprehensive ear, nose, and throat care with advanced surgical capabilities including cochlear implants, skull base surgery, and functional endoscopic sinus surgery.', services: ['Cochlear Implants', 'Rhinoplasty', 'Tonsillectomy', 'Sinus Surgery', 'Hearing Loss Treatment', 'Thyroid Surgery', 'Head & Neck Surgery', 'Audiometry'] },
  urology: { icon: <FaTooth />, name: 'Urology', color: '#3b82f6', desc: 'Our Urology department uses the latest robotic and laparoscopic techniques for kidney, prostate, and bladder conditions providing minimally invasive options for faster recovery.', services: ['Robotic Prostatectomy', 'Kidney Stone Removal', 'Bladder Cancer', 'Urinary Incontinence', 'Male Infertility', 'Renal Transplant', 'Laparoscopic Surgery', 'TURP'] },
  nephrology: { icon: <GiKidneys />, name: 'Nephrology', color: '#6366f1', desc: 'Our Nephrology department provides comprehensive kidney care including dialysis, kidney transplantation, and management of all forms of kidney disease.', services: ['Hemodialysis', 'Peritoneal Dialysis', 'Kidney Transplant', 'CKD Management', 'Hypertension', 'Renal Biopsy', 'Glomerulonephritis', 'Electrolyte Disorders'] },
  emergency: { icon: <FaAmbulance />, name: 'Emergency Care', color: '#dc2626', desc: 'Our 24/7 Emergency department is a Level 1 trauma center equipped to handle all medical emergencies with specialized rapid response teams, resuscitation bays, and direct access to all surgical specialties.', services: ['Trauma Care', 'Cardiac Emergencies', 'Stroke Protocol', 'Burns Unit', 'Toxicology', 'Respiratory Distress', 'Pediatric Emergencies', 'ICU Support'] },
};

const DepartmentDetail = () => {
  const { id } = useParams();
  const dept = deptData[id];

  if (!dept) return (
    <div className="page-wrapper" style={{ textAlign: 'center', padding: '100px 24px' }}>
      <h2>Department not found</h2>
      <Link to="/departments" className="btn-primary" style={{ marginTop: 24, display: 'inline-flex' }}>Back to Departments</Link>
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="page-hero" style={{ background: `linear-gradient(135deg, ${dept.color}dd, ${dept.color}88)` }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/departments" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.8)', marginBottom: 16, fontSize: '0.9rem' }}>
              <FaArrowLeft /> Back to Departments
            </Link>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>{dept.icon}</div>
            <h1>{dept.name} Department</h1>
            <p>{dept.desc.substring(0, 120)}...</p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48, alignItems: 'start' }}>
          <div>
            <span className="section-label">Overview</span>
            <h2 className="section-title">About <span>{dept.name}</span></h2>
            <p style={{ color: 'var(--text-mid)', lineHeight: 1.8, marginBottom: 32 }}>{dept.desc}</p>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 20 }}>Our Services</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {dept.services.map(s => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: 'var(--light-bg)', borderRadius: 'var(--radius-md)', fontSize: '0.88rem', fontWeight: 500 }}>
                  <span style={{ color: dept.color, fontSize: '0.7rem' }}>●</span> {s}
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-lg)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 20, color: dept.color }}>Book Consultation</h3>
              <Link to="/appointments" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 12 }}>Book Appointment</Link>
              <a href="tel:+911234567890" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Call Now</a>
              <div style={{ marginTop: 20, padding: 16, background: 'var(--light-bg)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--text-light)' }}>
                <strong>Emergency?</strong> Call <a href="tel:108" style={{ color: '#dc2626', fontWeight: 700 }}>108</a> for immediate assistance.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentDetail;
