import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/">
        Home 🏠
      </NavLink>
      <NavLink to="/2/1/34">Xiketic</NavLink>
      <NavLink to="/89/52/79">Dark Byzantium</NavLink>
      <NavLink to="/177/94/108">Popstar</NavLink>
    </nav>
  );
}
