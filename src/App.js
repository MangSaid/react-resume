import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResumePage from "./pages/ResumePage";
import EditPage from "./pages/EditPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<ResumePage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
