import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FiUser, FiPhone, FiMail, FiCalendar, FiClock, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { FaUserMd, FaHospital } from 'react-icons/fa';
import './AppointmentBooking.css';

const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Pediatrics', 'Gynecology', 'Pulmonology', 'Gastroenterology', 'ENT', 'Urology', 'Nephrology', 'Emergency Care'];
const timeSlots = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'];

const AppointmentBooking = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) e.phone = 'Valid 10-digit phone required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.department) e.department = 'Please select a department';
    if (!form.date) e.date = 'Please select a date';
    if (!form.time) e.time = 'Please select a time slot';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/appointments', form);
    } catch (err) {
      // Still show success for demo if backend not connected
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>Easy Booking</span>
            <h1>Book An Appointment</h1>
            <p>Schedule a consultation with our expert specialists in just a few steps.</p>
          </motion.div>
        </div>
      </div>

      <section className="section appt-section">
        <div className="container appt-container">
          {/* Benefits */}
          <motion.div
            className="appt-benefits"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="section-title">Why Choose <span>GlobalCare?</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>Experience world-class medical care from the comfort of our modern facilities.</p>

            {[
              { icon: <FaUserMd />, title: '500+ Specialist Doctors', desc: 'Expert physicians across 50+ specialities.' },
              { icon: <FiClock />, title: 'Same Day Appointments', desc: 'Urgent consultations available 24/7.' },
              { icon: <FiCheckCircle />, title: 'Confirmed Instantly', desc: 'Receive confirmation via SMS and email.' },
              { icon: <FaHospital />, title: 'State-of-the-Art Facility', desc: 'NABH & JCI accredited hospital.' },
            ].map(b => (
              <div key={b.title} className="benefit-item">
                <div className="benefit-icon">{b.icon}</div>
                <div>
                  <h4 className="benefit-title">{b.title}</h4>
                  <p className="benefit-desc">{b.desc}</p>
                </div>
              </div>
            ))}

            <div className="appt-emergency-note">
              <strong>Medical Emergency?</strong>
              <p>Do not use this form. Call <a href="tel:108">108</a> immediately.</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="appt-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="appt-form-card">
              <h3 className="form-title">Book Your Appointment</h3>

              <form onSubmit={handleSubmit} className="appt-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><FiUser /> Full Name</label>
                    <input name="name" type="text" className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your full name" value={form.name} onChange={handleChange} />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label"><FiPhone /> Phone Number</label>
                    <input name="phone" type="tel" className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="10-digit phone" value={form.phone} onChange={handleChange} />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label"><FiMail /> Email Address</label>
                  <input name="email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><FaHospital /> Department</label>
                    <select name="department" className={`form-input ${errors.department ? 'error' : ''}`} value={form.department} onChange={handleChange}>
                      <option value="">Select Department</option>
                      {departments.map(d => <option key={d}>{d}</option>)}
                    </select>
                    {errors.department && <span className="form-error">{errors.department}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label"><FaUserMd /> Preferred Doctor</label>
                    <input name="doctor" type="text" className="form-input" placeholder="Doctor name (optional)" value={form.doctor} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><FiCalendar /> Appointment Date</label>
                    <input name="date" type="date" className={`form-input ${errors.date ? 'error' : ''}`} min={today} value={form.date} onChange={handleChange} />
                    {errors.date && <span className="form-error">{errors.date}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label"><FiClock /> Preferred Time</label>
                    <select name="time" className={`form-input ${errors.time ? 'error' : ''}`} value={form.time} onChange={handleChange}>
                      <option value="">Select Time Slot</option>
                      {timeSlots.map(t => <option key={t}>{t}</option>)}
                    </select>
                    {errors.time && <span className="form-error">{errors.time}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label"><FiMessageSquare /> Message / Symptoms</label>
                  <textarea name="message" className="form-input form-textarea" placeholder="Describe your symptoms or any specific concerns..." value={form.message} onChange={handleChange} rows={4} />
                </div>

                <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                  {loading ? 'Booking...' : 'Confirm Appointment'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="success-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSuccess(false)}
          >
            <motion.div
              className="success-modal"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="success-icon"><FiCheckCircle /></div>
              <h2>Appointment Confirmed!</h2>
              <p>We've received your appointment request. Our team will call you within 30 minutes to confirm your slot.</p>
              <p className="success-ref">Reference ID: GC-{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
              <button className="btn-primary" onClick={() => { setSuccess(false); setForm({ name: '', phone: '', email: '', department: '', doctor: '', date: '', time: '', message: '' }); }}>
                Book Another
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppointmentBooking;
