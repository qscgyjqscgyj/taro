import { SetCardData } from 'shared/types/cards';

export interface SetCardsListProps {
    cards: SetCardData[];
    onPressCard: (card: SetCardData) => void;
    addCard?: () => void;
    deleteCard?: (card: SetCardData) => void;
}
