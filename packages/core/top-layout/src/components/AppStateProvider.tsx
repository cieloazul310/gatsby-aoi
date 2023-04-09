import * as React from 'react';
import AppStateContext from '../utils/AppStateContext';
import reducer, {
  initialAppState,
  useInitialAppState,
} from '../utils/AppState';

type AppStateProviderProps = React.PropsWithChildren<{
  isMobile: boolean;
}>;

export default function AppStateProvider({
  children,
  isMobile,
}: AppStateProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialAppState);

  useInitialAppState(dispatch, isMobile);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}
