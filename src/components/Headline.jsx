import React from "react";
import styled from "styled-components";

import { colors, fonts, grid, breakpoints } from "../config.styles";
import lock from "../helpers/lock";

const H1 = styled.h1`
    color: ${colors.DARK_GREY};
    font-family: ${fonts.SANS_SERIF};
    margin: 0;

    ${lock("font-size", 16, 65, breakpoints.SMALL, breakpoints.LARGE)};
    ${lock("margin-top", 50, 200, breakpoints.SMALL, breakpoints.LARGE)};
    ${lock("margin-bottom", 20, 80, breakpoints.SMALL, breakpoints.LARGE)};
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

export default ({ children }) => <H1>{children}</H1>;
