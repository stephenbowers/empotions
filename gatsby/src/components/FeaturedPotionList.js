import React from 'react';
import styled from 'styled-components';
import SinglePotion from '../components/SinglePotion';

const FeaturedPotionGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 1fr auto;

    h2 {
        font-size: 2.5rem;
    }
    p {
        font-size: 2rem;
    }

    @media (max-width: 400px) {
      grid-template-columns: minmax(300px, 1fr);
    }
`;

export default function FeaturedPotionList({ potions }) {
    return (
        <FeaturedPotionGridStyles>
        {potions.map(potion => (
            <SinglePotion height={300} potion={potion} key={potion.id} />
        ))}
        </FeaturedPotionGridStyles>
    );
}