import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import FeaturedPotionList from "../components/FeaturedPotionList";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const HomeStyles = styled.div`
  .hero img {
    margin: auto;
  }

  .welcome {
    font-size: 4rem;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;

const FeaturedPotionsStyles = styled.div`
  .title {
    text-align: center;
    margin-bottom: 4rem;
  }
  margin-bottom: 2rem;
`;

export default function HomePage({ data }) {
  const potions = data.potions.nodes;
  console.log(`Home Page data is ${potions}`)
  return (
    <HomeStyles>
      <SEO title={`Home`} />
      <StaticImage 
        src="../assets/images/hero.jpeg"
        alt="Witchy Crystals and Modern Mystics patch"
        placeholder="blurred"
        layout="fullWidth"
      />
      <p className="welcome">Welcome to EmPotions where we harness emotional alchemy to heal your body and soul!</p>
      <FeaturedPotionsStyles>
        <h2 className="title">Featured Potions</h2>
        <FeaturedPotionList potions={potions} />
      </FeaturedPotionsStyles>
    </HomeStyles>
  );
}

export const query = graphql`
  query FeaturedPotionsQuery {
  potions: allSanityPotion(filter: {featured: {eq: true}}, limit: 4) {
    nodes {
      id
      name
      price
      slug {
        current
      }
      image {
        asset {
          url
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      ingredients {
        id
        name
      }
    }
  }
}
`;