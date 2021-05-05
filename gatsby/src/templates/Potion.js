import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import formatMoney from '../utils/formatMoney';
import { GiPotionBall } from 'react-icons/gi';

const PotionGrid = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    img {
        max-height: 100%;
        width: auto;
        margin-left: auto;
        margin-right: auto;
    }

    li {
        list-style: none;
        margin-left: 2rem;
    }

    button {
        width: 100%;
    }
`;

export default function SinglePotionPage({ data }) {
    const potion = data.potion;
    const price = (potion.price / 100).toFixed(2);
    return (
        <>
        <SEO title={potion.name} image={potion.image?.asset?.url} />
        <PotionGrid>
            <GatsbyImage 
                image={potion.image.asset.gatsbyImageData}
                alt={potion.name}
                layout="constrained"
                />
            <div>
                <h2>{potion.name} <GiPotionBall /> {formatMoney(potion.price)}</h2>
                <p>{potion.description}</p>
                <ul>
                    <h3>Active Ingredients:</h3>
                    {potion.ingredients.map(ingredient => (
                        <li key={ingredient.id}>{ingredient.name}</li>
                    ))}
                </ul>
                <button
                    className="snipcart-add-item"
                    data-item-id={potion.id}
                    data-item-price={price}
                    data-item-url={`/potion/${potion.slug.current}`}
                    data-item-image={potion.image && potion.image.asset.url}
                    data-item-name={potion.name}
                    data-item-description={potion.description}
                >
                    Add to Cart
                </button>
            </div>
        </PotionGrid>
        </>
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
            price
            description
            slug {
                current
            }
            image {
                asset {
                    url
                    gatsbyImageData(
                        width: 300,
                        placeholder: BLURRED,
                        formats: [AUTO, WEBP, AVIF]
                    )
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