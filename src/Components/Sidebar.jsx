import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Sidebar = ({ role, isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active bg-primary' : '';

  return (
    <div className={`d-flex flex-column p-3 bg-dark text-white h-100 ${isCollapsed ? 'align-items-center' : ''}`}>
      
      {/* Toggle Button for Desktop - Hidden on Mobile Drawer */}
      {setIsCollapsed && (
        <Button 
          variant="outline-secondary" 
          size="sm" 
          className="mb-4 d-none d-md-block border-0 text-white"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <i className={`bi ${isCollapsed ? 'bi-arrow-right-circle' : 'bi-arrow-left-circle'} fs-4`}></i>
        </Button>
      )}

      {!isCollapsed && (
        <span className="fs-5 fw-bold mb-4 text-primary px-2 text-nowrap">
          {role === 'user' ? 'Shopping' : 'Business'}
        </span>
      )}
      
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
              className={`nav-link text-white d-flex align-items-center ${isActive(item.path)} ${isCollapsed ? 'justify-content-center' : ''}`}
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