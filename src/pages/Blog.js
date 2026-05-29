import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaTag, FaArrowRight, FaCalendar, FaUserMd } from 'react-icons/fa';
import './Blog.css';

const posts = [
  { id: 1, title: 'Understanding Heart Disease: Risk Factors and Prevention Strategies', category: 'Cardiology', date: 'May 15, 2024', author: 'Dr. Arun Sharma', readTime: '5 min', excerpt: 'Cardiovascular diseases remain the leading cause of death globally. Learn about the key risk factors and how lifestyle modifications can dramatically reduce your risk.', tag: 'Health Tips' },
  { id: 2, title: 'The Role of Early Detection in Cancer Survival Rates', category: 'Oncology', date: 'May 10, 2024', author: 'Dr. Sneha Kapoor', readTime: '7 min', excerpt: 'Early cancer detection can increase survival rates by up to 90%. Discover the screening tests recommended for different age groups and risk profiles.', tag: 'Cancer Care' },
  { id: 3, title: 'Joint Replacement Surgery: What You Need to Know in 2024', category: 'Orthopedics', date: 'May 5, 2024', author: 'Dr. Rahul Verma', readTime: '6 min', excerpt: 'Modern robotic joint replacement offers shorter recovery times, better accuracy, and longer-lasting results. A comprehensive guide for patients considering surgery.', tag: 'Orthopedics' },
  { id: 4, title: 'Managing Type 2 Diabetes: Beyond Medication', category: 'Endocrinology', date: 'April 28, 2024', author: 'Dr. Priya Mehta', readTime: '8 min', excerpt: 'Diabetes management goes far beyond pills. Discover how diet, exercise, sleep, and stress management can dramatically improve blood sugar control.', tag: 'Diabetes' },
  { id: 5, title: 'Why International Patients Choose India for Medical Tourism', category: 'Medical Tourism', date: 'April 20, 2024', author: 'GlobalCare Team', readTime: '4 min', excerpt: 'India has become one of the world\'s top medical tourism destinations. Explore the key advantages: world-class doctors, cutting-edge technology, and significant cost savings.', tag: 'Medical Tourism' },
  { id: 6, title: "Maternal Health: Preparing for a High-Risk Pregnancy", category: 'Gynecology', date: 'April 15, 2024', author: 'Dr. Ananya Singh', readTime: '6 min', excerpt: 'High-risk pregnancies require specialized monitoring and care. Learn what conditions classify as high-risk and how our maternal-fetal medicine team supports you.', tag: "Women's Health" },
];

const categories = ['All', 'Cardiology', 'Oncology', 'Orthopedics', 'Medical Tourism', "Women's Health", 'Diabetes'];

const Blog = () => {
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = posts.filter(p => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = cat === 'All' || p.category === cat || p.tag === cat;
    return matchSearch && matchCat;
  });

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.8)', justifyContent: 'center' }}>Medical Knowledge</span>
            <h1>Health Blog & News</h1>
            <p>Expert medical insights, health tips, and the latest healthcare news from our specialist team.</p>
          </motion.div>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="container">
          {/* Filters */}
          <div className="blog-filters">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search articles..." value={search} onChange={e => setSearch(e.target.value)} className="search-input" />
            </div>
            <div className="filter-chips">
              {categories.map(c => (
                <button key={c} className={`filter-chip ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="blog-grid">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="blog-card-img">
                  <div className="blog-img-placeholder">
                    <FaUserMd />
                    <span>{post.category}</span>
                  </div>
                  <div className="blog-tag"><FaTag /> {post.tag}</div>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span><FaCalendar /> {post.date}</span>
                    <span>· {post.readTime} read</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-author"><FaUserMd /> {post.author}</span>
                    <Link to={`/blog/${post.id}`} className="blog-read-more">Read More <FaArrowRight /></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 24px', color: 'var(--text-light)' }}>
              <h3>No articles found</h3>
              <p>Try a different search term or category</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
