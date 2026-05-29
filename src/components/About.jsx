import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-10 grid md:grid-cols-2 gap-12 border-b border-zinc-900">
      <div>
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8">Objective [cite: 6]</h2>
        <p className="text-2xl leading-snug text-zinc-200">
          I am a detail-oriented Digital Creator with expertise in Photography, Videography, and Post-Production[cite: 7]. 
          My goal is to produce innovative content that enhances brand visibility and drives engagement[cite: 8].
        </p>
      </div>
      <div className="space-y-6">
        <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Core Expertise [cite: 56]</h2>
        <ul className="grid grid-cols-2 gap-4 text-sm text-zinc-400">
          <li>• Events Video Production [cite: 63]</li>
          <li>• Property Video Production [cite: 64]</li>
          <li>• 360-Degree Virtual Tours [cite: 65]</li>
          <li>• Social Media Strategy [cite: 60]</li>
          <li>• Brand Consistency [cite: 61]</li>
          <li>• Lighting Techniques [cite: 66]</li>
        </ul>
      </div>
    </section>
  );
};

export default About;