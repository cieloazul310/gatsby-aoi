/**
 * @jest-environment jsdom
 */
/* eslint import/no-extraneous-dependencies: off */
import { expect } from '@jest/globals';
import { renderHook } from '@testing-library/react';
import { useViewports } from '../src/componentsViewports';

describe('useViewports', () => {
  it('empty arguments', () => {
    const { result } = renderHook(() => useViewports());
    const { swipeableDrawer, permanentDrawer, bottomNav, fab } = result.current;
    expect(swipeableDrawer).toBe('smDown');
    expect(permanentDrawer).toBe('mdUp');
    expect(bottomNav).toBe('xsDown');
    expect(fab).toBe('smDown');
  });

  it('partial arguments', () => {
    const { result } = renderHook(() =>
      useViewports({ bottomNav: 'smDown', swipeableDrawer: 'lgDown' })
    );
    const { swipeableDrawer, permanentDrawer, bottomNav, fab } = result.current;
    expect(swipeableDrawer).toBe('lgDown');
    expect(permanentDrawer).toBe('xlUp');
    expect(bottomNav).toBe('smDown');
    expect(fab).toBe('smDown');
  });

  it('boolean arguments', () => {
    const { result } = renderHook(() => useViewports({ bottomNav: false }));
    const { swipeableDrawer, permanentDrawer, bottomNav, fab } = result.current;
    expect(swipeableDrawer).toBe('smDown');
    expect(permanentDrawer).toBe('mdUp');
    expect(bottomNav).toBe(false);
    expect(fab).toBe('smDown');
  });

  it('with disable options', () => {
    const { result } = renderHook(() =>
      useViewports(
        { swipeableDrawer: true, fab: true },
        { disableBottomNav: true, disablePermanentDrawer: true }
      )
    );
    const { swipeableDrawer, permanentDrawer, bottomNav, fab } = result.current;
    expect(swipeableDrawer).toBe(true);
    expect(permanentDrawer).toBe(false);
    expect(bottomNav).toBe(false);
    expect(fab).toBe(true);
  });
});
