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
        <Title>Contact Us</Title>
        <Description>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos facere temporibus ad quisquam? Molestias, iusto. Ipsum officiis necessitatibus alias perspiciatis rem possimus illum quis vero ad, eos consequuntur in qui voluptate?consectetur,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo illo dicta quidem. adipisicing elit. At necessitatibus perferendis explicabo dolorum officia magnam repudiandae accusamus. Ea, ducimus corporis ad dolorum totam quibusdam tenetur accusantium aliquam labore, aliquid voluptas eveniet reprehenderit corrupti optio!
        </Description>
        <Link to="/services">
        <Button>Services</Button>
        </Link>
        <Link to="/contactus">
        <Button>About Us</Button>
        </Link>
      </AboutUsContainer>
    </AboutUsSection>
  );
};

export default AboutUs;