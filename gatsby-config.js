module.exports = {
    siteMetadata: {},
    plugins: [
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "articles",
                path: `${__dirname}/src/articles`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: []
            }
        }
    ]
};
