import { PayloadAction } from '@reduxjs/toolkit';

import { CardData } from 'shared/types/cards';

export interface Actions {
    addCards: PayloadAction<CardData[]>;
    setActiveCard: PayloadAction<CardData | null>;
    setHeaderTitle: PayloadAction<string | null>;
}

export interface AppState {
    cards: CardData[];
    activeCard: CardData | null;
    headerTitle: string | null;
}
