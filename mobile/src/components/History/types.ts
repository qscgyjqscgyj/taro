import { CardData } from 'shared/types/cards';

export interface HistoryRecord {
    id: string;
    card: CardData;
    createdAt: string;
}
