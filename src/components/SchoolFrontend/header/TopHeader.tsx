import { Container, Row, Col } from "react-bootstrap";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <Container fluid className="p-0">
        <Row className="g-0 align-items-center">
          {/* LEFT SIDE */}
          <Col md={4} className="top-header-left d-flex align-items-center justify-content-center justify-content-md-start">
            <span className="follow-text">Follow Us:</span>
            <div className="social-icons ms-3">
              <a href="https://facebook.com" className="social-icon-head" target="_blank" rel="noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com" className="social-icon-head" target="_blank" rel="noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com" className="social-icon-head" target="_blank" rel="noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://whatsapp.com" className="social-icon-head" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={8} className="top-header-right d-flex align-items-center justify-content-center justify-content-md-end">
            <div className="contact-info d-flex flex-wrap justify-content-center justify-content-md-end">
              <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i> 25/B Milford Road, New York
              </div>
              <div className="separator"></div>
              <div className="contact-item">
                <i className="bi bi-envelope-fill"></i> info@example.com
              </div>
              <div className="separator"></div>
              <div className="contact-item">
                <i className="bi bi-telephone-fill"></i> +2 123 654 7898
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;
