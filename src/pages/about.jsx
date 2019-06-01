import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";
import Headline from "../components/Headline";
import Markdown from "../components/Markdown";
import { fonts, colors, grid, breakpoints } from "../config.styles";
import lock, { doubleLock } from "../helpers/lock";
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
    padding-right: ${BASELINE}em;

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

const Tldr = styled.h3`
    color: ${colors.BLUE};
    ${lock("font-size", 14, 24, breakpoints.SMALL, breakpoints.LARGE)};
    margin: 0;
    ${lock("margin-bottom", 4, 12, breakpoints.SMALL, breakpoints.LARGE)};
`;

const Ul = styled.ul`
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    list-style-position: inside;
    ${doubleLock(
        "font-size",
        14,
        16,
        breakpoints.SMALL,
        breakpoints.LARGE,
        breakpoints.MAX
    )};
`;

const A = styled.a`
    color: ${colors.DARK_GREY};

    :hover {
        color: ${colors.BLUE};
    }
`;

export default ({
    data: {
        content: {
            html,
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
        <Headline>Hello, I’m Stuart</Headline>
        <Grid>
            <Details>
                <Tldr>tl;dr</Tldr>

                <Ul>
                    <Li>Web Developer and Tech Lead</Li>
                    <Li>
                        working at{" "}
                        <A href="https://springload.co.nz">Springload</A>
                    </Li>
                    <Li>studied Computer Science</Li>
                    <Li>favours JS, Python and AWS</Li>
                    <Li>background in design agencies</Li>
                    <Li>collaboration is my jam</Li>
                </Ul>
            </Details>
            <Markdown html={html} />
        </Grid>
    </Layout>
);

export const pageQuery = graphql`
    query About{
        content: markdownRemark(
            fileAbsolutePath: { regex: "/(pages/about)/.*\\.md$/"}
          ) {
            html,
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
