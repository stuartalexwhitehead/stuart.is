import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import LatestArticles from "../components/LatestArticles";
import { fonts, grid, breakpoints } from "../config.styles";
import lock, { emLock } from "../helpers/lock";
import rem from "../helpers/rem";
import { phiMinorFromMajor } from "../helpers/phi";
import Meta from "../components/Meta";

const Hero = styled.p`
    color: ${props => props.theme.colors.text};
    font-family: ${fonts.SANS_SERIF};
    max-width: ${rem(900)};

    ${lock("font-size", 14, 36, breakpoints.SMALL, breakpoints.MEDIUM)};
    ${lock("margin-top", 50, 150, breakpoints.SMALL, breakpoints.MEDIUM)};
    ${lock(
        "margin-bottom",
        phiMinorFromMajor(50),
        phiMinorFromMajor(150),
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
    ${emLock("line-height", 1.5, 1.38, breakpoints.SMALL, breakpoints.MEDIUM)};
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
    <Layout theme="dark">
        <Meta meta={restMeta} ogImage={resize} />
        <Hero>
            Hello—it’s nice to meet you, I’m Stuart. On weekdays you’ll find me
            at Springload, developing people and software. And at the weekends
            I’ll be outside, exploring the great outdoors
            <span role="img" aria-label="Tree">
                {" 🌲"}
            </span>
        </Hero>

        <LatestArticles />
    </Layout>
);

export const pageQuery = graphql`
    query Homepage{
        content: markdownRemark(
            fileAbsolutePath: { regex: "/(pages/homepage)/.*\\.md$/"}
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
