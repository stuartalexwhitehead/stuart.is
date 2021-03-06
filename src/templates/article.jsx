import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Headline from "../components/Headline";
import Markdown from "../components/Markdown";
import { fonts, colors, grid, breakpoints } from "../config.styles";
import lock from "../helpers/lock";
import media from "../helpers/media";
import Meta from "../components/Meta";

const BASELINE = 1.5;

const Grid = styled.div`
    display: flex;
    flex-direction: column;

    ${media.LARGE`
        flex-direction: row;

        ${lock(
            "margin-left",
            grid.GUTTER_MIN,
            grid.GUTTER_MAX,
            breakpoints.SMALL,
            breakpoints.MEDIUM
        )};
        ${lock(
            "margin-right",
            grid.GUTTER_MIN,
            grid.GUTTER_MAX,
            breakpoints.SMALL,
            breakpoints.MEDIUM
        )};
    `};
`;

const Details = styled.div`
    font-family: ${fonts.SANS_SERIF};
    line-height: ${BASELINE};
    margin-bottom: ${BASELINE}em;

    ${lock(
        "margin-left",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};
    ${lock(
        "margin-right",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};

    ${media.LARGE`
        width: 30%;
        margin: 0;
    `};
`;

const Datetime = styled.time`
    color: ${colors.BLUE};
    ${lock("font-size", 14, 24, breakpoints.SMALL, breakpoints.LARGE)};
`;

const TagList = styled.ul`
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;

    ${media.LARGE`
        padding-top: ${BASELINE}em;
    `}
`;

const TagItem = styled.li`
    margin: 0;
    color: ${colors.MID_GREY};
    display: inline;

    :not(:last-child) {
        :after {
            content: ", ";
        }
    }

    ${lock("font-size", 14, 24, breakpoints.SMALL, breakpoints.LARGE)};

    :before {
        content: "#";
    }

    ${media.LARGE`
        display: block;

        :not(:last-child) {
            :after {
                content: none;
            }
        }
    `}
`;

export default ({
    data: {
        markdownRemark: {
            html,
            frontmatter: {
                title,
                date,
                tags,
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
        <Headline>{title}</Headline>
        <Grid>
            <Details>
                <Datetime>{date}</Datetime>
                {tags && tags.length > 0 && (
                    <TagList>
                        {tags.map(tag => (
                            <TagItem key={tag}>{tag}</TagItem>
                        ))}
                    </TagList>
                )}
            </Details>
            <Markdown html={html} />
        </Grid>
    </Layout>
);

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "D MMM YYYY")
                path
                title
                tags
                meta {
                    title
                    description
                    ogImage {
                        childImageSharp {
                            resize(width: 1200) {
                                src
                                width
                                height
                            }
                        }
                    }
                }
            }
        }
    }
`;
