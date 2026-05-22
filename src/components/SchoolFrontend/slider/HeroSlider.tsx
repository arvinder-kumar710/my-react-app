import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './HeroSlider.css'; // Import custom CSS

// Assuming you have a background image for the slide
// You might need to import it or place it in the public folder.
// For this example, we'll use a dynamic style for the background.

const HeroSlider = () => {
  const slidesData = [
    {
      id: 1,
      title: "Start Your Beautiful And Bright Future",
      subtitle: "WELCOME TO EDUKA!",
      text: "There are many variations of passages orem psum available but the majority have suffered alteration in some repeat predefined chunks form injected humour.",
      // You would replace 'url-to-your-image-1' with the actual path
      // Note: For a true dark overlay, the image itself should be dark,
      // or we'll use a CSS pseudo-element.
      image: 'slider-1.jpg' // Placeholder path
    },
      {
      id: 2,
      title: "Start Your Beautiful And Bright Future",
      subtitle: "WELCOME TO EDUKA!",
      text: "There are many variations of passages orem psum available but the majority have suffered alteration in some repeat predefined chunks form injected humour.",
      // You would replace 'url-to-your-image-1' with the actual path
      // Note: For a true dark overlay, the image itself should be dark,
      // or we'll use a CSS pseudo-element.
      image: 'slider-2.jpg' // Placeholder path
    },
    // You can add more slides here
  ];

  return (
    <div className="eduka-slider-container">
      <Carousel controls={true} indicators={false} interval={5000}>
        {slidesData.map((slide) => (
          <Carousel.Item key={slide.id} className="hero-slide-item">
            {/* The image is set as a background in CSS for better overlay control */}
            <div className="hero-slide-content-wrapper" 
                 style={{ backgroundImage: `url(${slide.image})` }}>

              {/* Custom Content Layer */}
              <div className="container h-100 d-flex align-items-center">
                <div className="slider-text-box">
                  <p className="slider-subtitle">
                    <i className="bi bi-book-half"></i> {/* Example icon, requires Bootstrap Icons */}
                    {slide.subtitle}
                  </p>
                  <h1 className="slider-title">
                    {/* The logic for splitting and highlighting the word "Bright" */}
                    {slide.title.split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word === 'Bright' ? <span className="highlight">{word}</span> : word}
                        {' '}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="slider-text">{slide.text}</p>
                  <div className="slider-buttons">
                    <Button variant="warning" className="custom-btn-orange">
                      ABOUT MORE <i className="bi bi-arrow-right"></i>
                    </Button>
                    <Button variant="light" className="custom-btn-white">
                      LEARN MORE <i className="bi bi-arrow-right"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSlider;