import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// Components/Navbar.jsx
export default function Navbar({ currentUser, onLogout, onShowSidebar, isloggedIn }) {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black border-bottom sticky-top px-3">
      <div className="container-fluid">
        {/* Mobile Toggle */}
        <button className="btn btn-light d-md-none me-2" onClick={onShowSidebar}>
          <i className="bi bi-list"></i>
        </button>

        <a className="navbar-brand fw-bold text-warning" href="/">STORE MARKET</a>

        <div className="ms-auto d-flex align-items-center gap-3">
          {/* Role Indicator Badge */}
          <span className="badge rounded-pill bg-light text-dark border d-none d-sm-inline-block">
            {currentUser?.role === 'owner' ? 'Store Owner' : 'Visitor'}
          </span>
          
          <div className="vr d-none d-sm-block"></div>

          {/* Functional Logout Button */}
          {isloggedIn && (
          <button 
            className="btn btn-outline-danger btn-sm rounded-pill px-3 fw-bold"
            onClick={onLogout}
          >
            <i className="bi bi-box-arrow-right me-1"></i> Logout
          </button>
          )}
        </div>
      </div>
    </nav>
  );
}