import React from "react";

function Summary({ text }) {
  return (
    <section className="resume-section">
      <h3>Summary</h3>
      <p>{text}</p>
    </section>
  );
}

export default Summary;
