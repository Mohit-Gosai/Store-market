import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { Col, Container, Row, Offcanvas } from 'react-bootstrap'
import { STORES } from './Data/MockData';

export default function App() {
  const [role, setRole] = useState('user');
  
  // 1. THIS IS YOUR DATABASE: It holds everything including new stores
  const [allStores, setAllStores] = useState(STORES); 
  
  // 2. THIS IS YOUR VIEW: What the user actually sees
  const [filteredStores, setFilteredStores] = useState(STORES);
  const [activeCategory, setActiveCategory] = useState("All");

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileClose = () => setShowMobileMenu(false);
  const handleMobileShow = () => setShowMobileMenu(true);

  // 3. EFFECT: Whenever the Database OR Category changes, update the View
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredStores(allStores);
    } else {
      const result = allStores.filter(s => s.category === activeCategory);
      setFilteredStores(result);
    }
  }, [allStores, activeCategory]); // Re-run when a store is added or category clicked

  // 4. ADD FUNCTION: Updates the Database
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
            {/* Pass displayStores to the Home page */}
            <Outlet context={{ 
               role, 
               filteredStores: displayStores, 
               activeCategory, 
               setFilteredStores: setDisplayStores, 
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