import React from 'react';
import AppStateContext from '../utils/AppStateContext';
import reducer, { initialAppState } from '../utils/AppState';

type AppStateProviderProps = {
  children: React.ReactNode;
};

export default function AppStateProvider({ children }: AppStateProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialAppState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}
