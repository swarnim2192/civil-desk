// src/app/page.tsx
'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main>
      <motion.div
  className="shine-overlay"
  initial={{ opacity: 0 }}
  animate={{ opacity: [0, 1, 0] }}
  transition={{ duration: 1.8, ease: 'easeInOut' }}
/>



      <section className="hero">
        {/* Animated background image */}
        <motion.div
          className="hero-bg"
          initial={{ opacity: 0, scale: 1.04, filter: 'blur(2px)' }}
          animate={{ opacity: 1, scale: 1.0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          aria-hidden="true"
        />

        {/* Readability overlay */}
        <div className="hero-overlay" aria-hidden="true" />

        {/* Centered content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
        >
          <h1 className="hero-title">Build. Track. Deliver.</h1>
          <p className="hero-subtitle">
            Daily progress, budgets, labor &amp; materials in one place.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="/dashboard">Open Dashboard</a>
            <a className="btn btn-ghost" href="/#projects">View Projects</a>
          </div>
          {/* Tracker note removed */}
        </motion.div>
      </section>
    </main>
  );
}
