import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Sidebar = ({ role, isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active bg-primary' : '';

  return (
    <div 
      className={`d-flex flex-column p-3 bg-dark text-white h-100 position-relative transition-all ${isCollapsed ? 'align-items-center' : ''}`}
      style={{ minHeight: '100vh' }}
    >
      
      {/* 1. Improved Toggle Button Position */}
      {setIsCollapsed && (
        <Button 
          variant="link" 
          className="p-0 text-secondary position-absolute d-none d-md-block"
          style={{ 
            top: '20px', 
            right: isCollapsed ? 'auto' : '15px',
            zIndex: 10 
          }}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className={`bi ${isCollapsed ? 'bi-list' : 'bi-text-indent-right'} fs-3`}></i>
        </Button>
      )}

      {/* 2. Logo / Header Section */}
      <div className="mb-4 mt-2 px-2">
        {!isCollapsed ? (
          <span className="fs-5 fw-bold text-primary text-nowrap">
            {role === 'user' ? 'Store Market' : 'Owner Portal'}
          </span>
        ) : (
          <i className="bi bi-shop text-primary fs-3"></i>
        )}
      </div>
      
      <hr className="border-secondary mb-4 w-100" />
      
      {/* 3. Navigation Links */}
      <ul className="nav nav-pills flex-column gap-2 w-100">
        {[
          { path: '/', icon: 'bi-house', label: 'Home' },
          { path: '/saved', icon: 'bi-heart', label: 'Saved', role: 'user' },
          { path: '/my-coupons', icon: 'bi-ticket', label: 'Wallet', role: 'user' },
          { path: '/create-coupon', icon: 'bi-plus-circle', label: 'Create', role: 'owner' },
          { path: '/merchant-dashboard', icon: 'bi-graph-up', label: 'Stats', role: 'owner' }
        ].filter(link => !link.role || link.role === role).map((item) => (
          <li key={item.path} className="nav-item">
            <Link 
              to={item.path} 
              className={`nav-link text-white d-flex align-items-center py-2 ${isActive(item.path)} ${isCollapsed ? 'justify-content-center' : ''}`}
              title={isCollapsed ? item.label : ''}
            >
              <i className={`bi ${item.icon} ${isCollapsed ? 'fs-4' : 'me-3'}`}></i>
              {!isCollapsed && <span className="text-nowrap">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Sidebar;