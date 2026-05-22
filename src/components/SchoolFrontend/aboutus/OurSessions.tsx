import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BusFrontFill, AwardFill, StarFill, Alphabet } from 'react-bootstrap-icons'; // Icons for the sessions
import './OurSessions.css'; // Import custom CSS for styling

// Define a type for a single session card item
interface SessionCardItem {
  id: number;
  icon: React.ElementType; // Icon component from react-bootstrap-icons
  title: string;
  time: string;
}

// Dummy Data for Session Cards
const sessionCardsData: SessionCardItem[] = [
  {
    id: 1,
    icon: BusFrontFill,
    title: 'Brain Train',
    time: '8.00am - 10.00am',
  },
  {
    id: 2,
    icon: AwardFill,
    title: 'Drawing & Paintings',
    time: '8.00am - 10.00am',
  },
  {
    id: 3,
    icon: StarFill,
    title: 'Alphabet Matching',
    time: '8.00am - 10.00am',
  },
  {
    id: 4,
    icon: Alphabet, // Or choose a more suitable icon if available
    title: 'Playland & Caffe',
    time: '8.00am - 10.00am',
  },
];

const OurSessions: React.FC = () => {
  return (
    <section className="our-sessions-section py-5">
      <div className="section-border-top"></div> {/* Dotted border top */}
      <Container>
        {/* Background decorative images */}
        <img src="/images/session-ele-1.png" alt="Decorative Cloud" className="session-ele-1" />
        <img src="/images/session-ele-2.png" alt="Decorative Paper Plane" className="session-ele-2" />

        <div className="text-center mb-5 section-header">
          <p className="section-subtitle">SESSION TIMES</p>
          <h2 className="section-title">Your kids Are <span className="text-white">100% Safe</span> at Our Care.</h2>
        </div>

        <Row className="justify-content-center session-cards-grid">
          {sessionCardsData.map((session) => (
            <Col lg={5} md={6} key={session.id} className="mb-4">
              <div className="session-card">
                <div className="session-info">
                  <h3 className="card-title">{session.title}</h3>
                  <p className="card-time">{session.time}</p>
                </div>
                <div className="session-icon-wrapper">
                  <session.icon className="session-icon" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="section-border-bottom"></div> {/* Dotted border bottom */}
    </section>
  );
};

export default OurSessions;