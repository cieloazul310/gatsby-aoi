/* eslint import/no-extraneous-dependencies: off */
import { expect, jest } from '@jest/globals';

import * as Gatsby from 'gatsby';
import useAssetUrl from '../src/useAssetUrl';

beforeEach(() => {
  const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: `Gatsby Theme Aoi`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@cieloazul310`,
        siteUrl: 'https://cieloazul310.github.io/gatsby-aoi/',
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

describe('useAssetUrl', () => {
  it('default', () => {
    const url = useAssetUrl('/gatsby-aoi/assets/image_hoge.png');
    expect(url).toBe(
      'https://cieloazul310.github.io/gatsby-aoi/assets/image_hoge.png'
    );
  });
});
