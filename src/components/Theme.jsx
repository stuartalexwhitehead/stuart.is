import React from "react";
import { ThemeProvider } from "styled-components";

import { colors } from "../config.styles";

export default ({ theme, children }) => (
    <ThemeProvider
        theme={{
            main: theme,
            colors: {
                background:
                    theme === "dark" ? colors.NEAR_BLACK : colors.LIGHT_GREY,
                text: theme === "dark" ? colors.LIGHT_GREY : colors.DARK_GREY,
                accent: theme === "dark" ? colors.LIGHT_GREY : colors.BLUE
            }
        }}
    >
        {children}
    </ThemeProvider>
);
