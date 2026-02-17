import React, { useState } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS, CategoryScale, LinearScale,
    PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js';
import { STORES } from '../Data/MockData';
import StarRating from '../Components/StarRating';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function StoreDetails() {
    const { role } = useOutletContext();
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);

    // 1. All State Hooks (Must be at the top)
    const [userRating, setUserRating] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // 2. Data Fetching
    const store = STORES.find(item => item.id == id);

    // 3. Logic Functions
    const handleRatingSubmit = (rating) => {
        setUserRating(rating);
        console.log("User rated store:", rating);
    };

    const handlePurchase = () => {
        // Create a coupon object using store data
        const purchasedCoupon = {
            id: Date.now(),
            storeName: store.name,
            discount: "20% OFF",
            code: "DEAL-" + Math.random().toString(36).substring(7).toUpperCase(),
            expiry: "Valid for 30 days",
            timestamp: new Date().toLocaleString()
        };

        // Save to LocalStorage
        const existingCoupons = JSON.parse(localStorage.getItem('userCoupons')) || [];
        const updatedCoupons = [purchasedCoupon, ...existingCoupons];
        localStorage.setItem('userCoupons', JSON.stringify(updatedCoupons));

        // Show Modal
        setShowModal(true);
    };


    // Check if store is already saved on load
    React.useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedStores')) || [];
        setIsSaved(saved.includes(Number(id)));
    }, [id]);

    const toggleSave = () => {
        let saved = JSON.parse(localStorage.getItem('savedStores')) || [];
        if (saved.includes(Number(id))) {
            saved = saved.filter(storeId => storeId !== Number(id));
            setIsSaved(false);
        } else {
            saved.push(Number(id));
            setIsSaved(true);
        }
        localStorage.setItem('savedStores', JSON.stringify(saved));
    };

    // Chart Data
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Coupon Sales (₹)',
            data: [1200, 1900, 1500, 2500, 2200, 3000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3,
            fill: true
        }]
    };

    if (!store) return <div className="p-5 text-center">Store not found!</div>;

    return (
        <div className="container py-2">
            {/* Store Header */}
            <div className="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3">
                <div>
                    <Badge bg="primary" className="mb-2">Verified Store</Badge>
                    <h1 className="fw-bold">{store.name}</h1>
                    <p className="text-muted mb-0"><i className="bi bi-geo-alt"></i> Sector 17, Chandigarh</p>
                </div>
                {role === 'owner' && <Button variant="outline-dark">Edit Profile</Button>}
            </div>

            <Row>
                <Col lg={8}>
                    {role === 'owner' ? (
                        <Card className="shadow-sm border-0 p-4 mb-4">
                            <h5 className="fw-bold mb-4">Sales Analytics</h5>
                            <Line data={chartData} options={{ responsive: true }} />
                        </Card>
                    ) : (
                        <>
                            <Card className="shadow-sm border-0 overflow-hidden mb-4">
                                <img src={store.image} alt="store" style={{ height: '300px', objectFit: 'cover' }} />

                                <div className="d-flex justify-content-between align-items-start mb-4 p-2">
                                    <div>
                                        <Badge bg="primary" className="mb-2">{store.category}</Badge>
                                        <h1 className="fw-bold display-5">{store.name}</h1>
                                        <p className="text-muted fs-5"><i className="bi bi-geo-alt me-2"></i>{store.location}</p>
                                    </div>

                                    {/* NEW SAVE BUTTON */}
                                    <Button
                                        variant={isSaved ? "danger" : "outline-danger"}
                                        className="rounded-pill px-4 shadow-sm"
                                        onClick={toggleSave}
                                    >
                                        <i className={`bi ${isSaved ? 'bi-heart-fill' : 'bi-heart'} me-2`}></i>
                                        {isSaved ? "Saved" : "Save Store"}
                                    </Button>
                                </div>
                            </Card>

                            <Card className="shadow-sm border-0 p-4 bg-light border-start border-warning border-4">
                                <h5 className="fw-bold">Rate this Store</h5>
                                <p className="text-muted small">Share your experience with the community.</p>
                                <StarRating onRate={handleRatingSubmit} />
                                {userRating > 0 && (
                                    <p className="text-success small mt-2 fw-bold">
                                        You gave this store {userRating} stars!
                                    </p>
                                )}
                            </Card>
                            {/* Location Section */}
                            <Card className="shadow-sm border-0 mt-4 overflow-hidden">
                                <Card.Header className="bg-white py-3">
                                    <h5 className="mb-0 fw-bold">
                                        <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                        Store Location
                                    </h5>
                                </Card.Header>
                                <div style={{ width: '100%', height: '350px' }}>
                                    <iframe
                                        title="institute-location"
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        /* REPLACE 'Your+Institute+Name+City' with your actual institute name below */
                                        // src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Your+Institute+Name,City"
                                        /* If you don't have an API key, use this search-based version: */
                                        src="https://maps.google.com/maps?q=Avish+Educom+Durg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <Card.Body className="bg-light">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="small mb-1"><strong>Area:</strong> {store.location}</p>
                                            <p className="small text-muted mb-0">Visit us at our main branch for verification.</p>
                                        </div>
                                        <Button variant="outline-primary" size="sm" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=Avish+Educom+Durg`, '_blank')}>
                                            Open in Maps
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </>
                    )}
                </Col>

                <Col lg={4}>
                    <Card className="shadow-sm border-primary border-2">
                        <Card.Body className="text-center">
                            <h4 className="fw-bold">Exclusive Deal</h4>
                            <div className="display-4 fw-bold text-primary my-3">20% OFF</div>
                            <p className="text-muted small">Get a flat 20% discount on any purchase above ₹2000.</p>
                            <hr />
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-muted">Coupon Price:</span>
                                <span className="fs-4 fw-bold text-success">₹49</span>
                            </div>

                            {role === 'user' ? (
                                <Button variant="primary" onClick={handlePurchase} size="lg" className="w-100 shadow">
                                    Buy Coupon Now
                                </Button>
                            ) : (
                                <div className="alert alert-info py-2 small">
                                    Owners view: This is how customers see your offer.
                                </div>
                            )}
                            <p className="small text-muted mt-3">Valid for 30 days after purchase</p>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

            {/* Success Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Body className="text-center p-5">
                    <div className="text-success display-1 mb-4">
                        <i className="bi bi-check-circle-fill"></i>
                    </div>
                    <h2 className="fw-bold">Purchase Successful!</h2>
                    <p className="text-muted">Your coupon has been added to your wallet.</p>
                    <Button
                        variant="primary"
                        size="lg"
                        className="mt-3 w-100"
                        onClick={() => navigate('/my-coupons')}
                    >
                        Go to My Wallet
                    </Button>
                </Modal.Body>
            </Modal>
        </div>
    );
}