import React from 'react';

const Experience = () => {
  const jobs = [
    { date: "Dec 2024 - Present", role: "Content Creation Specialist", company: "Eventor Weddings" },
    { date: "July 2024 - Dec 2024", role: "Creative Media Associate", company: "Karadan Lands, Dubai" },
    { date: "June 2021 - June 2024", role: "Content Production", company: "Eventor Weddings" }
  ];

  return (
    <section className="experience-section">
      <h2 className="section-label">Experience</h2>
      <div className="exp-list">
        {jobs.map((job, i) => (
          <div key={i} className="exp-row">
            <span className="exp-date">{job.date}</span>
            <div className="exp-info">
              <h3>{job.role}</h3>
              <p>{job.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;