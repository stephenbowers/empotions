export default {
    name: 'person',
    title: 'Employees',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
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
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Employee bio',
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
            name: 'specialties',
            title: 'Specialties',
            type: 'array',
            description: 'Areas of expertise',
            of: [{ type: 'string'}],
        },
        {
            name: 'facebook',
            title: 'Facebook',
            type: 'string',
            description: 'Facebook username',
        },
        {
            name: 'twitter',
            title: 'Twitter',
            type: 'string',
            description: 'Twitter username',
        },
        {
            name: 'pinterest',
            title: 'Pinterest',
            type: 'string',
            description: 'Pinterest username',
        },
        {
            name: 'tiktok',
            title: 'TikTok',
            type: 'string',
            description: 'TikTok username',
        },
    ],
};