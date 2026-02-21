import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { Col, Container, Row, Offcanvas } from 'react-bootstrap'
import { STORES } from './Data/MockData';

export default function App() {
const [role, setRole] = useState('user');
  
handleMobileClose = () => setShowMobileMenu(false);
handleMobileShow = () => setShowMobileMenu(true);
const [showMobileMenu, setShowMobileMenu] = useState(false);
const [isCollapsed, setIsCollapsed] = useState(false);

  // 1. DATABASE: Load from localStorage if it exists, otherwise use STORES
  const [allStores, setAllStores] = useState(() => {
    const saved = localStorage.getItem('my_market_stores');
    return saved ? JSON.parse(saved) : STORES;
  }); 
  
  const [filteredStores, setFilteredStores] = useState(allStores);
  const [activeCategory, setActiveCategory] = useState("All");

  // ... (Keep your Sidebar/Offcanvas logic)

  // 2. Logic: Update view when database or category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredStores(allStores);
    } else {
      const result = allStores.filter(s => s.category === activeCategory);
      setFilteredStores(result);
    }
    // 3. PERSIST: Save the master list whenever it changes
    localStorage.setItem('my_market_stores', JSON.stringify(allStores));
  }, [allStores, activeCategory]);

  const addStore = (newStore) => {
    setAllStores(prev => [newStore, ...prev]); 
  };

  return (
    <>
      <Navbar role={role} setRole={setRole} onShowSidebar={handleMobileShow} />
      <Container fluid className="p-0">
        <Row className="g-0 flex-nowrap">
          <Col 
            xs="auto" 
            className="bg-dark border-end border-secondary d-none d-md-block transition-all"
            style={{ width: isCollapsed ? '80px' : '240px', transition: '0.3s' }}
          >
            <Sidebar role={role} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          </Col>

          <Offcanvas show={showMobileMenu} onHide={handleMobileClose} className="bg-dark text-white">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title className="text-primary fw-bold">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <div onClick={handleMobileClose}><Sidebar role={role} /></div>
            </Offcanvas.Body>
          </Offcanvas>

          <Col className="p-3 p-md-4 overflow-auto" style={{ minHeight: '90vh' }}>
            {/* FIXED: Using 'filteredStores' instead of 'displayStores' */}
            <Outlet context={{ 
               role, 
               filteredStores: filteredStores, 
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