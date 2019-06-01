import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { colors, fonts, breakpoints } from "../config.styles";
import media from "../helpers/media";
import lock from "../helpers/lock";
import rem from "../helpers/rem";

const Title = styled.h2`
    font-family: ${fonts.SANS_SERIF};
    color: ${colors.DARK_GREY};
    margin: 0;

    ${media.MEDIUM`
        color: ${colors.LIGHT_GREY}
    `}

    ${lock("font-size", 16, 20, breakpoints.SMALL, breakpoints.MEDIUM)};
    ${lock("margin-bottom", 2, 5, breakpoints.SMALL, breakpoints.MEDIUM)};
`;

const Datetime = styled.time`
    display: block;
    font-family: ${fonts.SANS_SERIF};
    color: ${colors.DARK_GREY};
    margin-top: 0;

    ${media.MEDIUM`
        color: ${colors.LIGHT_GREY}
    `}

    ${lock("font-size", 12, 14, breakpoints.SMALL, breakpoints.MEDIUM)};
    ${lock("margin-bottom", 6, 14, breakpoints.SMALL, breakpoints.MEDIUM)};
`;

const Excerpt = styled.p`
    font-family: ${fonts.SANS_SERIF};
    color: ${colors.DARK_GREY};
    line-height: 1.5;
    margin: 0;

    ${media.MEDIUM`
        color: ${colors.LIGHT_GREY}
    `};

    ${lock("margin-bottom", 18, 26, breakpoints.SMALL, breakpoints.MEDIUM)};
    ${lock("font-size", 14, 18, breakpoints.SMALL, breakpoints.MEDIUM)};
`;

const Button = styled(Link)`
    display: inline-block;
    color: ${colors.DARK_GREY};
    border: 1px solid ${colors.DARK_GREY};
    font-family: ${fonts.SANS_SERIF};
    text-decoration: none;
    padding: ${rem(8)} ${rem(12)};
    border-radius: ${rem(3)};
    margin-top: 0;
    margin-bottom: ${rem(1)};

    ${lock("font-size", 14, 16, breakpoints.SMALL, breakpoints.MEDIUM)};

    :hover {
        color: ${colors.LIGHT_GREY};
        border-color: ${colors.NEAR_BLACK};
        background-color: ${colors.NEAR_BLACK};
    }

    :active {
        margin-top: ${rem(1)};
        margin-bottom: ${rem(0)};
    }

    ${media.MEDIUM`
        color: ${colors.LIGHT_GREY};
        border-color: ${colors.LIGHT_GREY};

        :hover {
            color: ${colors.DARK_GREY};
            border-color: ${colors.LIGHT_GREY};
            background-color: ${colors.LIGHT_GREY};
        }
    `};
`;

export default ({ date, title, path, excerpt }) => (
    <div>
        <Title>{title}</Title>
        <Datetime>{date}</Datetime>
        <Excerpt>{excerpt}</Excerpt>
        <Button to={path}>Read more →</Button>
    </div>
);
