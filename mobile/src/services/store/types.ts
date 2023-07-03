import { CardData } from 'shared/types/cards';

export type Action =
    | { type: 'SET_ACTIVE_CARD'; payload: CardData | undefined }
    | { type: 'SET_CARDS'; payload: CardData[] };

export interface AppContextProps {
    cards: CardData[];
    activeCard: CardData | undefined;
    dispatch: React.Dispatch<Action>;
}
