/* eslint import/no-extraneous-dependencies: off */
import { expect } from '@jest/globals';
import { createTheme } from '@mui/material/styles';
import {
  mergeViewports,
  viewportsToSxDisplay,
  permanentDrawerStyles,
  mainStyles,
  fabStyles,
} from '../src/componentsViewports';

describe('mergeViewports', () => {
  it('empty arguments', () => {
    const { swipeableDrawer, permanentDrawer, bottomNav, fab } =
      mergeViewports();
    expect(swipeableDrawer).toBe('smDown');
    expect(permanentDrawer).toBe('mdUp');
    expect(bottomNav).toBe('xsDown');
    expect(fab).toBe('smDown');
  });

  it('partial arguments', () => {
    const { swipeableDrawer, permanentDrawer, bottomNav, fab } = mergeViewports(
      { bottomNav: 'smDown' }
    );
    expect(swipeableDrawer).toBe('smDown');
    expect(permanentDrawer).toBe('mdUp');
    expect(bottomNav).toBe('smDown');
    expect(fab).toBe('smDown');
  });

  it('boolean arguments', () => {
    const { swipeableDrawer, permanentDrawer, bottomNav, fab } = mergeViewports(
      { bottomNav: false }
    );
    expect(swipeableDrawer).toBe('smDown');
    expect(permanentDrawer).toBe('mdUp');
    expect(bottomNav).toBe(false);
    expect(fab).toBe('smDown');
  });
});

describe('viewportsToSxDisplay', () => {
  it('smDown', () => {
    const { fab } = mergeViewports();
    const style = { display: viewportsToSxDisplay(fab) };
    expect(typeof style.display).toBe('object');
    expect(style.display).toMatchObject({
      xs: 'block',
      md: 'none',
    });
  });

  it('lgUp', () => {
    const { fab } = mergeViewports({ fab: 'lgUp' });
    const style = { display: viewportsToSxDisplay(fab) };
    expect(typeof style.display).toBe('object');
    expect(style.display).toMatchObject({
      xs: 'none',
      lg: 'block',
    });
  });

  it('boolean: true', () => {
    const { fab } = mergeViewports({ fab: true });
    const style = { display: viewportsToSxDisplay(fab) };
    expect(typeof style.display).toBe('string');
    expect(style.display).toBe('block');
  });

  it('boolean: false', () => {
    const { fab } = mergeViewports({ fab: false });
    const style = { display: viewportsToSxDisplay(fab) };
    expect(typeof style.display).toBe('string');
    expect(style.display).toBe('none');
  });
});

describe('contentWidthStyles', () => {
  it('default', () => {
    const { permanentDrawer } = mergeViewports();
    const drawerWidth = 280;
    const style = permanentDrawerStyles(permanentDrawer, drawerWidth);
    expect(typeof style).toBe('object');
    expect(style).toMatchObject({ width: { xs: 0, md: 280 } });
  });

  it('hide permanent drawer', () => {
    const { permanentDrawer } = mergeViewports({ permanentDrawer: false });
    const drawerWidth = 280;
    const style = permanentDrawerStyles(permanentDrawer, drawerWidth);
    expect(typeof style).toBe('object');
    expect(style).toMatchObject({ width: 0 });
  });

  it('always permanent drawer', () => {
    const { permanentDrawer } = mergeViewports({ permanentDrawer: true });
    const drawerWidth = 280;
    const style = permanentDrawerStyles(permanentDrawer, drawerWidth);
    expect(typeof style).toBe('object');
    expect(style).toMatchObject({ width: 280 });
  });
});

describe('mainStyles', () => {
  it('default', () => {
    const { bottomNav } = mergeViewports();
    const style = mainStyles(bottomNav);
    expect(style).toMatchObject({ paddingBottom: { xs: '56px', sm: 0 } });
  });
  it('bottomNav: "smDown"', () => {
    const { bottomNav } = mergeViewports({ bottomNav: 'smDown' });
    const style = mainStyles(bottomNav);
    expect(style).toMatchObject({ paddingBottom: { xs: '56px', md: 0 } });
  });
  it('bottomNav: false', () => {
    const { bottomNav } = mergeViewports({ bottomNav: false });
    const style = mainStyles(bottomNav);
    expect(style).toMatchObject({});
  });
  it('bottomNav: true', () => {
    const { bottomNav } = mergeViewports({ bottomNav: true });
    const style = mainStyles(bottomNav);
    expect(style).toMatchObject({ paddingBottom: '56px' });
  });
});

describe('fabStyles', () => {
  const theme = createTheme();
  it('default', () => {
    const { bottomNav } = mergeViewports();
    const style = fabStyles(bottomNav, theme);
    expect(style).toMatchObject({
      bottom: { xs: `calc(${theme.spacing(2)} + 56px)`, sm: theme.spacing(2) },
    });
  });
  it('bottomNav: "smDown"', () => {
    const { bottomNav } = mergeViewports({ bottomNav: 'smDown' });
    const style = fabStyles(bottomNav, theme);
    expect(style).toMatchObject({
      bottom: { xs: `calc(${theme.spacing(2)} + 56px)`, md: theme.spacing(2) },
    });
  });
  it('bottomNav: false', () => {
    const { bottomNav } = mergeViewports({ bottomNav: false });
    const style = fabStyles(bottomNav, theme);
    expect(style).toMatchObject({ bottom: theme.spacing(2) });
  });
  it('bottomNav: true', () => {
    const { bottomNav } = mergeViewports({ bottomNav: true });
    const style = fabStyles(bottomNav, theme);
    expect(style).toMatchObject({
      bottom: `calc(${theme.spacing(2)} + 56px)`,
    });
  });
});
