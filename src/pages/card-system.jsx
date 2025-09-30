import React, { useState } from "react";
import "./card-system.css";

export default function CardSystem({ setRoute }) {
  const [value, setValue] = useState("");

  function pressKey(k) {
    setValue(prev => (prev + String(k)).replace(/^0+(\d)/, '$1'));
  }
  function pressAmount(amount) {
    // amount passed like 5.00, convert to simple display
    setValue(amount.toString());
  }
  function clearAll() { setValue(""); }
  function deleteOne() { setValue(prev => prev.slice(0, -1)); }

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
        <div className="left-panel">
          <div className="amount-buttons">
            <button onClick={() => pressAmount(5)}>€ 5.00</button>
            <button onClick={() => pressAmount(10)}>€ 10.00</button>
            <button onClick={() => pressAmount(20)}>€ 20.00</button>
            <button onClick={() => pressAmount(25)}>€ 25.00</button>
          </div>

          <div className="keypad-area">
            <div className="keypad">
              {[1,2,3,4,5,6,7,8,9,"0","00","."].map((key) => (
                <button key={key} onClick={() => pressKey(key)}>{key}</button>
              ))}
            </div>

            <div className="keypad-side">
              <button className="btn-clear" onClick={clearAll}>C</button>
              <button className="btn-delete" onClick={deleteOne}>⌫</button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: scan + actions */}
        <div className="right-panel">
          <div className="scan-row">
            <div className="scan-box">
              <p>SCAN DE NIEUWE CADEAUBON</p>
            </div>
            <div className="value-box">
              <div className="value-label">Bedrag</div>
              <div className="value-display">€ {value || "0.00"}</div>
            </div>
          </div>

          <div className="actions">
            <button className="btn-dashboard" onClick={() => setRoute('home')}>Naar Dashboard</button>
            <button className="btn-confirm">Bevestigen</button>
          </div>
        </div>
      </section>
    </main>
  );
}
