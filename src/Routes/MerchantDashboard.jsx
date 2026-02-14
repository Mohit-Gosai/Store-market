import React, { useState } from 'react';
import { Row, Col, Card, Button, Form, Table, Badge, ProgressBar, InputGroup } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import CouponScanner from '../Components/CouponScanner';

export default function MerchantDashboard() {
    // 1. Initial Data (Mocking your database)
    const [coupons, setCoupons] = useState([
        { id: 1, code: 'SAVE20', discount: '20%', price: 49, status: 'Active', sold: 45, revenue: 2205 },
        { id: 2, code: 'OFFER50', discount: '50%', price: 99, status: 'Expired', sold: 120, revenue: 11880 }
    ]);

    // 2. State for the "Create New" Form
    const [newCoupon, setNewCoupon] = useState({ code: '', discount: '', price: '' });

    const handleCreateCoupon = (e) => {
        e.preventDefault();
        const freshCoupon = {
            id: Date.now(),
            code: newCoupon.code.toUpperCase(),
            discount: newCoupon.discount + '%',
            price: newCoupon.price,
            status: 'Active',
            sold: 0,
            revenue: 0
        };
        // Add the new coupon to the top of the list
        setCoupons([freshCoupon, ...coupons]);
        // Clear form
        setNewCoupon({ code: '', discount: '', price: '' });
    };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Coupon Sales (₹)',
            data: [1200, 1900, 1500, 2500, 2200, 3000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3,
            fill: true
        }]
    };

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold m-0">Merchant Control Center</h2>
                <Badge bg="success" className="px-3 py-2">Store Status: Open</Badge>
            </div>

            {/* Quick Stats Row */}
            <Row className="mb-4 g-3">
                <Col md={3}>
                    <Card className="border-0 shadow-sm p-3 border-start border-primary border-4">
                        <small className="text-muted fw-bold">TOTAL REVENUE</small>
                        <h3 className="fw-bold text-primary">₹14,085</h3>
                        <small className="text-success fw-bold"><i className="bi bi-arrow-up-short"></i> +12%</small>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="border-0 shadow-sm p-3 border-start border-info border-4">
                        <small className="text-muted fw-bold">COUPONS SOLD</small>
                        <h3 className="fw-bold text-info">165</h3>
                        <ProgressBar now={65} variant="info" style={{ height: '6px' }} className="mt-2" />
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="border-0 shadow-sm p-3 border-start border-warning border-4">
                        <small className="text-muted fw-bold">COMMISSION (10%)</small>
                        <h3 className="fw-bold text-warning">₹1,408</h3>
                        <small className="text-muted">Payable to Platform</small>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="border-0 shadow-sm p-3 border-start border-success border-4">
                        <small className="text-muted fw-bold">AVG. RATING</small>
                        <h3 className="fw-bold text-success">4.8 ★</h3>
                        <small className="text-muted">12 Reviews</small>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <Card className="shadow-sm border-0 p-4 mb-4">
                        <h5 className="fw-bold mb-4">Sales Analytics</h5>
                        <Line data={data} options={{ responsive: true }} />
                    </Card>
                </Col>
                <Col>
                    <CouponScanner />
                </Col>
            </Row>
            <Row>
                {/* Left Side: Create Coupon Form */}
                <Col lg={4}>
                    <Card className="shadow-sm border-0 mb-4 overflow-hidden">
                        <Card.Header className="bg-dark text-white fw-bold py-3">
                            Launch New Offer
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleCreateCoupon}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="small fw-bold">Coupon Code</Form.Label>
                                    <Form.Control
                                        placeholder="e.g. SUMMER10"
                                        value={newCoupon.code}
                                        onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="small fw-bold">Discount %</Form.Label>
                                            <InputGroup>
                                                <Form.Control
                                                    type="number"
                                                    value={newCoupon.discount}
                                                    onChange={(e) => setNewCoupon({ ...newCoupon, discount: e.target.value })}
                                                    required
                                                />
                                                <InputGroup.Text>%</InputGroup.Text>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="small fw-bold">Price (₹)</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="99"
                                                value={newCoupon.price}
                                                onChange={(e) => setNewCoupon({ ...newCoupon, price: e.target.value })}
                                                required
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" type="submit" className="w-100 fw-bold py-2 mt-2">
                                    Create Campaign
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Right Side: Inventory Table */}
                <Col lg={8}>
                    <Card className="shadow-sm border-0">
                        <Card.Header className="bg-white py-3 border-0">
                            <h5 className="mb-0 fw-bold">Active Coupons</h5>
                        </Card.Header>
                        <Table responsive hover className="mb-0 align-middle">
                            <thead className="table-light text-uppercase small">
                                <tr>
                                    <th>Offer</th>
                                    <th>Price</th>
                                    <th>Sold</th>
                                    <th>Revenue</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {coupons.map((c) => (
                                    <tr key={c.id}>
                                        <td>
                                            <div className="fw-bold">{c.code}</div>
                                            <div className="text-muted small">{c.discount} Off</div>
                                        </td>
                                        <td>₹{c.price}</td>
                                        <td>{c.sold}</td>
                                        <td>₹{c.revenue}</td>
                                        <td>
                                            <Badge bg={c.status === 'Active' ? 'success' : 'secondary'}>
                                                {c.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}