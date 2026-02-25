import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { Col, Container, Row, Offcanvas } from 'react-bootstrap'
import { STORES } from './Data/MockData';
import LandingPage from './Routes/LandingPage'

export default function App() {
  // --- 1. ALL STATE HOOKS AT THE TOP ---
  const [role, setRole] = useState('user');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('market_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    localStorage.setItem('market_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('market_user');
  };

  // Load from localStorage or MockData
  const [allStores, setAllStores] = useState(() => {
    const saved = localStorage.getItem('my_market_stores');
    return saved ? JSON.parse(saved) : STORES;
  });

  const [filteredStores, setFilteredStores] = useState(allStores);

  // --- 2. ALL FUNCTIONS ---
  const handleMobileClose = () => setShowMobileMenu(false);
  const handleMobileShow = () => setShowMobileMenu(true);

  // App.jsx

  const addStore = (newStore) => {
    // 1. Add to the master database
    setAllStores(prev => [newStore, ...prev]);

    // 2. Force the view to 'All' so the new store isn't hidden by a filter
    setActiveCategory("All");
  };

  // --- 3. EFFECTS ---
  useEffect(() => {
    // Update view when database or category changes
    if (activeCategory === "All") {
      setFilteredStores(allStores);
    } else {
      const result = allStores.filter(s => s.category === activeCategory);
      setFilteredStores(result);
    }
    // Save to browser memory
    localStorage.setItem('my_market_stores', JSON.stringify(allStores));
  }, [allStores, activeCategory]);

  // --- 4. RENDER ---
  return (
    <>
      <Navbar currentUser={currentUser}
      isloggedIn={!!currentUser}
        onLogout={handleLogout}
        onShowSidebar={handleMobileShow} />
      
      {!currentUser || window.location.pathname === "/" ? (<LandingPage onLogin={handleLogin} />) : (
        <Container fluid className="p-0">
          <Row className="g-0 flex-nowrap">
            {/* Desktop Sidebar */}
            <Col
              xs="auto"
              className="bg-dark border-end border-secondary d-none d-md-block transition-all"
              style={{ width: isCollapsed ? '80px' : '240px', transition: '0.3s', minHeight: '100vh' }}
            >
              <Sidebar role={currentUser.role} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </Col>

            {/* Mobile Sidebar (Offcanvas) */}
            <Offcanvas show={showMobileMenu} onHide={handleMobileClose} className="bg-dark text-white">
              <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title className="text-primary fw-bold">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="p-0">
                <div onClick={handleMobileClose}><Sidebar role={role} /></div>
              </Offcanvas.Body>
            </Offcanvas>

            {/* Main Feed Content */}
            <Col className="p-3 p-md-4 overflow-auto" style={{ minHeight: '90vh' }}>
              <Outlet context={{
                currentUser,
                handleLogin,
                handleLogout,
                role,
                filteredStores,
                activeCategory,
                setFilteredStores,
                setActiveCategory,
                addStore,
                allStores,
                setAllStores
              }} />
            </Col>
          </Row>
        </Container>
      )}
      <Footer />
    </>)
}