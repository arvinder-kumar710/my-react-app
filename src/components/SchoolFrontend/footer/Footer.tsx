import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css'; // Import custom CSS for styling

// Use React.FC for functional component typing
const Footer: React.FC = () => {
  // Simple state for the newsletter email
  const [email, setEmail] = React.useState('');

  // FIX: Explicitly type 'e' as a React.FormEvent (or React.MouseEvent for a button click)
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribing with: ${email}`);
      // ... (Backend logic remains commented)
      setEmail(''); // Clear input after "subscription"
    } else {
      alert('Please enter your email to subscribe.');
    }
  };

  return (
    <footer className="eduka-footer">
      <Container>
        <Row className="footer-content py-5">
          {/* Column 1: Logo and Description */}
          <Col md={12} lg={4} className="mb-4 mb-lg-0">
            <div className="footer-logo mb-3">
              <img
                src="/images/eduka-logo-white.png" // Path to your logo (e.g., in public folder)
                alt="Eduka Logo"
                height="40"
                className="d-inline-block align-middle me-2"
              />
              <span className="logo-text">eduka</span>
            </div>
            <p className="footer-description pe-lg-4 mb-4">
              We are many variations of passages available but the majority
              have suffered alteration in some form by injected humour words believable.
            </p>
            <ul className="list-unstyled footer-contact-list">
              <li>
                <i className="bi bi-telephone-fill me-3"></i> +2 123 654 7898
              </li>
              <li>
                <i className="bi bi-geo-alt-fill me-3"></i> 25/B Milford Road, New York
              </li>
              <li>
                <i className="bi bi-envelope-fill me-3"></i> info@example.com
              </li>
            </ul>
          </Col>

          {/* Column 2: Quick Links */}
          <Col md={6} lg={2} className="mb-4 mb-lg-0">
            <h5 className="footer-heading mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#about"><i className="bi bi-chevron-right me-2"></i> About Us</a></li>
              <li><a href="#faqs"><i className="bi bi-chevron-right me-2"></i> FAQ's</a></li>
              <li><a href="#testimonials"><i className="bi bi-chevron-right me-2"></i> Testimonials</a></li>
              <li><a href="#terms"><i className="bi bi-chevron-right me-2"></i> Terms Of Service</a></li>
              <li><a href="#privacy"><i className="bi bi-chevron-right me-2"></i> Privacy policy</a></li>
              <li><a href="#update-news"><i className="bi bi-chevron-right me-2"></i> Update News</a></li>
            </ul>
          </Col>

          {/* Column 3: Our Campus */}
          <Col md={6} lg={3} className="mb-4 mb-lg-0">
            <h5 className="footer-heading mb-4">Our Campus</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#campus-safety"><i className="bi bi-chevron-right me-2"></i> Campus Safety</a></li>
              <li><a href="#student-activities"><i className="bi bi-chevron-right me-2"></i> Student Activities</a></li>
              <li><a href="#academic-dept"><i className="bi bi-chevron-right me-2"></i> Academic Department</a></li>
              <li><a href="#planning-admin"><i className="bi bi-chevron-right me-2"></i> Planning & Administration</a></li>
              <li><a href="#chancellor-office"><i className="bi bi-chevron-right me-2"></i> Office Of The Chancellor</a></li>
              <li><a href="#facility-services"><i className="bi bi-chevron-right me-2"></i> Facility Services</a></li>
            </ul>
          </Col>

          {/* Column 4: Newsletter */}
          <Col md={12} lg={3}>
            <h5 className="footer-heading mb-4">Newsletter</h5>
            <p className="newsletter-text mb-3">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>
            <Form onSubmit={handleSubscribe}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button type="submit" className="subscribe-btn w-100">
                SUBSCRIBE NOW <i className="bi bi-send-fill ms-2"></i>
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Copyright and Social Media */}
        <Row className="footer-bottom py-3 align-items-center">
          <Col md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="copyright-text mb-0">
              © Copyright 2023 <span className="text-warning">Eduka</span> All Rights Reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;