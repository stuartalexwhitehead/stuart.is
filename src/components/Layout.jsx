import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Location } from "@reach/router";

import Theme from "./Theme";
import Global from "./Global";
import Header from "./Header";
import Footer from "./Footer";
import { breakpoints } from "../config.styles";
import rem from "../helpers/rem";

const Wrapper = styled.div`
    max-width: ${rem(breakpoints.MAX)};
    margin: 0 auto;
`;

const Layout = ({ theme, children }) => (
    <Location>
        {({ location }) => (
            <Theme theme={theme}>
                <Wrapper>
                    <Helmet>
                        <meta property="og:locale" content="en_GB" />
                        <meta property="og:type" content="article" />
                        <meta
                            property="og:url"
                            content={`https://stuart.is${location.pathname}`}
                        />
                        <meta
                            property="twitter:site"
                            content="@stuartwhitehead"
                        />
                    </Helmet>
                    <Global />
                    <Header />
                    {children}
                    <Footer />
                </Wrapper>
            </Theme>
        )}
    </Location>
);

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]).isRequired,
    theme: PropTypes.oneOf(["light", "dark"])
};

Layout.defaultProps = {
    theme: "light"
};

export default Layout;
