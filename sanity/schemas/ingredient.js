export default {
    name: 'ingredient',
    title: 'Ingredient',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Ingredient',
            type: 'string',
            description: 'Name of the ingredient',
        },
        {
            name: 'vegan',
            title: 'Vegan',
            type: 'boolean',
            description: 'Is this ingredient vegan?',
            options: {
                layout: 'checkbox',
            },
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegan: 'vegan',
        },
        prepare: ({name, vegan}) => ({
            title: `${name} ${vegan ? '🌿' : ''}`,
        }),
    },
};