import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <nav className="nav-bar">
      <NavLink exact path to="/">
        Home
      </NavLink>
      <NavLink to="/179/45/12">Red</NavLink>
      <NavLink to="/12/154/179">Blue</NavLink>
      <NavLink to="/90/110/64">Green</NavLink>
    </nav>
  );
}
