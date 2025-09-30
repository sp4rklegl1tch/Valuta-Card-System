import React from 'react';
import './login.css';

export default function Login({ setRoute }) {
    return (
        <main className="login-page">
            <div className="login-wrapper">
                <img src="/Assen.webp" alt="Assen logo" className="login-logo" />

                <div className="title-group">
                    <h1 className="login-title luna">CADEAUBONNEN KASSASYSTEEM</h1>
                </div>

                <p className="login-sub">SCAN UW SLEUTEL OM IN TE LOGGEN</p>

                <div className="login-actions">
                    <button className="btn-back" onClick={() => setRoute('home')}>Terug naar Hoofdmenu</button>
                </div>
            </div>
        </main>
    );
}