import { ArcanaType, CardData, SuitType } from 'src/services/cards/types';

export interface CardsFilterHookProps {
    cards: CardData[];
}

export interface CardsFilterHookData {
    filteredCards: CardData[];
    arcanaFilter: ArcanaType['type'];
    suitFilter: SuitType | undefined;
    toggleArcanaTypeFilter: () => void;
    suiteTypeFilterHandler: (suit: SuitType) => void;
}

export interface CardsFilterProps extends Omit<CardsFilterHookData, 'filteredCards'> {}
