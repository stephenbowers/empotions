import { graphql } from "gatsby";
import React from "react";
import EmployeeList from "../components/EmployeeList";
import SEO from "../components/SEO";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const AboutStyles = styled.div`
  .history {
    margin-left: 10rem;
    margin-right: 10rem;
  }
`;

const ServicesStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`;

export default function AboutPage({ data }) {
  const employees = data.employees.nodes;
  return (
    <>
    <SEO title={`About Us`} />
    <AboutStyles>
      <h2 className="center">The Origins of EmPotions</h2>
      <p className="history">
        EmPotions is founded on the passion to heal through nature and magic.  The building sits where a medical clinic once stood in the 1600s.  It is a space with a history of pain and healing.  We have atuned ourselves with the spirits of that past that still wander the area.  Many guests of the cemetary across the street pay us visits.
      </p>
      <p className="center"><strong>Ask about our séance party rates!</strong></p>
      <StaticImage 
        src="../assets/images/about-banner.jpeg"
        alt="Candles and crystals on ornate table"
        placeholder="blurred"
        width={1000}
        height={200}
      />
      <h2 className="center">In Store Services</h2>
      <ServicesStyles>
        <span>Palm Reading</span>
        <span>Tarot Reading</span>
        <span>Aura Reading</span>
        <span>Reflexology</span>
        <span>Acupuncture</span>
        <span>Aroma Therapy</span>
      </ServicesStyles>
      <EmployeeList employees={employees} />
    </AboutStyles>
    </>
  );
};

export const query = graphql`
  query EmployeeQuery {
    employees: allSanityPerson {
      nodes {
        name
        id
        description
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(height: 400, width: 400, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;