import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Image } from 'react-bootstrap';


export default function StoreProfile({ store }) {
    const [postContent, setPostContent] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            content: postContent,
            likes: 0,
            timestamp: "Just now"
        };
        // Logic to update allStores state with the new post
        setPostContent("");
    };

    return (
        <Container className="py-4">
            {/* Store Header Info */}
            <Card className="border-0 shadow-sm mb-4 rounded-4 overflow-hidden">
                <div style={{height: '200px', backgroundColor: '#007bff'}}></div>
                <Card.Body className="position-relative pt-5">
                    <Image 
                        src={store.image} 
                        roundedCircle 
                        className="position-absolute translate-middle-y border border-4 border-white"
                        style={{top: '0', left: '40px', width: '120px', height: '120px', objectFit: 'cover'}}
                    />
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <div>
                            <h2 className="fw-bold mb-0">{store.name}</h2>
                            <p className="text-muted">{store.location} • {store.followers} Followers</p>
                        </div>
                        <Button variant="primary" className="rounded-pill px-4">Follow</Button>
                    </div>
                </Card.Body>
            </Card>

            <Row>
                <Col md={8}>
                        <Card className="mb-4 border-0 shadow-sm p-3">
                            <Form onSubmit={handlePost}>
                                <Form.Control 
                                    as="textarea" 
                                    placeholder="Share an update or new offer with your customers..." 
                                    className="border-0 bg-light mb-2"
                                    value={postContent}
                                    onChange={(e) => setPostContent(e.target.value)}
                                />
                                <div className="d-flex justify-content-end">
                                    <Button type="submit" size="sm" className="rounded-pill">Post Update</Button>
                                </div>
                            </Form>
                        </Card>
                    

                    {/* The Feed */}
                    <h5 className="fw-bold mb-3">Store Updates</h5>
                    {store.posts?.map(post => (
                        <Card key={post.id} className="mb-3 border-0 shadow-sm rounded-4">
                            <Card.Body>
                                <p>{post.content}</p>
                                <hr className="opacity-10" />
                                <div className="d-flex gap-4 text-muted">
                                    <span style={{cursor: 'pointer'}}><i className="bi bi-heart me-1"></i> {post.likes}</span>
                                    <span style={{cursor: 'pointer'}}><i className="bi bi-chat me-1"></i> Comment</span>
                                    <span style={{cursor: 'pointer'}}><i className="bi bi-share me-1"></i> Share</span>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
                
                <Col md={4}>
                    <Card className="border-0 shadow-sm p-3 mb-3">
                        <h6 className="fw-bold">About Us</h6>
                        <p className="small text-muted">{store.description}</p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}