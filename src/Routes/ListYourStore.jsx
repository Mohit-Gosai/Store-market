import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useOutletContext, useNavigate } from 'react-router-dom';

export default function ListYourStore() {
    const { addStore } = useOutletContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        owner: '',
        category: 'Electronics',
        location: '',
        description: '',
        image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800', // Default
        deal: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        const newStore = {
            ...formData,
            id: Date.now(),
            rating: 5.0,
            reviews: 0
        };

        addStore(newStore);
        alert("Store Listed Successfully!");
        
        // Use a slight timeout to ensure state has processed before moving
        setTimeout(() => {
            navigate('/'); 
        }, 100);
    
    };
    return (
        <Card className="shadow border-0 p-4 rounded-4">
            <div className="mb-4">
                <h2 className="fw-bold text-primary">List Your Store</h2>
                <p className="text-muted">Fill in the details to join our marketplace feed.</p>
            </div>

            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Store Name</Form.Label>
                            <Form.Control
                                required
                                placeholder="e.g. Metro Electronics"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Owner Name</Form.Label>
                            <Form.Control
                                required
                                placeholder="Full Name"
                                onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Category</Form.Label>
                            <Form.Select onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                                <option>Electronics</option>
                                <option>Fashion</option>
                                <option>Food</option>
                                <option>Groceries</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-bold">Store Image URL</Form.Label>
                            <Form.Control
                                placeholder="https://unsplash.com/..."
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Location</Form.Label>
                    <Form.Control
                        required
                        placeholder="e.g. Sector 12, Crystal Mall, Floor 2"
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Tell customers what you sell..."
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label className="fw-bold text-danger">Main Coupon / Deal</Form.Label>
                    <Form.Control
                        placeholder="e.g. Flat 20% Off on first visit"
                        onChange={(e) => setFormData({ ...formData, deal: e.target.value })}
                    />
                </Form.Group>

                <Button type="submit" variant="primary" size="lg" className="w-100 py-3 fw-bold shadow-sm">
                    Submit & Launch Store
                </Button>
            </Form>
        </Card>
    );
}