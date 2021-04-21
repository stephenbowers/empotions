import { graphql } from "gatsby";
import React from "react";
import IngredientsFilter from "../components/IngredientFilter";
import PotionList from "../components/PotionList";

export default function PotionsPage({ data }) {
  const potions = data.potions.nodes;
  return (
    <>
      <IngredientsFilter />
      <PotionList potions={potions} />
    </>
  );
}

export const query = graphql`
  query PotionQuery {
    potions: allSanityPotion {
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