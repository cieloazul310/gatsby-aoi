/* eslint import/no-extraneous-dependencies: off */
import { expect, jest } from '@jest/globals';
import * as Gatsby from 'gatsby';
import { useSiteMetadata } from '../src/graphql-hooks';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: `Gatsby Theme Aoi`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@cieloazul310`,
        siteUrl: 'https://gatsby-theme-aoi.netlify.app',
        keywords: ['Gatsby', 'TypeScript', 'MUI'],
        lang: '',
        social: [
          {
            name: `twitter`,
            url: `https://twitter.com/gatsbyjs`,
          },
          {
            name: `github`,
            url: `https://github.com/gatsbyjs`,
          },
        ],
      },
    },
  }));
});

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

describe('useSiteMetadata', () => {
  it('default', () => {
    const { title, author, siteUrl } = useSiteMetadata();
    expect(title).toBe(`Gatsby Theme Aoi`);
    expect(author).toBe(`@cieloazul310`);
    expect(siteUrl).toBe(`https://gatsby-theme-aoi.netlify.app`);
  });
});
