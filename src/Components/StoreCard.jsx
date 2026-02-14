import React from 'react'
import { Col, Badge, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function StoreCard({id, image, rating, category, name, location}) {
    return (
        <>
            <Col key={id}>
                <Card className="h-100 border-0 shadow-sm store-card">
                    <div className="position-relative">
                        <Card.Img variant="top" src={image} style={{ height: '160px', objectFit: 'cover' }} />
                        <Badge bg="dark" className="position-absolute top-0 end-0 m-2">
                            {rating} ★
                        </Badge>
                    </div>
                    <Card.Body>
                        <Badge bg="secondary" className="mb-2">{category}</Badge>
                        <Card.Title className="h6 fw-bold">{name}</Card.Title>
                        <Card.Text className="small text-muted mb-0">
                            <i className="bi bi-geo-alt"></i> {location}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0">
                        <Link to={`/store/${id}`} className="btn btn-outline-primary w-100 btn-sm">Visit Store</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}
