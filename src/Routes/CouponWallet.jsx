import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Badge, Button } from 'react-bootstrap';

export default function CouponWallet() {
    const [myCoupons, setMyCoupons] = useState([]);

    // Load coupons from localStorage when the page opens
    useEffect(() => {
        const savedCoupons = JSON.parse(localStorage.getItem('userCoupons')) || [];
        setMyCoupons(savedCoupons);
    }, []);

    const clearWallet = () => {
        if(window.confirm("Are you sure you want to clear your wallet?")) {
            localStorage.removeItem('userCoupons');
            setMyCoupons([]);
        }
    };

    return (
        <div className="container py-2">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold m-0">My Purchased Coupons</h4>
                {myCoupons.length > 0 && (
                    <Button variant="outline-danger" size="sm" onClick={clearWallet}>
                        Clear Wallet
                    </Button>
                )}
            </div>

            <Row className="g-3">
                {myCoupons.length > 0 ? (
                    myCoupons.map(coupon => (
                        <Col md={6} lg={4} key={coupon.id}>
                            <Card className="border-primary border-2 border-dashed bg-light shadow-sm">
                                <Card.Body>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h5 className="fw-bold text-primary mb-1">{coupon.discount}</h5>
                                            <p className="small text-muted mb-2">at {coupon.storeName}</p>
                                        </div>
                                        <Badge bg="dark" className="align-self-start p-2">
                                            {coupon.code}
                                        </Badge>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <small className="text-danger fw-bold">{coupon.expiry}</small>
                                        <Button variant="link" className="p-0 text-decoration-none small">
                                            View QR <i className="bi bi-qr-code"></i>
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col xs={12} className="text-center py-5">
                        <i className="bi bi-ticket-perforated text-muted" style={{fontSize: '3rem'}}></i>
                        <p className="text-muted mt-3">Your wallet is empty. Start exploring local deals!</p>
                    </Col>
                )}
            </Row>
        </div>
    );
}