import PriceInput from '../components/PriceInput';

export default {
    name: 'potion',
    title: 'Potions',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Potion Name',
            type: 'string',
            description: 'Name of the potion',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the potion in cents',
            inputComponent: PriceInput,
        },
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'ingredient' }] }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            ingredient0: 'ingredients.0.name',
            ingredient1: 'ingredients.1.name',
            ingredient2: 'ingredients.2.name',
            ingredient3: 'ingredients.3.name',
        },
        prepare: ({ title, media, ...ingredients }) => {
            // Filter undefined ingredients out
            const ingreds = Object.values(ingredients).filter(Boolean);
            // Return the preview object for the potion
            return {
                title,
                media,
                subtitle: ingreds.join(', '),
            };
        },
    },
};