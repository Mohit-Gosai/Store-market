import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { Col, Container, Row, Offcanvas } from 'react-bootstrap'
import { STORES } from './Data/MockData';

export default function App() {
  // --- 1. ALL STATE HOOKS AT THE TOP ---
  const [role, setRole] = useState('user');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Load from localStorage or MockData
  const [allStores, setAllStores] = useState(() => {
    const saved = localStorage.getItem('my_market_stores');
    return saved ? JSON.parse(saved) : STORES;
  }); 

  const [filteredStores, setFilteredStores] = useState(allStores);

  // --- 2. ALL FUNCTIONS ---
  const handleMobileClose = () => setShowMobileMenu(false);
  const handleMobileShow = () => setShowMobileMenu(true);

  const addStore = (newStore) => {
    setAllStores(prev => [newStore, ...prev]); 
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
      <Navbar role={role} setRole={setRole} onShowSidebar={handleMobileShow} />
      <Container fluid className="p-0">
        <Row className="g-0 flex-nowrap">
          {/* Desktop Sidebar */}
          <Col 
            xs="auto" 
            className="bg-dark border-end border-secondary d-none d-md-block transition-all"
            style={{ width: isCollapsed ? '80px' : '240px', transition: '0.3s', minHeight: '100vh' }}
          >
            <Sidebar role={role} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
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
               role, 
               filteredStores, 
               activeCategory, 
               setFilteredStores, 
               setActiveCategory, 
               addStore 
            }} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}