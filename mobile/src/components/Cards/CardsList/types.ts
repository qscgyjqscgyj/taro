import { CardData } from 'shared/types/cards';

export interface CardsListProps {
    cards: CardData[];
    onPressCard: (card: CardData) => void;
    addCard?: () => void;
    deleteCard?: (card: CardData) => void;
}
