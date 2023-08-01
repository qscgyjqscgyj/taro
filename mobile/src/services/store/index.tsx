import { useReducer } from 'react';

import { AppContext, initialState } from './context';
import { Action, AppContextProps } from './types';

function reducer(state: AppContextProps, action: Action) {
    switch (action.type) {
        case 'SET_CARDS':
            return { ...state, cards: action.payload };
        case 'SET_ACTIVE_CARD':
            return { ...state, activeCard: action.payload };
        default:
            return state;
    }
}

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppContextProvider(props: AppProviderProps) {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, initialState);

    const { activeCard, cards } = state;

    return (
        <AppContext.Provider value={{ cards, activeCard, dispatch }}>
            {children}
        </AppContext.Provider>
    );
}
