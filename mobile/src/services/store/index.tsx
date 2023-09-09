import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { Actions, AppState } from './types';

const initialState: AppState = {
    cards: [],
    activeCard: null,
    headerTitle: null,
};

const appSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers: {
        setCards: (state, action: Actions['addCards']) => {
            state.cards = action.payload;
        },
        setActiveCard: (state, action: Actions['setActiveCard']) => {
            state.activeCard = action.payload;
        },
        setHeaderTitle: (state, action: Actions['setHeaderTitle']) => {
            state.headerTitle = action.payload;
        },
    },
});

export const { setCards, setActiveCard, setHeaderTitle } = appSlice.actions;

const store = configureStore({
    reducer: appSlice.reducer,
});

export const selectCards = (state: AppState) => state.cards;
export const selectActiveCard = (state: AppState) => state.activeCard;
export const selectHeaderTitle = (state: AppState) => state.headerTitle;

export function AppStoreProvider(props: any) {
    return <Provider store={store}>{props.children}</Provider>;
}
