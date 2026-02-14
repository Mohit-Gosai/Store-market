import React, { useState } from 'react';
import { Card, Form, Button, Alert, InputGroup } from 'react-bootstrap';

export default function CouponScanner() {
    const [couponCode, setCouponCode] = useState('');
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleVerify = (e) => {
        e.preventDefault();
        
        // Mock Logic: In a real app, this would check your Database
        if (couponCode.toUpperCase() === 'SAVE20' || couponCode.toUpperCase() === 'OFFER50') {
            setStatus('success');
        } else {
            setStatus('error');
        }
    };

    return (
        <Card className="shadow-sm border-0">
            <Card.Header className="bg-primary text-white fw-bold py-3">
                <i className="bi bi-qr-code-scan me-2"></i> Verify Customer Coupon
            </Card.Header>
            <Card.Body className="p-4 text-center">
                <p className="text-muted small">Enter the 6-digit code provided by the customer or scan their QR code.</p>
                
                <Form onSubmit={handleVerify}>
                    <InputGroup className="mb-3">
                        <Form.Control
                            size="lg"
                            placeholder="Ex: SAVE20"
                            className="text-center fw-bold"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <Button variant="dark" type="submit">Verify</Button>
                    </InputGroup>
                </Form>

                {status === 'success' && (
                    <Alert variant="success" className="mt-3 border-0 shadow-sm">
                        <i className="bi bi-check-circle-fill me-2"></i>
                        <strong>Coupon Valid!</strong><br/>
                        Discount: 20% | Applied to Bill.
                    </Alert>
                )}

                {status === 'error' && (
                    <Alert variant="danger" className="mt-3 border-0 shadow-sm">
                        <i className="bi bi-exclamation-triangle-fill me-2"></i>
                        <strong>Invalid Code</strong><br/>
                        This coupon does not exist or has expired.
                    </Alert>
                )}
            </Card.Body>
        </Card>
    );
}