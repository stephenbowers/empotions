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
    twitter: '@EmPotions',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    'gatsby-plugin-react-helmet',
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
    {
      resolve: 'gatsby-plugin-snipcart-advanced',
      options: {
        version: '3.0.29',
        publicApiKey: 'NTg2Yzk4MGQtOWExOC00MGE2LThjODUtMWQzZWNjMDNhYjY5NjM3NTQ5MDkxOTU0ODA2OTUx',
        defaultLang: 'en',
        currency: 'usd',
        openCartOnAdd: false,
        useSideCart: true,
      },
    },
  ],
}
