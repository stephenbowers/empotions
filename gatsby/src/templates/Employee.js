import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const SingleEmployeeStyles = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    div {
        margin-left: 2rem;
    }
    margin-bottom: 2rem;
`;

export default function SingleEmployeePage({ data }) {
    const employee = data.employee;
    return (
        <SingleEmployeeStyles>
            <GatsbyImage image={employee.image.asset.gatsbyImageData} alt={employee.name} />
            <div>
                <h2>{employee.name}</h2>
                <p>{employee.description}</p>
            </div>
        </SingleEmployeeStyles>
    );
}

export const query = graphql`
    query($slug: String!) {
        employee: sanityPerson(slug: {
            current: { eq: $slug }
        }) {
            name
            id
            description
            image {
                asset {
                    gatsbyImageData(height: 500, placeholder: BLURRED)
                }
            }
        }
    }
`;