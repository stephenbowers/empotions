import path from 'path';

async function turnPotionsIntoPages({ graphql, actions }) {
    // Get a template for this page
    const potionTemplate = path.resolve('./src/templates/Potion.js');
    // Query all potions
    const { data } = await graphql(`
        query {
            potions: allSanityPotion {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);
    // Loop over each potion and create a page for each
    data.potions.nodes.forEach(potion => {
        actions.createPage({
            // URL for new page
            path: `potion/${potion.slug.current}`,
            component: potionTemplate,
            context: {
                slug: potion.slug.current,
            }
        });
    });
}

async function turnIngredientsIntoPages({ graphql, actions }) {
    console.log("Turning ingredients into Pages");
    // Get template
    const ingredientTemplate = path.resolve('./src/pages/potions.js');
    // Query all ingredients
    const { data } = await graphql(`
        query {
            ingredients: allSanityIngredient {
                nodes {
                    name
                    id
                }
            }
        }
    `);
    // createPage for ingredient
    data.ingredients.nodes.forEach(ingredient => {
        actions.createPage({
            path: `ingredient/${ingredient.name}`,
            component: ingredientTemplate,
            context: {
                ingredient: ingredient.name,
                // TODO: Regex for ingredient
            }

        })
    })
    // Pass ingredient data to potion.js
}

export async function createPages(params) {
    // Create pages dynamically
    await Promise.all([
        turnPotionsIntoPages(params),
        turnIngredientsIntoPages(params)
    ]);
    // Potions
    // Ingredients
    // Employees
}