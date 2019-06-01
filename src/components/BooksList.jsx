import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { fonts, grid, breakpoints } from "../config.styles";
import media from "../helpers/media";
import lock, { doubleLock, doubleEmLock } from "../helpers/lock";
import rem from "../helpers/rem";

const query = graphql`
    query {
        books: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(books)/.*\\.md$/"}}
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        year: date(formatString: "YYYY")
                        path
                        title
                        author
                        cover {
                            childImageSharp {
                                fluid(maxHeight: 400) {
                                  ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    ${lock(
        "grid-gap",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )}
    ${media.MEDIUM`
        grid-template-columns: repeat(2, 1fr);
    `}
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
`;

const Book = styled.div`
    display: flex;
    font-family: ${fonts.SANS_SERIF};
`;

const CoverWrapper = styled.div`
    flex: 20%;

    ${doubleLock(
        "margin-right",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM,
        breakpoints.MAX
    )};

    ${media.MEDIUM`
        flex: 30%;
    `};
`;
const Cover = styled(Img)`
    border-radius: ${rem(5)};
    box-shadow: ${rem(0)} ${rem(1)} ${rem(5)} rgba(85, 85, 85, 0.2);
`;

const Details = styled.div`
    flex: 80%;
`;
const Title = styled.h2`
    margin: 0;

    ${doubleLock(
        "font-size",
        14,
        24,
        breakpoints.SMALL,
        breakpoints.MEDIUM,
        breakpoints.MAX
    )};
    ${doubleLock(
        "margin-bottom",
        6,
        10,
        breakpoints.SMALL,
        breakpoints.MEDIUM,
        breakpoints.MAX
    )};
`;
const Author = styled.p`
    margin: 0;

    ${doubleLock(
        "font-size",
        12,
        16,
        breakpoints.SMALL,
        breakpoints.MEDIUM,
        breakpoints.MAX
    )};
    ${lock("margin-bottom", 6, 10, breakpoints.SMALL, breakpoints.LARGE)};
`;
const Description = styled.div`
    * {
        margin: 0;
    }

    p {
        ${doubleLock(
            "font-size",
            14,
            20,
            breakpoints.SMALL,
            breakpoints.MEDIUM,
            breakpoints.MAX
        )};
        ${doubleEmLock(
            "line-height",
            1.5,
            1.4,
            breakpoints.SMALL,
            breakpoints.MEDIUM,
            breakpoints.MAX
        )};
    }
`;

export default () => (
    <StaticQuery
        query={query}
        render={({ books }) => (
            <Grid>
                {books.edges.map(
                    ({
                        node: {
                            id,
                            html,
                            frontmatter: { title, author, cover }
                        }
                    }) => (
                        <Book key={id}>
                            <CoverWrapper>
                                <Cover fluid={cover.childImageSharp.fluid} />
                            </CoverWrapper>
                            <Details>
                                <Title>{title}</Title>
                                <Author>By {author}</Author>
                                <Description
                                    dangerouslySetInnerHTML={{
                                        __html: html
                                    }}
                                />
                            </Details>
                        </Book>
                    )
                )}
            </Grid>
        )}
    />
);
