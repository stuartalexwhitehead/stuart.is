module.exports = {
    siteMetadata: {
        baseUrl: "https://stuart.is"
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "articles",
                path: `${__dirname}/src/content/articles`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "library",
                path: `${__dirname}/src/content/books`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/content/pages`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1024,
                            showCaptions: true
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            inlineCodeMarker: ">",
                            aliases: {}
                        }
                    }
                ]
            }
        }
    ]
};
