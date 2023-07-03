import { createContext, useContext } from 'react';

import { AppContextProps } from './types';

export const initialState: AppContextProps = {
    cards: [],
    activeCard: undefined,
    dispatch: () => null,
};

export const AppContext = createContext<AppContextProps>(initialState);

export function useAppContext() {
    return useContext(AppContext);
}
