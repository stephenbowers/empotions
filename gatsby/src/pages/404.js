import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import empotions404 from '../assets/images/empotions404.svg';

const FourOhFourStyles = styled.div`
  display: flex;
  place-items: center;
  margin-bottom: 4rem;

  .image-container {
    max-width: 400px;
  }

  .image-container img {
    width: 100%
  }

  .message {
    font-size: 4rem;
  }

  @media (max-width: 950px) {
    .image-container {
      max-width: 350px;
    }
  }

  @media (max-width: 900px) {
    .message {
      font-size: 3rem;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
    text-align: center;
    
  }

  @media (max-width: 700px) {
    .image-container {
      max-width: 300px;
    }

    .message {
      font-size: 2.5rem;
    }
  }
`;

export default function FourOhFourPage() {

  return (
    <FourOhFourStyles>
    <SEO title={`Page Not Found`} />
    <div className="image-container">
      <img src={`${empotions404}`} alt="Bubbling potion with question mark"  />
    </div>
    <div className="message">
      <p>Recheck your recipe!<br></br>  We couldn't find what you're looking for!</p>
    </div>
    </FourOhFourStyles>
  );
}