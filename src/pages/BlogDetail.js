import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaUserMd, FaClock } from 'react-icons/fa';

const postContent = {
  1: { title: 'Understanding Heart Disease: Risk Factors and Prevention Strategies', author: 'Dr. Arun Sharma', date: 'May 15, 2024', category: 'Cardiology', readTime: '5 min', body: `Cardiovascular diseases remain the leading cause of death globally, claiming approximately 17.9 million lives each year. However, up to 80% of these deaths can be prevented with the right lifestyle choices and medical care.\n\n**Key Risk Factors:**\n\nHigh blood pressure (hypertension) is the most common and dangerous risk factor. Even slightly elevated blood pressure forces the heart to work harder, damaging arterial walls over time. High cholesterol, particularly LDL cholesterol, contributes to plaque buildup in arteries.\n\nDiabetes significantly increases heart disease risk — high blood glucose damages blood vessels and nerves that control the heart. Smoking is one of the most preventable causes, as tobacco chemicals damage the heart and blood vessels.\n\n**Prevention Strategies:**\n\nRegular physical activity is one of the most powerful interventions. Aim for 150 minutes of moderate aerobic exercise weekly. A heart-healthy diet rich in vegetables, fruits, whole grains, and lean proteins while limiting saturated fats, trans fats, and sodium is crucial.\n\nRegular health screenings including blood pressure, cholesterol, and blood sugar checks help detect problems early. If you are over 40, schedule a comprehensive cardiac evaluation annually.` },
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = postContent[id] || postContent[1];

  return (
    <div className="page-wrapper">
      <div className="page-hero" style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.8)', marginBottom: 20, fontSize: '0.9rem' }}>
              <FaArrowLeft /> Back to Blog
            </Link>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>{post.category}</span>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}>{post.title}</h1>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 16, flexWrap: 'wrap', color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaUserMd /> {post.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaCalendar /> {post.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><FaClock /> {post.readTime} read</span>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48, alignItems: 'start', maxWidth: 1080, margin: '0 auto' }}>
          <motion.article
            style={{ background: 'white', borderRadius: 'var(--radius-xl)', padding: 40, boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          >
            {post.body.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: '1rem', lineHeight: 1.85, marginBottom: 20, fontWeight: para.startsWith('**') ? 700 : 400, color: para.startsWith('**') ? 'var(--text-dark)' : 'var(--text-mid)' }}>
                {para.replace(/\*\*/g, '')}
              </p>
            ))}
          </motion.article>

          <div style={{ position: 'sticky', top: 120 }}>
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 24, boxShadow: 'var(--shadow-md)', marginBottom: 20 }}>
              <h4 style={{ fontWeight: 700, marginBottom: 12 }}>Schedule a Consultation</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: 16 }}>Have questions about your heart health? Our cardiologists are available for consultation.</p>
              <Link to="/appointments" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Book Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
