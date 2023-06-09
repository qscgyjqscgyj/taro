import { CardData } from 'shared/types/cards';

export type Action = { type: 'SET_ACTIVE_CARD'; payload: CardData | undefined };

export interface AppContextProps {
    activeCard: CardData | undefined;
    dispatch: React.Dispatch<Action>;
}
