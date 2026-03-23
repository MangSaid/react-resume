import React from "react";

function AboutPage() {
  return (
    <div className="about-page">
      <h2>About This App</h2>
      <p>
        A React resume application that connects to a backend API for persistent
        data storage.
      </p>
      <h3>API Endpoints</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>/api/resume</td>
            <td>Fetch resume data</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>/api/resume</td>
            <td>Update resume data</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/api/experience</td>
            <td>List experience entries</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/api/experience</td>
            <td>Add experience entry</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>/api/experience/:id</td>
            <td>Delete experience entry</td>
          </tr>
        </tbody>
      </table>
      <p>
        Set <code>REACT_APP_API_URL</code> environment variable to change the
        backend URL (defaults to <code>http://localhost:8080/api</code>).
      </p>
    </div>
  );
}

export default AboutPage;
