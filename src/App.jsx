import React from "react";
import "./App.css";

export default function App() {
  const menuItems = [
  { id: "new", label: "Nieuwe Cadeaubon", icon: <img src="/creditcard-plus.svg" alt="Nieuwe" />, className: "card-yellow", cmd: "open_new_voucher" },
    { id: "pay", label: "Betaal met bon", icon: <img src="/creditcard-hand.svg" alt="Betaal" />, className: "card-green", cmd: "pay_with_voucher" },
    { id: "off", label: "Kassa Uitzetten", icon: <img src="/off-button.svg" alt="Uit" />, className: "card-gray", cmd: "shutdown_kassa" }, 
    { id: "check", label: "Controleer Cadeaubon", icon: <img src="/creditcard-vinkje.svg" alt="check" />, className: "card-orange", cmd: "check_voucher" },
    { id: "deact", label: "Cadeaubon Deactiveren", icon: <img src="/creditcard-min.svg" alt="Deactiveren" />, className: "card-red", cmd: "deactivate_voucher" },
    { id: "logout", label: "Uitloggen", icon: <img src="/logout.svg" alt="Uitloggen" />, className: "card-gray2", cmd: "logout" },
  ];

  async function handleClick(item) {
    // voorbeeld: probeer een Tauri-invoke aan te roepen; als het niet bestaat, toon een alert
    try {
      if (invoke) {
        // Let op: dit roept commando's aan die je in Rust/Tauri moet implementeren.
        const res = await invoke(item.cmd);
        // teruggegeven waarde laten zien (optioneel)
        if (res) {
          alert(String(res));
        }
      } else {
        alert(item.label);
      }
    } catch (err) {
      console.error("invoke error:", err);
      // fallback: laat de actie zien
      alert(`${item.label} (invoke faalde of is niet geïmplementeerd)\n${err?.toString?.() || ""}`);
    }
  }
  return (
    <main className="app-container kiosk">
      <header className="kiosk-header">
        <div className="brand-left">
          <img src="/Assen.webp" alt="Assen logo" className="brand-logo no-box" onError={(e)=>{e.currentTarget.style.display='none'}} />
        </div>
        <div className="header-center">
          <div className="main-title"><img src="/dashboard.svg" alt="Dashboard" className="header-icon"/>Hoofdmenu</div>
        </div>
        <div className="brand-right">
          <div className="sub-title luna">Cadeaubonnen Kassasysteem</div>
        </div>
      </header>

      <section className="menu-grid kiosk-grid" role="navigation" aria-label="Hoofdmenu">
          {menuItems.map((it) => (
            <button
              key={it.id}
              className={`card ${it.className}`}
              onClick={() => handleClick(it)}
              aria-label={it.label}
            >
              <div className="card-icon" aria-hidden>{it.icon}</div>
              <div className="card-label">{it.label}</div>
            </button>
          ))}
      </section>

    </main>
  );
}
