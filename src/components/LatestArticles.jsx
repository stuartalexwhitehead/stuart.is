import React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import LatestArticle from "./LatestArticle";
import { colors, grid, breakpoints } from "../config.styles";
import lock from "../helpers/lock";
import media from "../helpers/media";
import rem from "../helpers/rem";

const query = graphql`
    query {
        articles: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {fileAbsolutePath: {regex: "/(articles)/.*\\.md$/"}}
            limit: 3
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "D MMM YYYY")
                        path
                        title
                        excerpt
                    }
                }
            }
        }
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: ${rem(60)};
    background-color: ${colors.LIGHT_GREY};

    ${lock(
        "grid-row-gap",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};
    ${lock(
        "padding-top",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};
    ${lock(
        "padding-left",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};
    ${lock(
        "padding-right",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};

    ${media.MEDIUM`
        background-color: transparent;
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.LARGE`
        background-color: transparent;
        grid-template-columns: repeat(3, 1fr);
    `}
`;

export default () => (
    <StaticQuery
        query={query}
        render={({ articles }) => (
            <Wrapper>
                {articles.edges.map(article => (
                    <LatestArticle
                        key={article.node.id}
                        {...article.node.frontmatter}
                    />
                ))}
            </Wrapper>
        )}
    />
);
