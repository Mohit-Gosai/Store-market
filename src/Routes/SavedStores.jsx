import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Alert } from 'react-bootstrap';
import { STORES } from '../Data/MockData';
import StoreCard from '../Components/StoreCard';

export default function SavedStores() {
    const [savedIds, setSavedIds] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedStores')) || [];
        setSavedIds(saved);
    }, []);

    const favoriteStores = STORES.filter(store => savedIds.includes(store.id));

    return (
        <Container className="py-4">
            <h3 className="fw-bold mb-4">Saved Stores</h3>
            {favoriteStores.length > 0 ? (
                <Row xs={1} md={2} lg={4} className="g-4">
                    {favoriteStores.map(store => (
                        <Col key={store.id}>
                            <StoreCard {...store} />
                        </Col>
                    ))}
                </Row>
            ) : (
                <Alert variant="info" className="text-center py-5 shadow-sm">
                    <i className="bi bi-heart fs-1 d-block mb-3"></i>
                    <h4>No saved stores yet</h4>
                    <p>Heart your favorite local shops to find them quickly!</p>
                </Alert>
            )}
        </Container>
    );
}