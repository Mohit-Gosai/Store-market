import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StoreCard from '../Components/StoreCard';
import MyCarousel from '../Components/MyCarousel';
import CategoryCards from '../Components/CategoryCards';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
    const { filteredStores, activeCategory } = useOutletContext();

    return (
        <div className="container-fluid px-0">
            <div className="mb-4">
                <MyCarousel /> 
            </div>

            <div className="mb-4">
                <CategoryCards />
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
                <h4 className="fw-bold mb-0">Category: <span className="text-primary">{activeCategory}</span></h4>
                <span className="badge bg-secondary px-3 py-2">{filteredStores.length} Stores Available</span>
            </div>

            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {filteredStores.map((store) => (
                    <Col key={store.id}>
                        <StoreCard {...store} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}