import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar items-center p-4">
        <p className="logo text-black font-bold text-4xl">Logo</p>
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link p-4">Dashboard</Link></li>
          <li><Link to="/" className="nav-link">Project</Link></li>
          <li><Link to="/" className="nav-link">Teams</Link></li>
          <li><Link to="/" className="nav-link">Analytics</Link></li>
          <li><Link to="/" className="nav-link">Messages</Link></li>
          <li><Link to="/" className="nav-link">Integrations</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
