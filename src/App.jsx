import React, { useState } from "react";
import "./App.css";
import Header from './components/Header';
import MenuGrid from './components/MenuGrid';
import CardSystem from './pages/card-system';
import CardSystemUse from './pages/card-system-use';
import Login from './pages/login';
import CardDeactivate from './pages/card-deactivate';

export default function App() {
  const [route, setRoute] = useState('home');
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
      // simple client-side navigation for 'new' and 'pay' routes
      if (item.id === 'new') {
        setRoute('card-system');
        return;
      }
      if (item.id === 'pay') {
        setRoute('card-system-use');
        return;
      }
      if (item.id === 'logout') {
        setRoute('login');
        return;
      }
      if (item.id === 'deact') {
        setRoute('CardDeactivate');
        return;
      }
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
      {route === 'home' && (
        <>
          <Header icon={<img src="/dashboard.svg" alt="Dashboard" className="header-icon"/>} />
          <MenuGrid items={menuItems} onItemClick={handleClick} />
        </>
      )}
      {route === 'card-system' && (
        <CardSystem setRoute={setRoute} />
      )}
      {route === 'card-system-use' && (
        <CardSystemUse setRoute={setRoute} />
      )}
      {route === 'login' && (
        <Login setRoute={setRoute} />
      )}
    </main>
  );
}