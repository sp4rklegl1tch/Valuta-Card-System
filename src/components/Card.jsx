import React from 'react';
import './Card.css';

export default function Card(props) {
  const { id, label, icon, className, onClick } = props;
  return (
    <button className={`card ${className}`} aria-label={label} onClick={() => onClick && onClick(props)}>
      <div className="card-icon" aria-hidden>{icon}</div>
      <div className="card-label">{label}</div>
    </button>
  );
}
