import React from "react";
import "./card-system.css"; // or make a new CSS file for this page

export default function CardSystem() {
  return (
    <main className="app-container kiosk">
      {/* HEADER */}
      <header className="kiosk-header">
        <div className="brand-left">
          <img src="/Assen.webp" alt="Assen logo" className="brand-logo no-box" />
        </div>
        <div className="header-center">
          <div className="main-title">Cadeaubonnen Kassasysteem</div>
        </div>
        <div className="brand-right">
          <div className="sub-title luna">Nieuwe cadeaubon registreren</div>
        </div>
      </header>

      {/* MAIN FLEX GRID */}
      <section className="card-system-grid">
        {/* LEFT SIDE: keypad + amounts */}
        <div className="left-panel">
          <div className="amount-buttons">
            <button>€ 5.00</button>
            <button>€ 10.00</button>
            <button>€ 20.00</button>
            <button>€ 25.00</button>
          </div>

          <div className="keypad">
            {[1,2,3,4,5,6,7,8,9,"0","00","."].map((key) => (
              <button key={key}>{key}</button>
            ))}
            <button className="btn-clear">C</button>
            <button className="btn-enter">⏎</button>
          </div>
        </div>

        {/* RIGHT SIDE: scan + actions */}
        <div className="right-panel">
          <div className="scan-box">
            <p>SCAN DE NIEUWE CADEAUBON</p>
          </div>
          <div className="actions">
            <button className="btn-dashboard">Naar Dashboard</button>
            <button className="btn-confirm">Bevestigen</button>
          </div>
        </div>
      </section>
    </main>
  );
}
