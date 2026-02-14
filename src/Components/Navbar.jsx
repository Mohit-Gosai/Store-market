export default function Navbar({ role, setRole, onShowSidebar }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
            <div className="container">
                {/* Mobile Open Sidebar Button */}
                <button 
                    className="btn btn-outline-light d-md-none me-2 border-0" 
                    onClick={onShowSidebar}
                >
                    <i className="bi bi-list fs-2"></i>
                </button>

                <Link className="navbar-brand fw-bold" to="/">Store Market</Link>

                <div className="collapse navbar-collapse d-none d-md-block">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item">
                            <button 
                                className="btn btn-sm btn-warning"
                                onClick={() => setRole(role === 'user' ? 'owner' : 'user')}
                            >
                                {role === 'user' ? 'Merchant Mode' : 'Customer View'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}