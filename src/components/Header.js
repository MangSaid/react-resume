import React from "react";

function Header({ name, title, contact }) {
  return (
    <header className="resume-header">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <div className="contact-info">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.location}</span>
        <span>{contact.linkedin}</span>
        <span>{contact.github}</span>
      </div>
    </header>
  );
}

export default Header;
