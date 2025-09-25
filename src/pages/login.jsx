import React from 'react';
import './login.css';

export default function Login({ setRoute }) {
    return (
        <main className="login-page">
            <header className="login-header">
                <img src="/Assen.webp" alt="Assen logo" className="login-logo" />
                <h1 className="login-title">CADEAUBONNEN KASSASYSTEEM</h1>
                <p className="login-sub">SCAN UW SLEUTEL OM IN TE LOGGEN</p>
            </header>

            <section className="login-body">
                <div className="login-box">
                    <p className="login-instruction">Houd uw sleutel tegen de reader</p>
                    <div className="login-actions">
                        <button className="btn-back" onClick={() => setRoute('home')}>Terug naar Hoofdmenu</button>
                    </div>
                </div>
            </section>
        </main>
    );
}