import React, { useState } from 'react';
import { Form, Button, Card, InputGroup } from 'react-bootstrap';

export default function CreateCoupon() {
    return (
        <Card className="shadow-sm border-0 p-4">
            <h4 className="fw-bold mb-4">Create New Discount Offer</h4>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Offer Title</Form.Label>
                    <Form.Control type="text" placeholder="e.g. 20% Off on All Sneakers" />
                </Form.Group>

                <div className="d-flex gap-3 mb-3">
                    <Form.Group className="flex-grow-1">
                        <Form.Label>Discount Value (%)</Form.Label>
                        <Form.Control type="number" placeholder="20" />
                    </Form.Group>
                    <Form.Group className="flex-grow-1">
                        <Form.Label>Coupon Cost (₹)</Form.Label>
                        <Form.Control type="number" placeholder="49" />
                    </Form.Group>
                </div>

                <Form.Group className="mb-4">
                    <Form.Label>Terms & Conditions</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Valid on orders above ₹1000..." />
                </Form.Group>

                <Button variant="primary" className="px-5">Launch Coupon</Button>
            </Form>
        </Card>
    );
}