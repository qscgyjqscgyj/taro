import { CardData, SetData } from 'shared/types/cards';

export interface SetProps {
    card?: CardData;
    activeSet?: SetData | null;
}
