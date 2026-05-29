import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Cinematic Videography",
    desc: "Capturing high-end visual narratives for luxury real estate and premium events with a focus on lighting and composition."
  },
  {
    title: "Professional Editing",
    desc: "Seamless post-production workflow including color grading and sound design in Premiere Pro, FCP, and CapCut."
  },
  {
    title: "Social Strategy",
    desc: "Creating content that aligns with current algorithm shifts to maximize engagement and brand conversion."
  },
  {
    title: "Virtual Tours",
    desc: "Specialized 360° digital experiences for property showcases, a high-value skill perfected in the Dubai market."
  }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <motion.span 
        className="section-label"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Services
      </motion.span>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <div className="service-number">0{index + 1}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;