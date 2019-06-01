import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { fonts, grid, breakpoints } from "../config.styles";
import lock from "../helpers/lock";

const Header = styled.header`
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
    ${lock(
        "padding-top",
        grid.GUTTER_MIN,
        grid.GUTTER_MAX,
        breakpoints.SMALL,
        breakpoints.MEDIUM
    )};
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
`;

const NavItem = styled(Link)`
    color: ${props => props.theme.colors.text};
    font-family: ${fonts.SANS_SERIF};
    text-decoration: none;
    ${lock("font-size", 12, 20, breakpoints.SMALL, breakpoints.MEDIUM)};

    :nth-child(n + 1):nth-child(-n + 4) {
        ${lock("margin-right", 15, 40, breakpoints.SMALL, breakpoints.MEDIUM)};
    }

    :hover {
        color: ${props => props.theme.colors.accent};
        text-decoration: underline;
    }
`;

const Spacer = styled.span`
    flex: 1;
`;

export default () => (
    <Header>
        <Nav>
            <NavItem to="/">Stuart</NavItem>
            <Spacer />
            <NavItem to="/writing">Writing</NavItem>
            <NavItem to="/library">Library</NavItem>
            <NavItem to="/about">About</NavItem>
        </Nav>
    </Header>
);
