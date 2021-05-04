import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import formatMoney from '../utils/formatMoney';
import { GiPotionBall } from 'react-icons/gi';

const PotionStyles = styled.div`
display: grid;
@supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr auto;
}
grid-template-rows: var(--rows, subgrid); /* Sizing comes from PotionGridStyles div */
grid-row: span 4;
gap: 1rem;
h2,
p,
button {
    margin: 0;
}
`;

export default function SinglePotion({ potion }) {
    const price = (potion.price / 100).toFixed(2);
    const firstFour = potion.ingredients.slice(0,4)
    return (
        <PotionStyles>
            <Link to={`/potion/${potion.slug.current}`}>
                <h2>{potion.name} <GiPotionBall /> {formatMoney(potion.price)}</h2>
            </Link>
            <p>{firstFour.map(ingredient => ingredient.name).join(', ')}</p>
            <GatsbyImage
                image={potion.image.asset.gatsbyImageData}
                alt={potion.name}
                layout="constrained"
            />
            <button
                className="snipcart-add-item"
                data-item-id={potion.id}
                data-item-price={price}
                data-item-url={`/potions`}
                data-item-image={potion.image && potion.image.asset.url}
                data-item-name={potion.name}
                data-item-description={potion.description}
            >
                Add to Cart
            </button>
        </PotionStyles>
    );
}