import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";

import { colors, fonts, grid, breakpoints } from "../config.styles";
import lock from "../helpers/lock";
import media from "../helpers/media";
import rem from "../helpers/rem";

const groupArticlesByYear = articles =>
    articles.reduce((groups, article) => {
        const { year } = article.node.frontmatter;

        if (Object.prototype.hasOwnProperty.call(groups, year)) {
            groups[year].push(article);
        } else {
            groups[year] = [article]; // eslint-disable-line
        }

        return groups;
    }, []);

const query = graphql`
    query {
        articles: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/(articles)/.*\\.md$/"}}
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        year: date(formatString: "YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${rem(20)};

    ${media.MEDIUM`
        flex-direction: row;

        && {
            margin-top: 0;
        }
    `}
`;

const Year = styled.h2`
    font-family: ${fonts.SANS_SERIF};
    font-weight: normal;
    color: ${colors.BLUE};
    width: 25%;
    ${lock("font-size", 20, 48, breakpoints.SMALL, breakpoints.LARGE)};
    margin: 0;
    line-height: 1.5;
`;

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const Li = styled.li`
    margin: 0;
`;

const StyledLink = styled(Link)`
    color: ${colors.DARK_GREY};
    text-decoration: none;
    font-family: ${fonts.SANS_SERIF};
    line-height: 1.5;
    ${lock("font-size", 20, 48, breakpoints.SMALL, breakpoints.LARGE)};

    :hover {
        color: ${colors.BLUE};
        text-decoration: underline;
    }
`;

const ArticlesForYear = ({ articles, year }) => (
    <Group>
        <Year>{year}</Year>

        <Ul>
            {articles.map(article => (
                <Li key={article.node.id}>
                    <StyledLink to={article.node.frontmatter.path}>
                        {article.node.frontmatter.title}
                    </StyledLink>
                </Li>
            ))}
        </Ul>
    </Group>
);

const Wrapper = styled.div`
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

export default () => (
    <StaticQuery
        query={query}
        render={({ articles }) => {
            const articlesByYear = groupArticlesByYear(articles.edges);

            return (
                <Wrapper>
                    {Object.keys(articlesByYear)
                        .sort()
                        .reverse()
                        .map(year => (
                            <ArticlesForYear
                                key={year}
                                year={year}
                                articles={articlesByYear[year]}
                            />
                        ))}
                </Wrapper>
            );
        }}
    />
);
