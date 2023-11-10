/* eslint @typescript-eslint/no-var-requires: off */
/* eslint import/no-extraneous-dependencies: off */

const router = jest.requireActual("@gatsbyjs/reach-router");

module.exports = {
  ...router,
  useLocation: jest.fn(),
};
