// import header

// ADD BUTTONS
    // - new-card
    // - check-card
    // - use-card
    // - deactivate-card
    // - turn-off
    // - logout

import React from "react";
import "./dashboard.css";
import Header from '../components/Header';
import MenuGrid from '../components/MenuGrid';

// DashboardPage is a presentational page. Navigation is handled by the root App.
export default function DashboardPage({ onItemClick }) {
  const menuItems = [
    { id: "new", label: "Nieuwe Cadeaubon", icon: <img src="/creditcard-plus.svg" alt="Nieuwe" />, className: "card-yellow", cmd: "open_new_voucher" },
    { id: "pay", label: "Betaal met bon", icon: <img src="/creditcard-hand.svg" alt="Betaal" />, className: "card-green", cmd: "pay_with_voucher" },
    { id: "off", label: "Kassa Uitzetten", icon: <img src="/off-button.svg" alt="Uit" />, className: "card-gray", cmd: "shutdown_kassa" },
    { id: "check", label: "Controleer Cadeaubon", icon: <img src="/creditcard-vinkje.svg" alt="check" />, className: "card-orange", cmd: "check_voucher" },
    { id: "deact", label: "Cadeaubon Deactiveren", icon: <img src="/creditcard-min.svg" alt="Deactiveren" />, className: "card-red", cmd: "deactivate_voucher" },
    { id: "logout", label: "Uitloggen", icon: <img src="/logout.svg" alt="Uitloggen" />, className: "card-gray2", cmd: "logout" },
  ];

  return (
    <main className="app-container kiosk">
      <Header icon={<img src="/dashboard.svg" alt="Dashboard" className="header-icon"/>} />
      <MenuGrid items={menuItems} onItemClick={onItemClick} />
    </main>
  );
}
