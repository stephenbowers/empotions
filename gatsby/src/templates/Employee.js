import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function SingleEmployeePage({ data }) {
    const employee = data.employee;
    return (
        <div>
            <GatsbyImage image={employee.image.asset.gatsbyImageData} alt={employee.name} />
            <div>
                <h2>{employee.name}</h2>
                <p>{employee.description}</p>
            </div>
        </div>
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
                    gatsbyImageData(width: 800, placeholder: BLURRED)
                }
            }
        }
    }
`;