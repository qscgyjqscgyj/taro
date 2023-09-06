import { CardData } from 'shared/types/cards';

export interface HistoryRecord {
    id: string;
    card: CardData;
    createdAt: string;
}

export type HistoryTab = {
    id: 'cards' | 'sets';
    name: string;
    tabIndex: 0 | 1;
};
