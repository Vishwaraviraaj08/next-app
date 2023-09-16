'use client';

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './formcss.css'

function Page() {

    const [formData, setFormData] = useState({
        title: '',
        date: new Date().toISOString().slice(0, 10),
        description: '',
        author: '',
        content: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
        window.location.href = `/${formData.title}`
    };

    return (
        <div className="container">
            <h3 className="mb-5" style={{color:"#00b4ff", fontFamily:'Consolas, monospace'}}>Create a New Post</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label style={{ fontFamily: 'Consolas, monospace' }} className={"h5"}>Title *</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        value={formData.title}
                        style={{ fontFamily: 'Consolas, monospace' }}
                        onChange={handleChange}
                        className="glowing-border mb-4 "
                        required
                    />

                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label style={{ fontFamily: 'Consolas, monospace' }} className={"h5"}>Description *</Form.Label>
                    <Form.Control
                        type="text"
                        name="description"
                        value={formData.description}
                        style={{ fontFamily: 'Consolas, monospace' }}
                        onChange={handleChange}
                        className="glowing-border mb-4"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label style={{ fontFamily: 'Consolas, monospace' }} className={"h5"}>Author *</Form.Label>
                    <Form.Control
                        type="text"
                        name="author"
                        value={formData.author}
                        style={{ fontFamily: 'Consolas, monospace' }}
                        onChange={handleChange}
                        className="glowing-border mb-4"
                        required
                    />
                </Form.Group>
                <Form.Group controlId="content">
                    <Form.Label style={{ fontFamily: 'Consolas, monospace' }} className={"h5"}>Content *</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        name="content"
                        value={formData.content}
                        style={{ fontFamily: 'Consolas, monospace' }}
                        onChange={handleChange}
                        className="glowing-border mb-4"
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Page;
