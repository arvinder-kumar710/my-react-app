import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { PlayFill, Youtube } from 'react-bootstrap-icons'; // Play icon, Youtube icon for header
import './LatestVideo.css'; // Import custom CSS for styling

const LatestVideo: React.FC = () => {
  // State for controlling the video modal
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Example YouTube video ID (replace with your actual video ID)
  const youtubeVideoId = 'ckHzmP1evNU'; // Rick Astley - Never Gonna Give You Up (replace with actual content!)

  const handleOpenVideo = () => setShowVideoModal(true);
  const handleCloseVideo = () => setShowVideoModal(false);

  return (
    <section className="latest-video-section py-5">
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Left Column: Text Content and Button */}
          <Col lg={5} md={7} className="text-content-column mb-4 mb-lg-0">
            <p className="section-subtitle">
              <Youtube className="header-icon" /> LATEST VIDEO
            </p>
            <h2 className="section-title">
              Let's Check Our <br /><span className="text-orange">Latest Video</span>
            </h2>
            <p className="section-description mb-4">
              There are many variations of passages available but the majority have suffered alteration
              in some form by injected humour look even slightly believable.
            </p>
            <Button variant="warning" className="learn-more-btn">
              LEARN MORE <i className="bi bi-arrow-right ms-2"></i>
            </Button>
          </Col>

          {/* Right Column: Video Thumbnail with Play Button */}
          <Col lg={7} md={9} className="video-column">
            <div className="video-thumbnail-wrapper">
              <img
                src="/images/latest-video-thumbnail.jpg" // Replace with your video thumbnail image
                alt="Students studying in a library"
                className="img-fluid video-thumbnail"
              />
              <div className="play-button-overlay" onClick={handleOpenVideo}>
                <PlayFill className="play-icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Video Play Modal */}
      <Modal
        show={showVideoModal}
        onHide={handleCloseVideo}
        size="lg" // Large modal
        centered
        className="video-play-modal"
      >
        <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>
        <Modal.Body className="p-0">
          <div className="video-responsive">
            <iframe
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default LatestVideo;