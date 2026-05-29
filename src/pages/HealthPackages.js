import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { FiHeart, FiActivity, FiStar } from 'react-icons/fi';
import './HealthPackages.css';

const packages = [
  {
    id: 'fullbody', name: 'Full Body Checkup', price: 2499, originalPrice: 3999, tests: 72,
    color: '#0077b6', tag: 'Most Popular',
    includes: ['Complete Blood Count', 'Liver Function Test', 'Kidney Function', 'Lipid Profile', 'Thyroid Profile', 'Blood Sugar (Fasting & PP)', 'Urine Routine', 'Chest X-Ray', 'ECG', 'Ultrasound Abdomen'],
  },
  {
    id: 'heart', name: 'Heart Care Package', price: 3999, originalPrice: 6500, tests: 45,
    color: '#ef4444', tag: 'Best Value',
    includes: ['Treadmill Test (TMT)', 'Echocardiography', 'Holter Monitoring', 'Lipid Profile Advanced', 'hs-CRP', 'Homocysteine', 'Coronary Risk Markers', 'ECG', 'Cardiologist Consultation', 'Diet Consultation'],
  },
  {
    id: 'diabetes', name: 'Diabetes Package', price: 1999, originalPrice: 3200, tests: 38,
    color: '#f59e0b', tag: 'Recommended',
    includes: ['HbA1c', 'Fasting Blood Sugar', 'Post-Prandial Sugar', 'Insulin Levels', 'Kidney Function', 'Lipid Profile', 'Urine Microalbumin', 'Eye Checkup', 'Foot Examination', 'Diabetologist Consultation'],
  },
  {
    id: 'women', name: "Women's Wellness", price: 2999, originalPrice: 4800, tests: 58,
    color: '#ec4899', tag: 'Comprehensive',
    includes: ['Pap Smear', 'Mammography', 'Bone Density Scan', 'Thyroid Profile', 'Hormonal Panel', 'Vitamin D & B12', 'Blood Count', 'Pelvic Ultrasound', 'Gynecologist Consultation', 'Nutritionist Session'],
  },
  {
    id: 'senior', name: 'Senior Citizen Package', price: 3499, originalPrice: 5500, tests: 85,
    color: '#7c3aed', tag: 'Comprehensive',
    includes: ['Full Body Scan', 'Cardiac Assessment', 'Bone Density (DEXA)', 'Eye & Ear Checkup', 'Memory Screening', 'Cancer Markers', 'Fall Risk Assessment', 'Pulmonary Function', 'Geriatric Consultation', 'Home Collection Available'],
  },
  {
    id: 'cancer', name: 'Cancer Screening', price: 4999, originalPrice: 8000, tests: 40,
    color: '#8b5cf6', tag: 'Life Saving',
    includes: ['PSA (Prostate)', 'CA-125 (Ovarian)', 'CEA (Colorectal)', 'AFP (Liver)', 'CA 19-9', 'Breast Ultrasound', 'CT Colonoscopy', 'Low Dose CT Chest', 'Dermatology Checkup', 'Oncologist Review'],
  },
];

const HealthPackages = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>Preventive Care</span>
            <h1>Health Packages</h1>
            <p>Comprehensive health checkup packages designed by our expert medical team for every life stage.</p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: 56 }}>
            <span className="section-label">Why Get Checked?</span>
            <h2 className="section-title">Prevention Is Better <span>Than Cure</span></h2>
            <p className="section-subtitle">Early detection saves lives. Our packages are designed for comprehensive health monitoring at every stage of life.</p>
          </div>

          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                className={`pkg-full-card ${selected === pkg.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="pkgf-header" style={{ background: `linear-gradient(135deg, ${pkg.color}cc, ${pkg.color}99)` }}>
                  <div className="pkgf-tag">{pkg.tag}</div>
                  <h3 className="pkgf-name">{pkg.name}</h3>
                  <div className="pkgf-tests">{pkg.tests}+ Tests & Consultations</div>
                  <div className="pkgf-price-wrap">
                    <span className="pkgf-price">₹{pkg.price.toLocaleString()}</span>
                    <span className="pkgf-original">₹{pkg.originalPrice.toLocaleString()}</span>
                    <span className="pkgf-save">Save {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%</span>
                  </div>
                </div>

                <div className="pkgf-body">
                  <div className="pkgf-includes">
                    {pkg.includes.slice(0, selected === pkg.id ? pkg.includes.length : 5).map(item => (
                      <div key={item} className="pkgf-item">
                        <FaCheckCircle /> {item}
                      </div>
                    ))}
                    {selected !== pkg.id && pkg.includes.length > 5 && (
                      <button className="show-more" onClick={() => setSelected(pkg.id)}>
                        +{pkg.includes.length - 5} more tests
                      </button>
                    )}
                    {selected === pkg.id && (
                      <button className="show-more" onClick={() => setSelected(null)}>Show Less</button>
                    )}
                  </div>

                  <Link to="/appointments" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 16, background: pkg.color }}>
                    Book This Package <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pkg-home-collection">
            <FiHeart className="phc-icon" />
            <div>
              <h3>Home Sample Collection Available</h3>
              <p>We come to you. Book a home collection for most packages with no extra cost.</p>
            </div>
            <Link to="/appointments" className="btn-primary">Schedule Home Visit</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthPackages;
