import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const PotionGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export default function SinglePotionPage({ data }) {
    const potion = data.potion;
    return (
        <PotionGrid>
            <GatsbyImage image={potion.image.asset.gatsbyImageData} alt={potion.name} />
            <div>
                <h2>{potion.name}</h2>
                <ul>
                    {potion.ingredients.map(ingredient => (
                        <li key={ingredient.id}>{ingredient.name}</li>
                    ))}
                </ul>
            </div>
        </PotionGrid>
    );
};

// This needs to be dynamic based on slug passed in via context in gatsby-node
export const query = graphql`
    query($slug: String!) {
        potion: sanityPotion(slug: {
            current: { eq: $slug }
        }) {
            name
            id
            image {
                asset {
                    gatsbyImageData(width: 800, placeholder: BLURRED)
                }
            }
            ingredients {
                name
                id
                vegan
            }
        }
    }
`;