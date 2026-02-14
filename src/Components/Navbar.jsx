import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Navbar({ role, setRole, onShowSidebar }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div className="container">
                {/* Mobile Toggle Button (left side) */}
                <Button 
                    variant="outline-light" 
                    className="d-md-none me-2 border-0" 
                    onClick={onShowSidebar}
                >
                    <i className="bi bi-list fs-3"></i>
                </Button>

                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <span className="fw-bold">Store Market</span>
                </Link>

                <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item me-3">
                            <button 
                                className={`btn btn-sm ${role === 'user' ? 'btn-outline-warning' : 'btn-warning'}`}
                                onClick={() => setRole(role === 'user' ? 'owner' : 'user')}
                            >
                                <i className={`bi ${role === 'user' ? 'bi-shop' : 'bi-person-circle'} me-1`}></i>
                                {role === 'user' ? 'Merchant Mode' : 'Customer View'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}