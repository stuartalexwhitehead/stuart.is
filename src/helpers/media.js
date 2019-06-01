import { css } from "styled-components";

import rem from "./rem";
import { breakpoints } from "../config.styles";

export default Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media screen and (min-width: ${rem(breakpoints[label])}) {
            ${css(...args)}
        }
    `;

    return acc;
}, {});
