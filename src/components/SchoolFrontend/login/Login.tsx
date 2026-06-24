import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { LockFill, Envelope } from 'react-bootstrap-icons'; // Icons for the form
import './Login.css'; // Import custom CSS for the unique styles

const Login: React.FC = () => {
    const navigate = useNavigate();
    // Default values are set here, which might be why they appear in the input fields
    const [email, setEmail] = useState(''); // Changed default to empty for production
    const [password, setPassword] = useState(''); // Changed default to empty for production
    const [error, setError] = useState('');
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(API_BASE_URL+'/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                if (data.role === 'admin') {
                    localStorage.setItem("isAuthenticated", "true");
                    navigate('/dashboard');
                } else {
                    setError('Access denied: Not an administrator.');
                }
            } else {
                // Assuming data.message contains the error message from the backend
                setError(data.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error("Login Server Error:", err);
            setError('Server connection error. Please try again.');
        }
    };

    return (
        // min-h-screen, bg-gray-100 equivalent in custom CSS/Bootstrap utilities
        <div className="login-page-wrapper d-flex align-items-center justify-content-center min-vh-100">
            <Container className="p-0">
                <div className="login-card shadow-lg">
                    <Row className="g-0">
                        {/* Left Side: Illustration Image */}
                        <Col 
                            md={6} 
                            className="d-none d-md-flex align-items-center justify-content-center login-image-col"
                        >
                            {/* The image from login.jpg: a woman smiling with books */}
                            <img
                                src="student.jpg" // Replace with actual path
                                alt="Smiling person holding books"
                                className="img-fluid login-main-image"
                            />
                        </Col>

                        {/* Right Side: Login Form */}
                        <Col md={6} className="p-5 login-form-col">
                            {/* Top Right Language Flag */}
                            <div className="text-end mb-4 language-flag">
                                <img src="hi-flag.png" alt="English" width="20" className="me-1" /> EN
                            </div>

                            {/* Company Logo and Title */}
                            <div className="d-flex align-items-center mb-4">
                                {/* Replace with your actual logo image */}
                                <div className="logo-placeholder me-2"></div> 
                                <span className="fs-5 fw-bold">Company Logo</span>
                            </div>

                            <h3 className="fs-5 fw-light mb-3">
                                Let the Journey Begin!
                            </h3>
                            <p className="text-muted small mb-4">
                                Unlock a world of education with a single click! Please login in to your account.
                            </p>

                            <Form onSubmit={handleLogin}>
                                {/* Email Address Field */}
                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label className="small text-muted">Email Address</Form.Label>
                                    <div className="input-group custom-input-group">
                                        <Form.Control
                                            type="email"
                                            placeholder="@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="custom-form-control"
                                        />
                                        <span className="input-group-text"><Envelope /></span>
                                    </div>
                                </Form.Group>

                                {/* Password Field */}
                                <Form.Group className="mb-4" controlId="formPassword">
                                    <Form.Label className="small text-muted">Password</Form.Label>
                                    <div className="input-group custom-input-group">
                                        <Form.Control
                                            type="password"
                                            placeholder="********"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="custom-form-control"
                                        />
                                        <span className="input-group-text"><LockFill /></span>
                                    </div>
                                </Form.Group>
                                
                                {/* Forgot Password Link */}
                                <div className="text-end mb-4">
                                    <a href="#" className="small text-info-blue forgot-link">Forgot Password?</a>
                                </div>

                                {/* Error Message */}
                                {error && <div className="text-danger small mb-3">{error}</div>}

                                {/* Login Button (Yellow/Gold) */}
                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    className="w-100 login-btn-custom py-3"
                                >
                                    Login
                                </Button>
                            </Form>

                            {/* Sign Up Link */}
                            <p className="mt-4 text-center small">
                                Don’t have an account? 
                                <a href="#" className="fw-bold sign-up-link ms-1">Sign Up For Free</a>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Login;