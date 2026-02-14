import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { Col, Container, Row, Offcanvas } from 'react-bootstrap'
import { STORES } from './Data/MockData'

export default function App() {
  const [role, setRole] = useState('user');
  const [filteredStores, setFilteredStores] = useState(STORES);
  const [activeCategory, setActiveCategory] = useState("All");

  // State to control mobile sidebar visibility
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const handleClose = () => setShowMobileSidebar(false);
  const handleShow = () => setShowMobileSidebar(true);

  return (
    <>
      {/* Pass handleShow to Navbar */}
      <Navbar role={role} setRole={setRole} onShowSidebar={handleShow} />
      
      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Desktop Sidebar: Visible only on md and larger */}
          <Col md={2} className="bg-dark border-end border-secondary d-none d-md-block" style={{ minHeight: '100vh' }}>
            <Sidebar role={role} />
          </Col>

          {/* Mobile Sidebar: Offcanvas (drawer) that slides in */}
          <Offcanvas show={showMobileSidebar} onHide={handleClose} className="bg-dark text-white w-75">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title className="text-primary fw-bold">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              {/* Reuse Sidebar component - onClick to close menu after selecting */}
              <div onClick={handleClose}>
                <Sidebar role={role} />
              </div>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Main Content: Full width on mobile, 10-cols on desktop */}
          <Col xs={12} md={10} className="p-3 p-md-4" style={{ minHeight: '90vh' }}>
            <Outlet context={{ role, filteredStores, activeCategory, setFilteredStores, setActiveCategory }} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}