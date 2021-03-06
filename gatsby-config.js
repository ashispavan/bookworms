// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'Bookworms',
    description: 'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@ashispavan',
  },
  plugins: [
    {
      resolve: 'gatsby-firesource',
      options: {
        // eslint-disable-next-line no-undef
        credential: require('./firebase.json'),
        types: [
          {
            type: 'Book',
            collection: 'books',
            map: doc => ({
              title: doc.title,
              summary: doc.summary,
              imageUrl: doc.imageUrl,
              author___NODE: doc.author.id,
            }),
          },
          {
            type: 'Author',
            collection: 'authors',
            map: doc => ({
              name: doc.name
            })
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-remote-images',
      options: {
        nodeType: 'Book',
        imagePath: 'imageUrl',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
