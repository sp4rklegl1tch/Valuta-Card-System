import React from 'react';
import './Header.css';

export default function Header({ logo='/Assen.webp', title='Hoofdmenu', subtitle='Cadeaubonnen Kassasysteem', icon }){
  return (
    <header className="kiosk-header">
      <div className="brand-left"><img src={logo} className="brand-logo no-box" alt="logo"/></div>
      <div className="header-center"><div className="main-title">{icon}{title}</div></div>
  <div className="brand-right"><div className="sub-title luna">{subtitle}</div></div>
    </header>
  );
}
