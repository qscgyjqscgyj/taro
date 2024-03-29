import { RemoteData } from 'shared/types/remoteData';

import { ArcanaType, CardData, SuitType } from 'shared/types/cards';

export interface CardsFilterHookProps {
    cardsRemoteData: RemoteData<CardData[]>;
}

export interface CardsFilterProps {
    arcanaFilter: ArcanaType['type'];
    suitFilter: SuitType | undefined;
    toggleArcanaTypeFilter: () => void;
    suiteTypeFilterHandler: (suit: SuitType) => void;
}

export interface CardsFilterHookData extends CardsFilterProps {
    filteredCards: CardData[];
    onSearchHandler: (text: string) => void;
    cardsNameFilter: string;
}
