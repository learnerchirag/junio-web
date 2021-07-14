module.exports = {
  siteMetadata: {
    title: "Junio",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: "tknx8hq0",
        include_in_development: true,
        delay_timeout: 0,
      },
    },
  ],
};
