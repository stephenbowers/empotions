import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

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
                
                <h3>Areas of Expertise</h3>
                <ul>
                    {employee.specialties.map((specialty, i) => (
                            <li key={i}>{specialty}</li>
                    ))}
                </ul>

                <h3>Connect</h3>
                <ul>
                    <li><FaFacebook /><a href={`https://www.facebook.com/${employee.facebook}`}>{employee.facebook}</a></li>
                    <li><FaTwitter /><a href={`https://www.twitter.com/${employee.twitter}`}>{employee.twitter}</a></li>
                    <li><FaPinterest /><a href={`https://www.pinterest.com/${employee.pinterest}`}>{employee.pinterest}</a></li>
                </ul>
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
            specialties
            facebook
            pinterest
            twitter
            image {
                asset {
                    gatsbyImageData(height: 500, placeholder: BLURRED)
                }
            }
        }
    }
`;