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
