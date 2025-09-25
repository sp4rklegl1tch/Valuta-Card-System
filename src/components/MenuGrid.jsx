import React from 'react';
import Card from './Card';

export default function MenuGrid({ items, onItemClick }){
  return (
    <section className="menu-grid kiosk-grid" role="navigation" aria-label="Hoofdmenu">
      {items.map(it => (
        <Card key={it.id} {...it} onClick={onItemClick} />
      ))}
    </section>
  );
}
