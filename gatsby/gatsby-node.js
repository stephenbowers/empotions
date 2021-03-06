import path from 'path';

async function turnPotionsIntoPages({ graphql, actions }) {
    // Get a template for this page
    const potionTemplate = path.resolve('./src/templates/Potion.js');
    // Query all potions
    const { data } = await graphql(`
        query {
            potions: allSanityPotion {
                totalCount
                nodes {
                    name
                    id
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
            },
        });
    });

    // Determine number of pages based on number of potions by amount per page
    const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
    const pageCount = Math.ceil(data.potions.totalCount / pageSize);
    
    // Loop from 1 to n and create pages for each
    Array.from({ length: pageCount }).forEach((_, i) => {
        actions.createPage({
            path: `/potions/${i + 1}`,
            component: path.resolve('./src/pages/potions.js'),
            context: {
                skip: i * pageSize,
                currentPage: i + 1,
                pageSize,
            },
        });
    });
}

async function turnIngredientsIntoPages({ graphql, actions }) {
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

async function turnEmployeesIntoPages({ graphql, actions }) {
    const employeeTemplate = path.resolve('./src/templates/Employee.js');

    const { data } = await graphql(`
        query {
            employees: allSanityPerson {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    data.employees.nodes.forEach(employee => {
        actions.createPage({
            // URL for new page
            path: `employee/${employee.slug.current}`,
            component: employeeTemplate,
            context: {
                slug: employee.slug.current,
            }
        });
    });
}

export async function createPages(params) {
    // Create pages dynamically
    await Promise.all([
        turnPotionsIntoPages(params),
        turnIngredientsIntoPages(params),
        turnEmployeesIntoPages(params),
    ]);
    // Potions
    // Ingredients
    // Employees
}