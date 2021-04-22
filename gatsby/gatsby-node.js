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

export async function createPages(params) {
    // Create pages dynamically
    // Potions
    await turnPotionsIntoPages(params);
    // Ingredients
    // Employees
}