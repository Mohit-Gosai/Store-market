import React, { useState } from 'react'
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

  // State for mobile sidebar
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const handleClose = () => setShowMobileMenu(false);
  const handleShow = () => setShowMobileMenu(true);

  return (
    <>
      {/* Pass handleShow to Navbar */}
      <Navbar role={role} setRole={setRole} onShowSidebar={handleShow} />
      
      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Desktop Sidebar: Only visible on md screens and up */}
          <Col md={2} className="bg-dark border-end border-secondary d-none d-md-block" style={{ minHeight: '100vh' }}>
            <Sidebar role={role} />
          </Col>

          {/* Mobile Sidebar: Offcanvas drawer */}
          <Offcanvas show={showMobileMenu} onHide={handleClose} className="bg-dark text-white">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title className="text-primary fw-bold">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <div onClick={handleClose}> {/* Closes menu when a link is clicked */}
                <Sidebar role={role} />
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Main Content */}
          <Col xs={12} md={10} className="p-3 p-md-4" style={{ minHeight: '90vh' }}>
            <Outlet context={{ role, filteredStores, activeCategory, setFilteredStores, setActiveCategory }} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}