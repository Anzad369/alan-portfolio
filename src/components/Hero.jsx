import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-content"
      >
        <p className="location-tag">Kerala • Dubai </p>
        
        <h1 className="hero-title">
          ALAN<br/>THOMAS
        </h1>
        
        <p className="hero-bio">
          Digital Creator specializing in Luxury Real Estate and Wedding Storytelling. 
          Expert in Premiere Pro, FCP, and CapCut. Bridging the gap between cinematic 
          content and brand conversion.
        </p>

        <div className="hero-actions">
          {/* This button triggers the download */}
          <a 
            href="/Alan-Thomas-Resume.pdf" 
            download="Alan_Thomas_Resume.pdf"
            className="cv-button"
          >
            <span>Download CV</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
          
        </div>
      </motion.div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;