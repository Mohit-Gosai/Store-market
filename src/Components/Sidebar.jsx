import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const location = useLocation();
  
  // Helper to set active class
  const isActive = (path) => location.pathname === path ? 'active bg-primary' : '';

  return (
    <div className="d-flex flex-column p-3 bg-dark text-white h-100">
      <span className="fs-5 fw-bold mb-4 text-primary px-2">
        {role === 'user' ? 'Shopping' : 'Business'}
      </span>
      
      <ul className="nav nav-pills flex-column gap-2">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-white ${isActive('/')}`}>
            <i className="bi bi-house me-3"></i> Home
          </Link>
        </li>

        {role === 'user' ? (
          <>
            <li>
                <Link to="/saved" className={`nav-link text-white ${isActive('/saved')}`}>
                    <i className="bi bi-heart me-3"></i> Saved
                </Link>
            </li>
            <li>
                <Link to="/my-coupons" className={`nav-link text-white ${isActive('/my-coupons')}`}>
                    <i className="bi bi-ticket me-3"></i> My Wallet
                </Link>
            </li>
          </>
        ) : (
          <>
            <li>
                <Link to="/create-coupon" className={`nav-link text-white ${isActive('/create-coupon')}`}>
                    <i className="bi bi-plus-circle me-3"></i> Create Coupon
                </Link>
            </li>
            <li>
                <Link to="/merchant-dashboard" className={`nav-link text-white ${isActive('/merchant-dashboard')}`}>
                    <i className="bi bi-graph-up me-3"></i> Dashboard
                </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
export default Sidebar;