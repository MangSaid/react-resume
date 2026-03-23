import React from "react";

function Skills({ skills }) {
  return (
    <section className="resume-section">
      <h3>Skills</h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
