import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

export default function StoreOnboarding() {
    const [storeData, setStoreData] = useState({ name: '', category: '', image: null });

    const handleImageChange = (e) => {
        // This creates a temporary local URL for the uploaded file
        setStoreData({ ...storeData, image: URL.createObjectURL(e.target.files[0]) });
    };

    return (
        <Card className="shadow-sm p-4">
            <h3>Manage Your Store</h3>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Store Name</Form.Label>
                            <Form.Control type="text" placeholder="e.g. Mohit's Tech Shop" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select>
                                <option>Electronics</option>
                                <option>Fashion</option>
                                <option>Grocery</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Store Photo</Form.Label>
                            <Form.Control type="file" onChange={handleImageChange} />
                        </Form.Group>
                        <Button variant="primary">Update Profile</Button>
                    </Col>
                    
                    <Col md={6} className="text-center">
                        <p className="text-muted small">Live Preview</p>
                        {storeData.image ? (
                            <img src={storeData.image} alt="Preview" className="img-fluid rounded" style={{maxHeight: '200px'}} />
                        ) : (
                            <div className="bg-light rounded d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                                No image uploaded
                            </div>
                        )}
                    </Col>
                </Row>
            </Form>
        </Card>
    );
}