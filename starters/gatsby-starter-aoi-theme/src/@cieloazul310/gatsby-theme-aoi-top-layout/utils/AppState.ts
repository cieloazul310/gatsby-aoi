import * as React from 'react';
import type { AppBarProps } from '@mui/material/AppBar';

export type AppState = {
  count: number;
  appBarPosition: AppBarProps['position'];
};

export const initialAppState: AppState = {
  count: 0,
  appBarPosition: 'fixed',
};

export type Action =
  | { type: 'RESET' }
  | { type: 'INCREMENT' }
  | { type: 'SET_APPBAR_POSITION'; appBarPosition: AppState['appBarPosition'] };

/**
 * The global reducer wrapping whole app for `AppState`.
 * @param {Object} state `AppState`
 * @param {Object} action `Action` for `AppState`
 * @returns {Object} `AppState`
 */
export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'SET_APPBAR_POSITION':
      return { ...state, appBarPosition: action.appBarPosition };
    case 'RESET':
      return initialAppState;
    default:
      throw new Error("Reducer don't match the action type.");
  }
}

export const useInitialAppState = (
  dispatch: React.Dispatch<Action>,
  isMobile?: boolean
) => {
  console.log('useInitialAppState', isMobile);
  React.useEffect(() => {
    console.log('useInitialAppStateEffect', isMobile);
    if (isMobile) {
      dispatch({ type: 'INCREMENT' });
    }
  }, []);
};
