import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { CheckCircleFill, ArrowRight, TelephoneFill } from 'react-bootstrap-icons'; // Using react-bootstrap-icons
import './AboutUs.css'; // Import custom CSS for styling

const AboutUs: React.FC = () => {
  return (
    <section className="about-us-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Text Content and Buttons */}
          <Col lg={6} className="text-content-column mb-4 mb-lg-0">
            <p className="welcome-subtitle">WELCOME TO TECHEDU</p>
            <h2 className="section-title">Fable daycare, preschool, and kindergarten</h2>
            <p className="section-description mb-4">
              Come with us, we also teach children about the basic values of human beings as honesty,
              kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a
              spirit of understanding and tolerance and develop a positive regard and awareness of other
              people. They are taught the values and responsibilities needed to become active members of
              the community, something which the modern world is desperate for.
            </p>

            {/* Feature Buttons */}
            <Row className="feature-buttons mb-5">
              <Col md={6} className="mb-3">
                <Button variant="light" className="feature-btn w-100">
                  <CheckCircleFill className="me-2" /> Sports Training
                </Button>
              </Col>
              <Col md={6} className="mb-3">
                <Button variant="light" className="feature-btn w-100">
                  <CheckCircleFill className="me-2" /> Sports Training
                </Button>
              </Col>
              <Col md={6} className="mb-3">
                <Button variant="light" className="feature-btn w-100">
                  <CheckCircleFill className="me-2" /> Sports Training
                </Button>
              </Col>
              <Col md={6} className="mb-3">
                <Button variant="light" className="feature-btn w-100">
                  <CheckCircleFill className="me-2" /> Sports Training
                </Button>
              </Col>
            </Row>

            {/* Call to Action Buttons */}
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-start">
              <Button variant="warning" className="explore-btn me-sm-4 mb-3 mb-sm-0">
                Explore More <ArrowRight className="ms-2" />
              </Button>
              <div className="call-now-box">
                <div className="call-icon-wrapper me-3">
                  <TelephoneFill className="call-icon" />
                </div>
                <div>
                  <p className="mb-0 call-us-text">Call Us Now</p>
                  <p className="mb-0 phone-number">+208-555-0112</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Image */}
          <Col lg={6} className="image-column">
            {/* Image should be in your public folder or imported */}
            <img
              src="students.jpg" // Replace with your actual image path
              alt="Children studying and playing"
              className="img-fluid" // Makes image responsive
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;