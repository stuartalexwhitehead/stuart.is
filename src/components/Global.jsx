import React from "react";
import { createGlobalStyle } from "styled-components";

import EuclidSquareRegularWoff from "../assets/fonts/euclidsquaretrial-regular-webfont.woff";
import EuclidSquareRegularWoff2 from "../assets/fonts/euclidsquaretrial-regular-webfont.woff2";
import EuclidSquareSemiboldWoff from "../assets/fonts/euclidsquaretrial-semibold-webfont.woff";
import EuclidSquareSemiboldWoff2 from "../assets/fonts/euclidsquaretrial-semibold-webfont.woff2";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: euclid;
        font-weight: normal;
        font-style: normal;
        src: url("${EuclidSquareRegularWoff2}") format("woff2"),
             url("${EuclidSquareRegularWoff}") format("woff");
    }

    @font-face {
        font-family: euclid;
        font-weight: bold;
        font-style: normal;
        src: url("${EuclidSquareSemiboldWoff2}") format("woff2"),
             url("${EuclidSquareSemiboldWoff}") format("woff");
    }

    html {
        box-sizing: border-box;
        background-color: ${props => props.theme.colors.background};
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    html, body {
        margin: 0;
        padding: 0;
    }
`;

export default () => (
    <React.Fragment>
        <GlobalStyle />
    </React.Fragment>
);
