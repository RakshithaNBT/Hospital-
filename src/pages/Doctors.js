import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserMd, FaStar, FaSearch, FaFilter } from 'react-icons/fa';
import { FiClock, FiDollarSign } from 'react-icons/fi';
import './Doctors.css';

const allDoctors = [
  { id: 1, name: 'Dr. Arun Sharma', spec: 'Cardiology', exp: 22, rating: 4.9, fee: 1500, available: true, quals: 'MBBS, MD, DM (Cardiology)', lang: ['English', 'Hindi'] },
  { id: 2, name: 'Dr. Priya Mehta', spec: 'Neurology', exp: 18, rating: 4.8, fee: 1200, available: true, quals: 'MBBS, MD (Medicine), DM (Neurology)', lang: ['English', 'Hindi', 'Gujarati'] },
  { id: 3, name: 'Dr. Rahul Verma', spec: 'Orthopedics', exp: 15, rating: 4.9, fee: 1800, available: false, quals: 'MBBS, MS (Ortho), Fellowship (USA)', lang: ['English', 'Hindi'] },
  { id: 4, name: 'Dr. Sneha Kapoor', spec: 'Oncology', exp: 20, rating: 4.7, fee: 2000, available: true, quals: 'MBBS, MD, DM (Oncology)', lang: ['English', 'Hindi', 'Punjabi'] },
  { id: 5, name: 'Dr. Vikram Patel', spec: 'Pulmonology', exp: 12, rating: 4.8, fee: 1100, available: true, quals: 'MBBS, MD (Pulmonology)', lang: ['English', 'Gujarati'] },
  { id: 6, name: 'Dr. Ananya Singh', spec: 'Gynecology', exp: 16, rating: 4.9, fee: 1300, available: true, quals: 'MBBS, MS (Obstetrics & Gynecology)', lang: ['English', 'Hindi'] },
  { id: 7, name: 'Dr. Ravi Kumar', spec: 'Cardiology', exp: 25, rating: 4.8, fee: 2500, available: false, quals: 'MBBS, MD, DM (Cardiology), FACC', lang: ['English', 'Tamil', 'Hindi'] },
  { id: 8, name: 'Dr. Meera Nair', spec: 'Pediatrics', exp: 14, rating: 4.9, fee: 900, available: true, quals: 'MBBS, DCH, MD (Pediatrics)', lang: ['English', 'Malayalam', 'Hindi'] },
  { id: 9, name: 'Dr. Ajay Gupta', spec: 'Orthopedics', exp: 19, rating: 4.7, fee: 1600, available: true, quals: 'MBBS, MS, DNB (Ortho)', lang: ['English', 'Hindi'] },
  { id: 10, name: 'Dr. Kavitha Reddy', spec: 'Neurology', exp: 11, rating: 4.8, fee: 1100, available: true, quals: 'MBBS, MD, DM (Neurology)', lang: ['English', 'Telugu', 'Hindi'] },
  { id: 11, name: 'Dr. Sanjay Joshi', spec: 'Gastroenterology', exp: 17, rating: 4.6, fee: 1400, available: false, quals: 'MBBS, MD, DM (Gastroenterology)', lang: ['English', 'Hindi', 'Marathi'] },
  { id: 12, name: 'Dr. Pooja Agarwal', spec: 'Gynecology', exp: 13, rating: 4.9, fee: 1200, available: true, quals: 'MBBS, MS (Obs & Gynec)', lang: ['English', 'Hindi'] },
];

const specs = ['All', 'Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Pulmonology', 'Gynecology', 'Pediatrics', 'Gastroenterology'];

const Doctors = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [avail, setAvail] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filtered = allDoctors.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.spec.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'All' || d.spec === filter;
    const matchAvail = avail ? d.available : true;
    return matchSearch && matchFilter && matchAvail;
  });

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>Our Team</span>
            <h1>Expert Medical Specialists</h1>
            <p>500+ experienced doctors across 50+ specialities, committed to your health and well-being.</p>
          </motion.div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="doctors-filters">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-chips">
              {specs.map(s => (
                <button
                  key={s}
                  className={`filter-chip ${filter === s ? 'active' : ''}`}
                  onClick={() => setFilter(s)}
                >
                  {s}
                </button>
              ))}
            </div>
            <label className="avail-toggle">
              <input type="checkbox" checked={avail} onChange={e => setAvail(e.target.checked)} />
              <span>Available Today Only</span>
            </label>
          </div>

          <p className="results-count">{filtered.length} doctors found</p>

          {/* Doctors Grid */}
          <div className="doctors-grid">
            {filtered.map((doc, i) => (
              <motion.div
                key={doc.id}
                className="doc-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="doc-avatar-wrap">
                  <div className="doc-avatar"><FaUserMd /></div>
                  <span className={`doc-avail ${doc.available ? 'yes' : 'no'}`}>
                    {doc.available ? '● Available Today' : '● Next Available'}
                  </span>
                </div>
                <div className="doc-info">
                  <h3 className="doc-name">{doc.name}</h3>
                  <p className="doc-spec">{doc.spec}</p>
                  <p className="doc-quals">{doc.quals}</p>
                  <div className="doc-meta">
                    <span><FiClock /> {doc.exp} Years Exp</span>
                    <span><FaStar className="star-icon" /> {doc.rating}/5</span>
                  </div>
                  <div className="doc-langs">
                    {doc.lang.map(l => <span key={l} className="lang-tag">{l}</span>)}
                  </div>
                  <div className="doc-footer">
                    <div className="doc-fee">
                      <span className="fee-label">Consultation Fee</span>
                      <span className="fee-val">₹{doc.fee.toLocaleString()}</span>
                    </div>
                    <Link to="/appointments" className="book-btn">Book Now</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              <FaUserMd />
              <h3>No doctors found</h3>
              <p>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Doctors;
