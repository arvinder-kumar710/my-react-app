import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons'; // Icon for the teal badge
import './OurTeachers.css'; // Import custom CSS for styling

// Define a type for a single teacher card item
interface TeacherCardItem {
  id: number;
  image: string; // Path to the teacher's profile image
  name: string;
  title: string;
}

// Dummy Data for Teacher Cards
const teacherCardsData: TeacherCardItem[] = [
  {
    id: 1,
    image: '/images/01.jpg', // Replace with your image
    name: 'Angela T. Vigil',
    title: 'ASSOCIATE PROFESSOR',
  },
  {
    id: 2,
    image: '/images/02.jpg', // Replace with your image
    name: 'Frank A. Mitchell',
    title: 'ASSOCIATE PROFESSOR',
  },
  {
    id: 3,
    image: '/images/03.jpg', // Replace with your image
    name: 'Susan D. Lunsford',
    title: 'CEO & FOUNDER',
  },
  {
    id: 4,
    image: '/images/04.jpg', // Replace with your image
    name: 'Dennis A. Pruitt',
    title: 'ASSOCIATE PROFESSOR',
  },
];

const OurTeachers: React.FC = () => {
  return (
    <section className="our-teachers-section py-5">
      <Container>
        <div className="text-center mb-5 section-header">
          <p className="section-subtitle">OUR TEACHERS</p>
          <h2 className="section-title">Meet With Our <span className="text-orange">Teachers</span></h2>
          <p className="section-description">
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout.
          </p>
        </div>

        <Row className="justify-content-center">
          {teacherCardsData.map((teacher) => (
            <Col lg={3} md={6} sm={6} key={teacher.id} className="mb-4 d-flex justify-content-center">
              <div className="teacher-card">
                <div className="card-image-wrapper">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-name">{teacher.name}</h3>
                  <p className="card-title">{teacher.title}</p>
                  
                  {/* Teal Badge */}
                  <div className="teacher-badge">
                    <CheckCircleFill className="badge-icon" />
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default OurTeachers;