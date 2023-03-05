import * as React from 'react';

export type AppState = {
  // noop
};

export const initialAppState: AppState = {};

export type Action = { type: 'RESET' } | { type: 'ECHO' };

/**
 * The global reducer wrapping whole app for `AppState`.
 * @param {Object} state `AppState`
 * @param {Object} action `Action` for `AppState`
 * @returns {Object} `AppState`
 */
export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'RESET':
      return initialAppState;
    case 'ECHO':
      return state;
    default:
      throw new Error("Reducer don't match the action type.");
  }
}

export const useInitialAppState = (
  dispatch: React.Dispatch<Action>,
  isMobile?: boolean
) => {
  React.useEffect(() => {
    if (isMobile) {
      dispatch({ type: 'ECHO' });
    }
  }, []);
};
/*
export function setInitialAppState(dispatch: React.Dispatch<Action>, isMobile: boolean) {
  if (isMobile) {
    dispatch({ type: 'ECHO' })
  }
}
*/
