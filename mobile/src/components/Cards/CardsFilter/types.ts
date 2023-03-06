import { RemoteData } from 'shared/types/remoteData';

import { ArcanaType, CardData, SuitType } from 'shared/types/cards';

export interface CardsFilterHookProps {
    cardsRemoteData: RemoteData<CardData[]>;
}

export interface CardsFilterHookData {
    filteredCards: CardData[];
    arcanaFilter: ArcanaType['type'];
    suitFilter: SuitType | undefined;
    toggleArcanaTypeFilter: () => void;
    suiteTypeFilterHandler: (suit: SuitType) => void;
}

export interface CardsFilterProps extends Omit<CardsFilterHookData, 'filteredCards'> {}
