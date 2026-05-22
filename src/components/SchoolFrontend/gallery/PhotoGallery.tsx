import React, { useState } from 'react';
import { Container, Row, Col, Modal, Carousel } from 'react-bootstrap';
import { Images } from 'react-bootstrap-icons'; // Icon for the header
import './PhotoGallery.css'; // Import custom CSS for styling

// Define the structure for gallery items
interface GalleryItem {
  id: number;
  src: string; // Path to the image
  alt: string;
}

// Dummy Data for Gallery (Must match the images in your public folder)
const galleryImages: GalleryItem[] = [
  { id: 1, src: '/images/gallery/gallery-img-1.jpg', alt: 'Students in classroom discussion' }, // Tall/Square Image
  { id: 2, src: '/images/gallery/gallery-img-2.jpg', alt: 'Students in a lecture hall' },    // Wide Image
  { id: 3, src: '/images/gallery/gallery-img-3.jpg', alt: 'Student sitting outdoors with laptop' },// Tall/Square Image
  { id: 4, src: '/images/gallery/gallery-img-4.jpg', alt: 'Students studying at a table' }, // Wide Image
  { id: 5, src: '/images/gallery/gallery-img-5.jpg', alt: 'Students walking in a hallway' },// Tall/Square Image
  { id: 6, src: '/images/gallery/gallery-img-6.jpg', alt: 'Students walking outdoors' },     // Tall/Square Image
];

const PhotoGallery: React.FC = () => {
  // State for controlling the lightbox modal
  const [showModal, setShowModal] = useState(false);
  // State for tracking which image is currently selected/active in the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler to open the modal to a specific image index
  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  // Handler for closing the modal
  const handleClose = () => setShowModal(false);

  // Handler for changing the carousel slide (Bootstrap Carousel requires this)
  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  // Function to determine CSS class for masonry layout based on index (simulating the image)
  const getMasonryClass = (id: number) => {
    switch (id) {
      case 1:
      case 4:
      case 5:
        return 'col-lg-4 col-md-6'; // Standard size
      case 2:
        return 'col-lg-4 col-md-6'; // Wider image (takes 2/3 of space on desktop)
      case 3:
      case 6:
        return 'col-lg-4 col-md-6'; // Standard size
      default:
        return 'col-lg-4 col-md-6';
    }
  };

  return (
    <section className="photo-gallery-section py-5">
      <Container>
        {/* --- Section Header --- */}
        <div className="text-center mb-5 section-header">
          <p className="section-subtitle">
            <Images className="header-icon" /> GALLERY
          </p>
          <h2 className="section-title">Our Photo <span className="text-orange">Gallery</span></h2>
          <p className="section-description">
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout.
          </p>
        </div>

        {/* --- Image Grid (Masonry-like Layout) --- */}
        <Row className="gallery-grid justify-content-center">
          {galleryImages.map((item, index) => (
            <Col
              key={item.id}
              // The class logic below mimics the uneven size distribution shown in the image
              className={`${getMasonryClass(item.id)} mb-4 gallery-col`}
            >
              <div 
                className="gallery-item"
                onClick={() => openLightbox(index)} // Open lightbox on click
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="img-fluid gallery-image"
                />
                <div className="image-overlay">
                    <i className="bi bi-zoom-in"></i>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* --- Gallery Lightbox (Modal with Carousel) --- */}
      <Modal 
        show={showModal} 
        onHide={handleClose} 
        dialogClassName="gallery-modal-dialog"
        contentClassName="gallery-modal-content"
        centered 
        fullscreen // Make the modal take up the full screen space
      >
        <Modal.Body className="p-0">
          {/* Bootstrap Carousel for sliding */}
          <Carousel 
            activeIndex={activeIndex} 
            onSelect={handleSelect}
            interval={null} // Disable auto-slide
            indicators={false}
          >
            {galleryImages.map((item) => (
              <Carousel.Item key={item.id} className="carousel-item-custom">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <img
                    className="d-block modal-carousel-image"
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          
          {/* Custom Close Button */}
          <button className="modal-close-btn" onClick={handleClose}>
            &times;
          </button>

          {/* Custom Counter */}
          <div className="modal-counter">
            {activeIndex + 1} of {galleryImages.length}
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default PhotoGallery;