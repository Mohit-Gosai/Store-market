import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { Col, Container, Row, Offcanvas } from 'react-bootstrap'
import { STORES } from './Data/MockData';

export default function App() {
  const [role, setRole] = useState('user');
  const [filteredStores, setFilteredStores] = useState(STORES);
  const [activeCategory, setActiveCategory] = useState("All");

  // State for Desktop Collapse
  const [isCollapsed, setIsCollapsed] = useState(false);
  // State for Mobile Drawer
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileClose = () => setShowMobileMenu(false);
  const handleMobileShow = () => setShowMobileMenu(true);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredStores(filteredStores);
    } else {
      setFilteredStores(filteredStores.filter(s => s.category === activeCategory));
    }
  }, [filteredStores, activeCategory]);

  const addStore = (newStore) => {
    setAllStores(prev => [newStore, ...prev]); // Add new store to the top
  };

  return (
    <>
      <Navbar role={role} setRole={setRole} onShowSidebar={handleMobileShow} />
      
      <Container fluid className="p-0">
        <Row className="g-0 flex-nowrap">
          {/* DESKTOP SIDEBAR: Dynamic width based on isCollapsed */}
          <Col 
            xs="auto" 
            className="bg-dark border-end border-secondary d-none d-md-block transition-all"
            style={{ width: isCollapsed ? '80px' : '240px', transition: '0.3s' }}
          >
            <Sidebar 
              role={role} 
              isCollapsed={isCollapsed} 
              setIsCollapsed={setIsCollapsed} 
            />
          </Col>

          {/* MOBILE SIDEBAR: Always full labels, slides in */}
          <Offcanvas show={showMobileMenu} onHide={handleMobileClose} className="bg-dark text-white">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title className="text-primary fw-bold">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <div onClick={handleMobileClose}>
                <Sidebar role={role} />
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          {/* MAIN CONTENT */}
          <Col className="p-3 p-md-4 overflow-auto" style={{ minHeight: '90vh' }}>
            <Outlet context={{ role, filteredStores, activeCategory, setFilteredStores, setActiveCategory, addStore }} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}