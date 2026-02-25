import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';

export default function LandingPage({ onLogin }) {
    const [isSignup, setIsSignup] = useState(false);
    const [role, setRole] = useState('user');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        onLogin({ 
            name: email.split('@')[0], 
            role: role, 
            following: [], 
            email: email 
        });
    };

    return (
        <div className="min-vh-100 d-flex align-items-center bg-light">
            <Container>
                <Row className="align-items-center g-5">
                    
                    {/* LEFT SIDE: The "Explanation" */}
                    <Col lg={6}>
                        <h1 className="fw-bold text-dark display-5 mb-4">
                            Supporting Local <span className="text-primary">Together.</span>
                        </h1>
                        <p className="lead text-muted mb-4">
                            Our platform bridges the gap between local shop owners and the neighbors who love them. No fancy algorithms, just real connections.
                        </p>
                        
                        <ListGroup variant="flush" className="bg-transparent">
                            <ListGroup.Item className="bg-transparent border-0 px-0 py-3">
                                <h5 className="fw-bold mb-1"><i className="bi bi-shop text-primary me-2"></i> For Store Owners</h5>
                                <p className="text-muted mb-0">List your shop in minutes, post updates about new stock, and share exclusive coupons directly with your followers.</p>
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0 px-0 py-3">
                                <h5 className="fw-bold mb-1"><i className="bi bi-person-heart text-primary me-2"></i> For Neighbors</h5>
                                <p className="text-muted mb-0">Discover stores in your area, subscribe to their feeds for real-time updates, and save money with local member deals.</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    {/* RIGHT SIDE: The Form */}
                    <Col lg={5} className="ms-auto">
                        <Card className="shadow-sm border-0 p-4 p-md-5 rounded-4">
                            <div className="text-center mb-4">
                                <h3 className="fw-bold">{isSignup ? 'Join the Community' : 'Sign In'}</h3>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                {isSignup && (
                                    <Form.Group className="mb-3 text-center p-3 bg-light rounded-3 border">
                                        <Form.Label className="small fw-bold d-block mb-3 text-uppercase">I want to...</Form.Label>
                                        <div className="d-flex gap-2">
                                            <Button 
                                                variant={role === 'user' ? 'primary' : 'outline-primary'} 
                                                className="w-50"
                                                onClick={() => setRole('user')}
                                            >Find Deals</Button>
                                            <Button 
                                                variant={role === 'owner' ? 'primary' : 'outline-primary'} 
                                                className="w-50"
                                                onClick={() => setRole('owner')}
                                            >List My Shop</Button>
                                        </div>
                                    </Form.Group>
                                )}

                                <Form.Group className="mb-3">
                                    <Form.Label className="small fw-bold">Email</Form.Label>
                                    <Form.Control type="email" name="email" required placeholder="name@email.com" />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="small fw-bold">Password</Form.Label>
                                    <Form.Control type="password" required placeholder="••••••••" />
                                </Form.Group>

                                <Button type="submit" variant="primary" size="lg" className="w-100 fw-bold rounded-3">
                                    {isSignup ? 'Create Account' : 'Sign In'}
                                </Button>
                            </Form>

                            <div className="text-center mt-4">
                                <Button variant="link" className="text-decoration-none text-muted small" onClick={() => setIsSignup(!isSignup)}>
                                    {isSignup ? 'Already have an account? Sign In' : 'New here? Join as a neighbor or owner'}
                                </Button>
                            </div>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}