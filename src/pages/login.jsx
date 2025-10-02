import React, { useEffect } from 'react';
import './login.css';

export default function Login({ setRoute }) {
    // Listen for NFC scan events from Tauri
    useEffect(() => {
        let unlisten;
        (async () => {
            try {
                const { listen } = await import('@tauri-apps/api/event');
                unlisten = await listen('nfc-scanned', (event) => {
                    const uid = event.payload;
                    console.log('NFC tag scanned:', uid);
                    handleLogin(uid);
                });
            } catch (err) {
                console.log('Tauri event API not available (dev mode)', err);
            }
        })();

        return () => {
            if (unlisten && typeof unlisten.then === 'function') {
                unlisten.then(f => f && f());
            }
        };
    }, [setRoute]);

    // Handle login (NFC or mock)
    const handleLogin = async (uid) => {
        console.log('Login attempt with UID:', uid);
        
        // Always allow login for development - just navigate to home
        if (uid && uid.length > 0) {
            console.log('Login successful, navigating to dashboard');
            setRoute('home');
        } else {
            console.log('Login failed - invalid UID');
            alert('Login failed - invalid UID');
        }
    };

    // Mock NFC scan for development
    const mockNFCScan = () => {
        console.log('Mock NFC scan clicked');
        console.log('Current setRoute function:', setRoute);
        const mockUID = 'DEV_NFC_TAG_' + Date.now();
        console.log('Generated mock UID:', mockUID);
        handleLogin(mockUID);
    };

    return (
        <main className="login-page">
            <div className="login-wrapper">
                <img src="/Assen.webp" alt="Assen logo" className="login-logo" />

                <div className="title-group">
                    <h1 className="login-title luna">CADEAUBONNEN KASSASYSTEEM</h1>
                </div>

                <p className="login-sub">SCAN UW SLEUTEL OM IN TE LOGGEN</p>

                <div className="login-actions">
                    <button className="btn-nfc-mock" onClick={mockNFCScan}>🔑 Simuleer NFC Scan (Dev)</button>
                    <button className="btn-back" onClick={() => setRoute('home')}>Terug naar Hoofdmenu</button>
                </div>
            </div>
        </main>
    );
}