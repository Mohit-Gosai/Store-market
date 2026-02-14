import React from 'react';
import { Row, Col, Container, Badge, Card } from 'react-bootstrap';
import { STORES } from '../Data/MockData';
import StoreCard from '../Components/StoreCard';

export default function TrendingDeals() {
    // Logic: Show stores with rating >= 4.5 or specific IDs
    const trending = STORES.filter(store => store.rating >= 4.5);

    return (
        <Container className="py-4">
            <div className="d-flex align-items-center mb-4">
                <h3 className="fw-bold me-3 mb-0">🔥 Trending Deals</h3>
                <Badge bg="danger">Hot Right Now</Badge>
            </div>
            
            <Row xs={1} md={2} lg={4} className="g-4">
                {trending.map(store => (
                    <Col key={store.id}>
                        <div className="position-relative">
                             <Badge bg="warning" text="dark" className="position-absolute top-0 start-0 m-3 z-3">
                                TOP RATED
                             </Badge>
                             <StoreCard {...store} />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}