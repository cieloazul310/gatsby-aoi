import { strToSlug, validURL } from '../src/utils';

describe('strToSlug', () => {
  it('replace and', () => {
    expect(strToSlug('Paul McCartney & Wings')).toBe('paul-mccartney-and-wings');
  });
});

describe('validURL', () => {
  it('url', () => {
    expect(validURL('https://cieloazul310.github.io')).toBe(true);
  });
  it('path', () => {
    expect(validURL('/assets/hoge.png')).toBe(false);
  });
});
