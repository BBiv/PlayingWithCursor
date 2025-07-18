import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bottom-nav">
      <Link to="/calendar" className={`nav-tab ${isActive('/calendar') ? 'active' : ''}`}>
        <span>Calendar</span>
      </Link>
      <Link to="/todo" className={`nav-tab ${isActive('/todo') ? 'active' : ''}`}>
        <span>ToDo</span>
      </Link>
      <Link to="/" className={`nav-tab ${isActive('/') || isActive('/profile') ? 'active' : ''}`}>
        <span>Profile</span>
      </Link>
    </div>
  );
}

export default BottomNav; 