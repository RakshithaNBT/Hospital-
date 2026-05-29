import React from 'react';
import { motion } from 'framer-motion';
import { FaWheelchair, FaStethoscope } from 'react-icons/fa';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        {/* ANIMATION TRACK CONTAINER */}
        <div className="animation-track-container">
          {/* Corridor track line */}
          <div className="corridor-line" />

          {/* WHEELCHAIR CONTAINER */}
          <motion.div
            className="wheelchair-wrapper"
            animate={{
              x: ['-200px', '200px'],
              y: [0, -4, 0, -4, 0, -4, 0, -4, 0],
              rotate: [0, 6, -3, 6, -3, 6, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1.7, // Total loop is 3.5s
            }}
          >
            <FaWheelchair className="wheelchair-icon" />
            <div className="wheel-spin-effect" />
          </motion.div>

          {/* STETHOSCOPE CONTAINER */}
          <motion.div
            className="stethoscope-wrapper"
            animate={{
              scale: [0, 0, 1.25, 1, 1.15, 1.02, 1.1, 1, 0],
              opacity: [0, 0, 1, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 3.5,
              ease: 'easeInOut',
              times: [0, 0.48, 0.55, 0.6, 0.65, 0.7, 0.75, 0.9, 1], // Syncs beautifully with wheelchair exit
              repeat: Infinity,
            }}
          >
            {/* Pulsating rings behind stethoscope representing heartbeat waves */}
            <div className="pulse-ring ring-1" />
            <div className="pulse-ring ring-2" />
            
            <div className="stethoscope-icon-box">
              <FaStethoscope className="stethoscope-icon" />
            </div>
          </motion.div>
        </div>

        {/* LOGO & BRANDING */}
        <motion.div
          className="loading-logo"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="loading-title">
            <span className="loading-brand">GlobalCare</span>
            <span className="loading-sub">Health Hospitals</span>
          </div>
        </motion.div>

        {/* ECG SIGNAL LINE */}
        <motion.div
          className="loading-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 400 60" className="ecg-line">
            <polyline
              points="0,30 60,30 80,5 100,55 120,30 160,30 180,10 200,50 220,30 280,30 300,8 320,52 340,30 400,30"
              fill="none"
              stroke="url(#ecgGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="ecgGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0077b6" />
                <stop offset="50%" stopColor="#00b4d8" />
                <stop offset="100%" stopColor="#00d4aa" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.p
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Advanced Healthcare For A Better Tomorrow
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
