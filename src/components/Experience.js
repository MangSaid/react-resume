import React from "react";

function Experience({ jobs }) {
  return (
    <section className="resume-section">
      <h3>Experience</h3>
      {jobs.map((job, index) => (
        <div key={index} className="experience-item">
          <div className="experience-header">
            <div>
              <strong>{job.role}</strong>
              <span className="company"> — {job.company}</span>
            </div>
            <span className="period">{job.period}</span>
          </div>
          <ul>
            {job.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
