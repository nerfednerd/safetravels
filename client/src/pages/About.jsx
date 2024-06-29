import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const AboutUsSection = styled.section`
  background-color: #fff;
  color: #2c3e51;
  padding: 2rem;
  text-align: center;
`;

const AboutUsContainer = styled.div`
  min-height:63vh;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e51;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: #ffeb3b;
  color: #2c3e50;
  border: none;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fdd835;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsSection>
      <AboutUsContainer>
        <Title>About SaveMyTrip</Title>
        <Description>
        We are a passionate team of Gen Z students dedicated to ensuring smooth and safe journeys.   We provide a pleasant experience for our customers worldwide travelling in this vast land we call Incredible India. We aim to make travel in India beginner-friendly because we believe India is for everyone, both pros and beginners alike.
        </Description>
        <Link to="/services">
        <Button>Services</Button>
        </Link>
        <Link to="/contactus">
        <Button>Contact Us</Button>
        </Link>
      </AboutUsContainer>
    </AboutUsSection>
  );
};

export default AboutUs;