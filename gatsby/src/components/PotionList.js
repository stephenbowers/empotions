import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const PotionGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 500px;
`;

const PotionStyles = styled.div`
    display: grid;
    @supports not (grid-template-rows: subgrid) {
        --rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid); /* Sizing comes from PotionGridStyles div */
    grid-row: span 3;
    gap: 1rem;
    h2,
    p {
        margin: 0;
    }
`;

function SinglePotion({ potion }) {
    return (
        <PotionStyles>
            <Link to={`/potion/${potion.slug.current}`}>
                <h2>{potion.name} - {potion.price}</h2>
            </Link>
            <p>{potion.ingredients.map(ingredient => ingredient.name).join(', ')}</p>
            <GatsbyImage image={potion.image.asset.gatsbyImageData} alt={potion.name} />
        </PotionStyles>
    );
}

export default function PotionList({ potions }) {
    return (
        <PotionGridStyles>
        {potions.map(potion => (
            <SinglePotion potion={potion} key={potion.id} />
        ))}
        </PotionGridStyles>
    );
}