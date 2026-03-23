import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Summary from "../components/Summary";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import localData from "../data/resumeData";
import { getResume } from "../api/api";

function ResumePage() {
  const [resumeData, setResumeData] = useState(localData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResume()
      .then((res) => setResumeData(res.data))
      .catch(() => {
        // Backend unavailable — fall back to local data
        console.log("Using local resume data (backend not available)");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading...</p>;

  return (
    <div className="resume">
      <Header
        name={resumeData.name}
        title={resumeData.title}
        contact={resumeData.contact}
      />
      <Summary text={resumeData.summary} />
      <Experience jobs={resumeData.experience} />
      <Skills skills={resumeData.skills} />
      <Education schools={resumeData.education} />
    </div>
  );
}

export default ResumePage;
