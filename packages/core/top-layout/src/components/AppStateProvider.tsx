import * as React from 'react';
import AppStateContext from '../utils/AppStateContext';
import reducer, { useInitialAppState } from '../utils/AppState';

type AppStateProviderProps = {
  children: React.ReactNode;
  isMobile: boolean;
};

export default function AppStateProvider({
  children,
  isMobile,
}: AppStateProviderProps) {
  const initialAppState = useInitialAppState(isMobile);
  const [state, dispatch] = React.useReducer(reducer, initialAppState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}
