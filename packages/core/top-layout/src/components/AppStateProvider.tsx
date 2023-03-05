import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppStateContext from '../utils/AppStateContext';
import reducer, {
  initialAppState,
  useInitialAppState,
} from '../utils/AppState';

type AppStateProviderProps = {
  children: React.ReactNode;
};

export default function AppStateProvider({ children }: AppStateProviderProps) {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.only('xs'));
  const [state, dispatch] = React.useReducer(reducer, initialAppState);

  useInitialAppState(dispatch, isMobile);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}
