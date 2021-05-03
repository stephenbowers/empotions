import React from 'react';
import styled from 'styled-components';
import SinglePotion from '../components/SinglePotion';

const PotionGridStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    grid-auto-rows: auto auto 1fr auto;
`;

export default function PotionList({ potions }) {
    return (
        <PotionGridStyles>
        {potions.map(potion => (
            <SinglePotion potion={potion} key={potion.id} />
        ))}
        </PotionGridStyles>
    );
}