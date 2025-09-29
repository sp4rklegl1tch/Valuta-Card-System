// CardDeactivate.jsx
// This component renders the "Cadeaubon Deactiveren" screen.
// It has two panels: left (scan + buttons) and right (warning text).

import React from "react";
import "./card-deactivate.css"; // Import the style sheet

export default function CardDeactivate({ setRoute }) {
  return (
    <main className="app-container kiosk">
      {/* ===== HEADER ===== */}
      <header className="kiosk-header">
        {/* Left: Logo + brand name */}
        <div className="brand-left">
          <img src="/Assen.webp" alt="Assen Bloeit logo" />
          <span className="brand-text">
            ASSEN <strong>BLOEIT</strong>
          </span>
        </div>

        {/* Right: Red system title */}
        <div className="header-right">
          <span className="system-title">CADEAUBONNEN KASSASYSTEEM</span>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <section className="card-system-grid">
        {/* ---------- LEFT SIDE ---------- */}
        <div className="left-panel">
          {/* Section title */}
          <h2 className="left-title">Cadeaubon deactiveren</h2>

          {/* Big scan area box */}
          <div className="scan-row">
            <div className="scan-box">
              <p>SCAN DE CADEAUBON</p>
            </div>
          </div>

          {/* Action buttons under scan area */}
          <div className="actions">
            <button
              className="btn-dashboard"
              onClick={() => setRoute("home")} // Go back to dashboard
            >
              Naar Dashboard
            </button>
            <button className="btn-confirm">Bevestigen</button>
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="right-panel">
          {/* Red warning heading */}
          <h2 className="title-red">LET OP!!!</h2>

          {/* Explanation paragraph */}
          <p>
            Cadeaubon die gedeactiveerd worden zullen later door de administratie
            <span className="highlight-red"> verwijderd </span> worden.
          </p>

          {/* Secondary paragraph with green highlight */}
          <p>
            Het gaat hier om cadeaubonnen die foutief/per ongeluk
            <span className="highlight-green"> gedeactiveerd </span> zijn.
          </p>

          {/* Procedure heading */}
          <h3 className="title-procedure">PROCEDURE</h3>

          {/* Final procedure text */}
          <p>
            Na het deactiveren de cadeaubon apart leggen totdat deze weer
            vrijgegeven is voor de verkoop.
          </p>
        </div>
      </section>
    </main>
  );
}
