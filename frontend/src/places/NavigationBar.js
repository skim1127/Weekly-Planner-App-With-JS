import React from "react";
import { Link } from 'react-router-dom'
import '../css/NavigationBar.css'

// Render a navigation bar
export default function NavigationBar() {
  return (
    <nav>
      <ul className="nav-container">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/profile">My Profile</Link>
        </li>
        <li>
            <Link to="/calendar">30-Day Calendar</Link>
        </li>
        <li>
            <Link to="/checklists">My Checklists</Link>
        </li>
      </ul>
    </nav>
  );
}