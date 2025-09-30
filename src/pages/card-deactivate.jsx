import React from "react";
import "./card-deactivate.css";

export default function CardDeactivate({ setRoute }) {
  return (
    <main className="deact-app deact-kiosk">
      <header className="deact-kiosk-header">
        <div className="deact-brand-left">
          <img src="/Assen.webp" className="deact-brand-logo no-box" alt="logo" />
        </div>

        <div className="deact-header-center">
          <div className="deact-main-title">Cadeaubon Deactiveren</div>
        </div>

        <div className="deact-brand-right">
          <div className="deact-sub-title luna">Cadeaubonnen Kassasysteem</div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <section className="deact-card-system-grid">
        <div className="deact-left-panel">
          <h2 className="deact-left-title">Cadeaubon deactiveren</h2>

          <div className="deact-scan-row">
            <div className="deact-scan-box">
              <p>SCAN DE CADEAUBON</p>
            </div>
          </div>

          <div className="deact-actions">
            <button
              className="deact-btn-dashboard"
              onClick={() => setRoute("home")}
            >
              Naar Dashboard
            </button>
            <button className="deact-btn-confirm">Bevestigen</button>
          </div>
        </div>

        {/* ---------- RIGHT SIDE ---------- */}
        <div className="deact-right-panel">
          <h2 className="deact-title-red">LET OP!!!</h2>

          <p>
            Cadeaubon die gedeactiveerd worden zullen later door de administratie
            <span className="deact-highlight-red"> verwijderd </span> worden.
          </p>

          <p>
            Het gaat hier om cadeaubonnen die foutief/per ongeluk
            <span className="deact-highlight-green"> gedeactiveerd </span> zijn.
          </p>

          <h3 className="deact-title-procedure">PROCEDURE</h3>

          <p>
            Na het deactiveren de cadeaubon apart leggen totdat deze weer
            vrijgegeven is voor de verkoop.
          </p>
        </div>
      </section>
    </main>
  );
}
