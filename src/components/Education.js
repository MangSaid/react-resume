import React from "react";

function Education({ schools }) {
  return (
    <section className="resume-section">
      <h3>Education</h3>
      {schools.map((school, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <strong>{school.degree}</strong>
            <span className="period">{school.period}</span>
          </div>
          <span className="institution">{school.institution}</span>
        </div>
      ))}
    </section>
  );
}

export default Education;
