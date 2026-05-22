import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Building,House,Tv } from "react-bootstrap-icons"; // Example icons
import './EducationCards.css'; // Import custom CSS for styling

// Define a type for a single education card Item

interface EducationCardsItem{
    id: number;
    image: string; // Path to the card's background image
    icon: React.ElementType; // Icon component from react-bootstrap-icons
    title: string;
    link: string; // URL for the "Learn More" arrow
}
// Dummy Data for Education Cards
const educationCardsData: EducationCardsItem[] = [
{
    id: 1,
    image: '/images/edu-card-1.jpg', // Replace with your image
    icon: House, // For Formal Tuition
    title: 'Formal Tuition',
    link: '#formal-tuition',
  },
  {
    id: 2,
    image: '/images/edu-card-2.jpg', // Replace with your image
    icon: Building, // For Learn and Play (representing a school/building)
    title: 'Learn and Play',
    link: '#learn-and-play',
  },
  {
    id: 3,
    image: '/images/edu-card-3.jpg', // Replace with your image
    icon: Tv, // For Online Class (representing a screen/TV)
    title: 'Online Class',
    link: '#online-class',
  },
   {
    id: 4,
    image: '/images/edu-card-4.jpg', // Replace with your image
    icon: Tv, // For Online Class (representing a screen/TV)
    title: 'Online Class',
    link: '#online-class',
  },
   {
    id: 5,
    image: '/images/edu-card-5.jpg', // Replace with your image
    icon: Tv, // For Online Class (representing a screen/TV)
    title: 'Online Class',
    link: '#online-class',
  },
   {
    id: 6,
    image: '/images/edu-card-6.jpg', // Replace with your image
    icon: Tv, // For Online Class (representing a screen/TV)
    title: 'Online Class',
    link: '#online-class',
  },
];

const EducationCards: React.FC = () => {
 return (
      <section className="education-cards-section py-5">
       <Container>
        <div className="text-center mb-5">
          <p className="section-subtitle">CHOOSE US</p>
          <h2 className="section-title">Education <span className="text-orange">For Kids</span></h2>
        </div>
        <Row className="justify-content-center">
         {educationCardsData.map((card) => (
          <Col lg={4} md={6} key={card.id} className="mb-4">
            <div className="education-card">
                <div className="card-image-wrapper">
                   <img
                    src={card.image}
                    alt={card.title}
                    className="img-fluid card-image"
                   />
                </div>
                <div className="card-content">
                  <div className="icon-and-arrow">
                   <div className="card-icon-wrapper">
                     <card.icon className="card-icon" />
                   </div>
                   <a href={card.link} className="learn-more-arrow">
                     <i className="bi bi-arrow-right"></i>
                   </a>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                </div>

            </div>
          </Col>
         ))}
        </Row>
       </Container>
      </section>
 );
};
export default EducationCards;