import React, { useState } from "react";
import "./App.css";
import Header from './components/Header';
import MenuGrid from './components/MenuGrid';
import CardSystem from './pages/card-system';
import CardSystemUse from './pages/card-system-use';
import Login from './pages/login';
import CardDeactivate from './pages/card-deactivate';
import DashboardPage from './pages/dashboard';

export default function App() {
    const [route, setRoute] = useState('login');

    const menuItems = [
        { id: "new", label: "Nieuwe Cadeaubon", icon: <img src="/creditcard-plus.svg" alt="Nieuwe" />, className: "card-yellow", cmd: "open_new_voucher" },
        { id: "pay", label: "Betaal met bon", icon: <img src="/creditcard-hand.svg" alt="Betaal" />, className: "card-green", cmd: "pay_with_voucher" },
        { id: "off", label: "Kassa Uitzetten", icon: <img src="/off-button.svg" alt="Uit" />, className: "card-gray", cmd: "shutdown_kassa" },
        { id: "check", label: "Controleer Cadeaubon", icon: <img src="/creditcard-vinkje.svg" alt="check" />, className: "card-orange", cmd: "check_voucher" },
        { id: "deact", label: "Cadeaubon Deactiveren", icon: <img src="/creditcard-min.svg" alt="Deactiveren" />, className: "card-red", cmd: "deactivate_voucher" },
        { id: "logout", label: "Uitloggen", icon: <img src="/logout.svg" alt="Uitloggen" />, className: "card-gray2", cmd: "logout" },
    ];

    async function handleClick(item) {
        try {
            if (item.id === 'new') { setRoute('card-system'); return; }
            if (item.id === 'pay') { setRoute('card-system-use'); return; }
            if (item.id === 'deact') { setRoute('card-deactivate'); return; }
            if (item.id === 'logout') { setRoute('login'); return; }

            // Fallback: try to call a Tauri invoke if available (non-blocking)
            if (typeof window !== 'undefined' && window.invoke) {
                const res = await window.invoke(item.cmd);
                if (res) alert(String(res));
            } else {
                alert(item.label);
            }
        } catch (err) {
            console.error('invoke error:', err);
            alert(`${item.label} (actie faalde)
${err?.toString?.() || ''}`);
        }
    }

    return (
        <main className="app-container kiosk">
            {route === 'login' && (
                <Login setRoute={setRoute} />
            )}

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

            {route === 'card-deactivate' && (
                <CardDeactivate setRoute={setRoute} />
            )}
        </main>
    );
}