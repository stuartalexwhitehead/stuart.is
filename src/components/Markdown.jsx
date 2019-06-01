import React from "react";
import styled from "styled-components";
import { uiGroups, syntaxGroups } from "nova-colors";

import { fonts, colors, grid, breakpoints } from "../config.styles";
import lock, { doubleLock } from "../helpers/lock";
import media from "../helpers/media";
import rem from "../helpers/rem";

const Markdown = styled.div`
    ${media.LARGE`
        max-width: ${rem(740)};
    `};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    li,
    blockquote,
    a,
    figcaption {
        color: ${colors.DARK_GREY};
        font-family: ${fonts.SANS_SERIF};
        line-height: 1.5;
        ${lock("font-size", 14, 24, breakpoints.SMALL, breakpoints.LARGE)};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    ol,
    blockquote {
        margin: 0;
        :not(:last-child) {
            margin-bottom: 1.5em;
        }

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
            margin: 0;
        `};
    }

    ul,
    ol {
        padding: 0;
    }

    li {
        list-style-position: inside;
    }

    a {
        :hover {
            color: ${colors.BLUE};
        }
    }

    blockquote p {
        margin: 0;
        border-left: ${rem(3)} solid ${colors.BLUE};

        ${lock(
            "padding-left",
            grid.GUTTER_MIN,
            grid.GUTTER_MAX,
            breakpoints.SMALL,
            breakpoints.MEDIUM
        )};
    }

    .gatsby-resp-image-figure,
    .gatsby-highlight {
        margin: 0;
    }

    .gatsby-resp-image-figcaption {
        margin: 0;
        padding-top: ${rem(8)};

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

        ${lock("padding-top", 8, 12, breakpoints.SMALL, breakpoints.MEDIUM)};
        ${lock("font-size", 12, 16, breakpoints.SMALL, breakpoints.MEDIUM)};

        :before {
            content: "↳ ";
        }

        ${media.LARGE`
            margin: 0 1em 0 1em;
        `}
    }

    .gatsby-resp-image-image {
        ${media.LARGE`border-radius: ${rem(5)};`}
    }

    .gatsby-highlight {
        margin-bottom: 1.5em;
    }

    .gatsby-highlight pre {
        margin: 0;
        padding-top: 1em;
        padding-bottom: 1em;

        ${doubleLock(
            "font-size",
            14,
            18,
            breakpoints.SMALL,
            breakpoints.LARGE,
            breakpoints.MAX
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

        ${media.LARGE`
            padding-left: 1em;
            padding-right: 1em;
        `};
    }

    code[class*="language-"],
    pre[class*="language-"] {
        color: ${syntaxGroups.identifier};
        background: ${uiGroups.background};
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;

        ${media.LARGE`border-radius: ${rem(5)};`}

        overflow: auto;
    }

    pre[class*="language-"]::-moz-selection,
    pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection,
    code[class*="language-"] ::-moz-selection {
        text-shadow: none;
        background: ${uiGroups.gray6};
    }

    pre[class*="language-"]::selection,
    pre[class*="language-"] ::selection,
    code[class*="language-"]::selection,
    code[class*="language-"] ::selection {
        text-shadow: none;
        background: ${uiGroups.gray6};
    }

    @media print {
        code[class*="language-"],
        pre[class*="language-"] {
            text-shadow: none;
        }
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: 0.1em;
        white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: slategray;
    }

    .token.punctuation {
        color: ${uiGroups.gray5};
    }

    .namespace {
        opacity: 0.7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
        color: ${syntaxGroups.identifier};
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
        color: ${syntaxGroups.constant};
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
        color: ${syntaxGroups.statement};
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
        color: ${syntaxGroups.type};
    }

    .token.function {
        color: ${syntaxGroups.identifier};
    }

    .token.regex,
    .token.important,
    .token.variable,
    .token.interpolation {
        color: ${syntaxGroups.constant};
    }

    .token.interpolation-punctuation {
        color: ${syntaxGroups.special};
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }
`;

export default ({ html }) => (
    <Markdown dangerouslySetInnerHTML={{ __html: html }} />
);
