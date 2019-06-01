import React from "react";
import styled from "styled-components";

import { colors, grid, breakpoints, fonts } from "../config.styles";
import media from "../helpers/media";
import lock from "../helpers/lock";

const Footer = styled.footer`
    margin: 0;
    background-color: ${props =>
        props.theme.main === "dark" ? colors.LIGHT_GREY : "transparent"};

    ${media.MEDIUM`background-color: transparent;`}

    ${lock(
        "padding",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};
`;

const Colophon = styled.span`
    font-family: ${fonts.SANS_SERIF};
    color: ${colors.DARK_GREY};

    ${media.MEDIUM`color: ${props => props.theme.colors.text};`}
    ${lock("font-size", 12, 20, breakpoints.SMALL, breakpoints.MEDIUM)};
`;

export default () => (
    <Footer>
        <Colophon>© {new Date().getFullYear()}</Colophon>
    </Footer>
);
