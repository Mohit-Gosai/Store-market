import React from 'react'
import { Carousel, Button, Badge } from 'react-bootstrap';
import localBusiness from '../assets/local-business.png';
import salesOffer from '../assets/salesOffer.jpg';
import newArea from '../assets/newArea.jpg';
import newEvents from '../assets/newEvents.jpg';
import storeMarket from '../assets/Store-Market.jpg';

export default function MyCarousel() {
    const slides = [
        { title: "Welcome to Store Market", text: "Your bridge to the best local shopping experiences.", img: {storeMarket}, badge: "Official Launch" },
        { title: "Empowering Local Business", text: "Support neighborhood shops and grow together with exclusive digital coupons.", img: {localBusiness}, color: "text-warning" },
        { title: "Today's Mega Offers", text: "Flash sales are live! Get up to 50% off on your favorite electronics and fashion.", img: {salesOffer}, button: true },
        { title: "What's New In Your Area?", text: "Discover over 10+ newly registered stores in your local sector this week.", img: {newArea} },
        { title: "Upcoming Events & Deals", text: "Join the Weekend Flea Market. Best deals guaranteed by local vendors!", img: {newEvents}, color: "text-info" }
    ];

    return (
        <Carousel 
            className="rounded-4 shadow overflow-hidden" 
            style={{ minHeight: '400px', height: 'auto' }} // Changed to allow expansion if text is long
        >
            {slides.map((slide, idx) => (
                <Carousel.Item key={idx} style={{ height: '450px' }}> {/* Increased height to prevent cramping */}
                    <img 
                        className="d-block w-100 h-100" 
                        style={{ objectFit: 'cover' }} 
                        src={slide.img} 
                        alt={slide.title} 
                    />
                    {/* Darker overlay for better text contrast */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-60"></div>
                    
                    <Carousel.Caption className="h-100 d-flex flex-column justify-content-center align-items-center px-4">
                        <div style={{ maxWidth: '800px' }} className="text-center">
                            {slide.badge && <Badge bg="primary" className="mb-3 px-3 py-2">{slide.badge}</Badge>}
                            
                            <h1 className={`fw-bold ${slide.color || 'text-white'} display-5 fs-2 fs-md-1 mb-3`}>
                                {slide.title}
                            </h1>
                            
                            <p className="fs-5 fs-md-4 opacity-90 mb-4 d-md-block">
                                {slide.text}
                            </p>
                            
                            {slide.button && (
                                <Button variant="primary" size="lg" className="px-4 py-2 fw-bold shadow">
                                    View Deals
                                </Button>
                            )}
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}