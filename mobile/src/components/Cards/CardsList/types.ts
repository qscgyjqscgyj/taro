import { CardData } from 'shared/types/cards';

export interface CardsListProps<CD> {
    cards: CD[];
    onPressCard: (card: CardData) => void;
    addCard?: () => void;
    deleteCard?: (card: CardData) => void;
}
