import { graphql } from "gatsby";
import React from "react";
import IngredientsFilter from "../components/IngredientFilter";
import Pagination from "../components/Pagination";
import PotionList from "../components/PotionList";
import SEO from "../components/SEO";

export default function PotionsPage({ data, pageContext }) {
  const potions = data.potions.nodes;
  return (
    <>
      <SEO title={pageContext.ingredient ? `Potions with ${pageContext.ingredient}` : `All Potions`} />
      <IngredientsFilter activeIngredient={pageContext.ingredient} />
      <Pagination 
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.potions.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/potions"
      />
      <PotionList potions={potions} />
      <Pagination 
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.potions.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/potions"
      />
    </>
  );
}

export const query = graphql`
  query PotionQuery($ingredient: [String], $skip: Int = 0, $pageSize: Int = 4) {
    potions: allSanityPotion(filter: {
      ingredients: {
        elemMatch: {
          name: {
            in: $ingredient
          }
        }
      }
    }, limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
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
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
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