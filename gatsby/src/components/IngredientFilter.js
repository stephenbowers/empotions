import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const IngredientsStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0 1rem;
        align-items: center;
        padding: 5px;
        background: var(--grey);
        border-radius: 2px;
        .count {
            background: white;
            padding: 2px 5px;
        }
        &[aria-current='page'] {
            background: var(--yellow);
        }
    }
`;

function countPotionsInIngredients(potions) {
    // Return the potions with counts
    const counts = potions
        .map(potion => potion.ingredients)
        .flat()
        .reduce((acc, ingredient) => {
            // Check if this is an exisitng ingredient
            const existingIngredient = acc[ingredient.id];
            if(existingIngredient) {
                // If so, inc by 1
                existingIngredient.count += 1;
            } else {
            // Else, create new entry in acc and set to 1
                acc[ingredient.id] = {
                    id: ingredient.id,
                    name: ingredient.name,
                    count: 1,
                };
            }
            return acc;
        }, {});
        // Sort based on count
        const sortedIngredients = Object.values(counts).sort((a,b) => b.count - a.count);
        return sortedIngredients;
}

export default function IngredientsFilter({ activeIngredient }) {
    // List of ingredients
    const { potions } = useStaticQuery(graphql`
        query {
            potions: allSanityPotion {
                nodes {
                    ingredients {
                        name
                        id
                    }
                }
            }
        }
    `);
    // List of all potions with their ingredients

    // Count how many potions are in each ingredient
    const ingredientsWithCounts = countPotionsInIngredients(potions.nodes);
    return (
        <IngredientsStyles>
            <Link to="/potions">
                <span className="name">All</span>
                <span className="count">{potions.nodes.length}</span>
            </Link>
            {ingredientsWithCounts.map(ingredient => (
                <Link to={`/ingredient/${ingredient.name}`} key={ingredient.id} >
                    <span className="name">{ingredient.name}</span>
                    <span className="count">{ingredient.count}</span>
                </Link>
            ))}
        </IngredientsStyles>
    );
};