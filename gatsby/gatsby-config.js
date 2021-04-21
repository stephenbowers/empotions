/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  /* Your site config here */
  siteMetadata: {
    title: `EmPotions`,
    siteUrl: 'https://thatstephenbowers.com/empotions',
    description: 'An online potion store',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '0wqub598',
        dataset: 'production',
        apiVersion: '2021-04-19',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}
