import React from 'react';
import styled from 'styled-components';
import SinglePotion from '../components/SinglePotion';

const FeaturedPotionGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 1fr auto;

    h2 {
        font-size: 2.5rem;
    }
    p {
        font-size: 2rem;
    }

    img {
        max-height: 100%;
        width: auto;
        margin-left: auto;
        margin-right: auto;
    }
`;

export default function FeaturedPotionList({ potions }) {
    return (
        <FeaturedPotionGridStyles>
        {potions.map(potion => (
            <SinglePotion potion={potion} key={potion.id} />
        ))}
        </FeaturedPotionGridStyles>
    );
}