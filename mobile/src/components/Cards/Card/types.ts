import { CardData, CardDescription } from 'shared/types/cards';

export interface CardProps {
    card: CardData;
    direction?: CardDescription['direction'];
}
