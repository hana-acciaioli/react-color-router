import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <NavLink to="/#a84232">Red</NavLink>
      <NavLink to="/:id">Blue</NavLink>
      <NavLink to="/:id">Green</NavLink>
    </nav>
  );
}
