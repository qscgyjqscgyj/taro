import { useCallback, useMemo, useState } from 'react';

import { ArcanaType, SuitType } from 'shared/types/cards';
import { isSuccess } from 'shared/types/remoteData';

import { CardsFilterHookData, CardsFilterHookProps } from './types';

export const SUITS: SuitType[] = ['cups', 'pentacless', 'swords', 'wands'];

export function useCardsFilter(props: CardsFilterHookProps): CardsFilterHookData {
    const { cardsRemoteData, cardsNameFilter } = props;

    const [arcanaFilter, setArcanaFilter] = useState<ArcanaType['type']>('minor');
    const [suitFilter, setSuitFilter] = useState<SuitType>(SUITS[0]);

    const toggleArcanaTypeFilter = useCallback(() => {
        setArcanaFilter((prevArcanaFilter) => (prevArcanaFilter === 'major' ? 'minor' : 'major'));
    }, [setArcanaFilter]);

    const suiteTypeFilterHandler = useCallback(
        (suit: SuitType) => {
            setSuitFilter(suit);
        },
        [setSuitFilter],
    );

    const filteredCards = useMemo(() => {
        const cards = isSuccess(cardsRemoteData) ? cardsRemoteData.data : [];

        if (cardsNameFilter !== '') {
            return cards;
        }

        const resultCards = [...cards].filter((card) => card.arcana.type === arcanaFilter);

        if (arcanaFilter === 'minor') {
            return resultCards.filter((card) => card.arcana.suit === suitFilter);
        }

        return resultCards;
    }, [cardsRemoteData, arcanaFilter, suitFilter, cardsNameFilter]);

    return {
        filteredCards,
        arcanaFilter,
        suitFilter,
        toggleArcanaTypeFilter,
        suiteTypeFilterHandler,
    };
}
