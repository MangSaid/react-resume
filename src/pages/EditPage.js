import React, { useState, useEffect } from "react";
import localData from "../data/resumeData";
import { getResume, updateResume } from "../api/api";

function EditPage() {
  const [form, setForm] = useState(localData);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    getResume()
      .then((res) => setForm(res.data))
      .catch(() => console.log("Using local data for editing"));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("contact.")) {
      const field = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        contact: { ...prev.contact, [field]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("saving");
    updateResume(form)
      .then(() => setStatus("saved"))
      .catch(() => setStatus("error"))
      .finally(() => setTimeout(() => setStatus(null), 2000));
  };

  return (
    <div className="edit-page">
      <h2>Edit Resume</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
        <label>
          Title
          <input name="title" value={form.title} onChange={handleChange} />
        </label>
        <label>
          Email
          <input
            name="contact.email"
            value={form.contact.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone
          <input
            name="contact.phone"
            value={form.contact.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Location
          <input
            name="contact.location"
            value={form.contact.location}
            onChange={handleChange}
          />
        </label>
        <label>
          Summary
          <textarea
            name="summary"
            rows={4}
            value={form.summary}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={status === "saving"}>
          {status === "saving" ? "Saving..." : "Save to Backend"}
        </button>
        {status === "saved" && (
          <span className="status-msg success">Saved!</span>
        )}
        {status === "error" && (
          <span className="status-msg error">
            Failed to save (is backend running?)
          </span>
        )}
      </form>
    </div>
  );
}

export default EditPage;
