module.exports = {
  siteMetadata: {
    title: "Junio",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: `gatsby-plugin-intercom`,
      options: {
        appId: "tknx8hq0",
      },
    },
  ],
};
