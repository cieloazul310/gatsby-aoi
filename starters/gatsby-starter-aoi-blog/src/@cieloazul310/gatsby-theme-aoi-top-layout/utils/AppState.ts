import * as React from "react";

export type AppState = {
  count: number;
};

export const initialAppState: AppState = {
  count: 0,
};

export type Action = { type: "RESET" } | { type: "INCREMENT" };

/**
 * The global reducer wrapping whole app for `AppState`.
 * @param {Object} state `AppState`
 * @param {Object} action `Action` for `AppState`
 * @returns {Object} `AppState`
 */
export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "RESET":
      return initialAppState;
    default:
      throw new Error("Reducer don't match the action type.");
  }
}

export const useInitialAppState = (
  dispatch: React.Dispatch<Action>,
  isMobile?: boolean,
) => {
  React.useEffect(() => {
    if (isMobile) {
      dispatch({ type: "INCREMENT" });
    }
  }, []);
};
