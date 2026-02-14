import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { CATEGORIES, STORES } from '../Data/MockData'; // Fixed: Added STORES import
import { useOutletContext } from 'react-router-dom';

export default function CategoryCards() {
    const { setFilteredStores, activeCategory, setActiveCategory } = useOutletContext();
    
    const handleFilter = (category) => {
        setActiveCategory(category);
        if (category === "All") {
            setFilteredStores(STORES);
        } else {
            const filtered = STORES.filter(store => store.category === category);
            setFilteredStores(filtered);
        }
    };

    const getIcon = (category) => {
        switch (category) {
            case 'Electronics': return 'laptop';
            case 'Fashion': return 'bag-heart';
            case 'Bakery': return 'cake2';
            case 'Groceries': return 'cart-check';
            case 'Sports': return 'dribbble';
            case 'Pets': return 'heart-pulse';
            case 'Decor': return 'house-door';
            case 'Cafe': return 'cup-straw';
            case 'Music': return 'music-note-beamed';
            case 'Books': return 'book';
            default: return 'grid';
        }
    };
    

    return (
        <Card className="border-0 shadow-sm rounded-4 overflow-hidden bg-light">
            <Card.Header className="bg-dark text-white text-center py-3 border-0">
                <h6 className="fw-bold mb-0">Quick Categories</h6>
            </Card.Header>
            <Card.Body className="p-3">
                {/* Fixed: Responsive columns to prevent cramping (xs=4 for small, md=auto for desktop) */}
                <Row className="g-3 justify-content-center">
                    {CATEGORIES.map((cat) => (
                        <Col xs={4} md={2} key={cat}>
                            <div
                                onClick={() => handleFilter(cat)}
                                className={`p-2 text-center rounded-4 transition-all shadow-sm ${
                                    activeCategory === cat ? 'bg-primary text-white border-primary' : 'bg-white text-dark'
                                }`}
                                style={{
                                    cursor: 'pointer',
                                    minHeight: '90px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transition: 'all 0.3s ease',
                                    border: activeCategory === cat ? 'none' : '1px solid #eee'
                                }}
                            >
                                <i className={`bi bi-${getIcon(cat)} ${activeCategory === cat ? 'fs-2' : 'fs-3'} mb-1`}></i>
                                <div className="fw-bold text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '0.5px' }}>
                                    {cat}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Card.Body>
        </Card>
    )
}
