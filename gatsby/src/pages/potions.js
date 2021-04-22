import { graphql } from "gatsby";
import React from "react";
import IngredientsFilter from "../components/IngredientFilter";
import PotionList from "../components/PotionList";

export default function PotionsPage({ data, pageContext }) {
  const potions = data.potions.nodes;
  return (
    <>
      <IngredientsFilter activeIngredient={pageContext.ingredient} />
      <PotionList potions={potions} />
    </>
  );
}

export const query = graphql`
  query PotionQuery($ingredient: [String]) {
    potions: allSanityPotion(filter: {
      ingredients: {
        elemMatch: {
          name: {
            in: $ingredient
          }
        }
      }
    }) {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        ingredients {
          id
          name
        }
      }
    }
  }
`;