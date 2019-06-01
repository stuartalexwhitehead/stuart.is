import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Headline from "../components/Headline";
import BooksList from "../components/BooksList";
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
        <Headline>Books</Headline>
        <BooksList />
    </Layout>
);

export const pageQuery = graphql`
    query Library{
        content: markdownRemark(
            fileAbsolutePath: { regex: "/(pages/library)/.*\\.md$/"}
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
