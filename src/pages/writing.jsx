import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ArticlesList from "../components/ArticlesList";
import Headline from "../components/Headline";
import Meta from "../components/Meta";

export default ({
    data: {
        content: {
            frontmatter: {
                meta: {
                    ogImage: {
                        childImageSharp: { resize }
                    },
                    ...restMeta
                }
            }
        }
    }
}) => (
    <Layout>
        <Meta meta={restMeta} ogImage={resize} />
        <Headline>Writing</Headline>
        <ArticlesList />
    </Layout>
);

export const pageQuery = graphql`
    query Writing{
        content: markdownRemark(
            fileAbsolutePath: { regex: "/(pages/about)/.*\\.md$/"}
          ) {
            frontmatter {
                meta {
                    title,
                    description
                    ogImage {
                        childImageSharp {
                            resize(width: 1200) {
                                src,
                                width,
                                height
                            }
                        }
                    }
                }
            }
        }
    }
`;
