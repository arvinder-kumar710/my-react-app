import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { BlockquoteLeft } from 'react-bootstrap-icons'; // For the BlockquoteLeft icon
import './Testimonials.css'; // Import custom CSS for styling

// Define a type for a single testimonial
interface TestimonialItem {
  id: number;
  image: string; // Path to the testimonial image
  quote: string;
  name: string;
  title: string;
}

// Dummy Data for Testimonials
const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    image: '/images/testimonial1.jpg', // Replace with your image
    quote:
      "Suspendis Latam tempore optio lorem ispuet doloremque aut elus animi Suspendisse a elementum ante. Nunc aliquet tincidunt quam, non egestas arcu imperdiet et maecenas eu eros non nibh aliquet iaculis.",
    name: "JOANNA VILKTN",
    title: "LAWYTR",
  },
  {
    id: 2,
    image: '/images/testimonial2.jpg', // Replace with your image
    quote:
      "Laudantium totam tempore optio lorem ispuet doloremque aut elus animi Suspendisse a elementum ante. Nunc aliquet tincidunt quam, non egestas arcu imperdiet et maecenas eu eros non nibh aliquet iaculis.",
    name: "JOHN CASSADY",
    title: "ASTRONAUT",
  },
  {
    id: 3,
    image: '/images/testimonial3.jpg', // Another dummy testimonial
    quote:
      "This school has transformed my child's learning experience. The dedication of the teachers and the comprehensive curriculum are truly commendable. Highly recommend to all parents!",
    name: "MARIA RODRIGUEZ",
    title: "PARENT",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section py-5">
      <Container>

        <div className="testimonials-carousel-wrapper">
            <h2 className="text-center section-title mb-5">What Parents Think</h2>
          <Carousel
            interval={5000} // Auto-advance every 5 seconds
            controls={true} // Show next/prev arrows
            indicators={true} // Show bottom indicators (dots)
            prevIcon={<span className="carousel-control-prev-icon"><i className="bi bi-chevron-left"></i></span>}
            nextIcon={<span className="carousel-control-next-icon"><i className="bi bi-chevron-right"></i></span>}
          >
            {/* Split testimonials into pairs for each carousel item */}
            {testimonialsData.reduce<TestimonialItem[][]>((acc, curr, i) => {
              if (i % 2 === 0) {
                acc.push([curr]);
              } else {
                acc[acc.length - 1].push(curr);
              }
              return acc;
            }, []).map((pair, index) => (
              <Carousel.Item key={index} className="carousel-item-custom">
                <Row className="justify-content-center">
                  {pair.map((testimonial) => (
                    <Col md={6} key={testimonial.id} className="testimonial-card-col">
                      <div className="testimonial-card">
                        <div className="testimonial-header">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="testimonial-img"
                          />
                        </div>
                        <div className="testimonial-body">
                          <BlockquoteLeft className="quote-icon" /> {/* BlockquoteLeft icon */}
                          <p className="testimonial-quote">{testimonial.quote}</p>
                          <p className="testimonial-author">
                            <i className="bi bi-person-fill"></i> {testimonial.name}: <span className="testimonial-title">{testimonial.title}</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;