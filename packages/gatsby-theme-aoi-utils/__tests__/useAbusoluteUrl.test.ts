/* eslint import/no-extraneous-dependencies: off */
import { expect, jest } from '@jest/globals';

import * as Gatsby from 'gatsby';
import useAbusoluteUrl from '../src/useAbsoluteUrl';

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

describe('useAbusoluteUrl', () => {
  it('default', () => {
    const url = useAbusoluteUrl('/assets/image_hoge.png');
    expect(url).toBe(
      'https://gatsby-theme-aoi.netlify.app/assets/image_hoge.png'
    );
  });
});

