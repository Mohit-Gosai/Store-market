import { useState, useEffect } from 'react';
import { Container, Row, Col, Offcanvas } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { STORES } from './data/stores'; 


export default function App() {
  const [role, setRole] = useState('user');
  
  // 1. Keep a master list of ALL stores
  const [masterStores, setMasterStores] = useState(STORES);
  
  // 2. Keep a separate state for what is currently visible
  const [displayStores, setDisplayStores] = useState(STORES);
  const [activeCategory, setActiveCategory] = useState("All");

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileClose = () => setShowMobileMenu(false);
  const handleMobileShow = () => setShowMobileMenu(true);

  // 3. Logic: Whenever the master list or category changes, update the display
  useEffect(() => {
    if (activeCategory === "All") {
      setDisplayStores(masterStores);
    } else {
      const filtered = masterStores.filter(s => s.category === activeCategory);
      setDisplayStores(filtered);
    }
  }, [masterStores, activeCategory]);

  // 4. Function to add to the master list
  const addStore = (newStore) => {
    setMasterStores(prev => [newStore, ...prev]);
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