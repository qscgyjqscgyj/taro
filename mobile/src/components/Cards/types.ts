import { CardData } from 'shared/types/cards';

export interface CardsProps {
    onCardPress: (card: CardData) => void;
}
