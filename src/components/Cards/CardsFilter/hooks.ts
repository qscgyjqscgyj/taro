import { useCallback, useMemo, useState } from 'react';

import { ArcanaType, SuitType } from 'src/services/cards/types';

import { CardsFilterHookData, CardsFilterHookProps } from './types';

export const SUITS: SuitType[] = ['cups', 'pentacles', 'swords', 'wands'];

export function useCardsFilter(props: CardsFilterHookProps): CardsFilterHookData {
    const { cards } = props;

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
        const resultCards = [...cards].filter((card) => card.arcana.type === arcanaFilter);

        if (arcanaFilter === 'minor') {
            return resultCards.filter((card) => card.arcana.suit === suitFilter);
        }

        return resultCards;
    }, [cards, arcanaFilter, suitFilter]);

    return {
        filteredCards,
        arcanaFilter,
        suitFilter,
        toggleArcanaTypeFilter,
        suiteTypeFilterHandler,
    };
}
