import { useCallback, useEffect, useMemo, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { debounce } from 'lodash';

import { ArcanaType, CardData, SuitType } from 'shared/types/cards';
import { RemoteData, isSuccess, success } from 'shared/types/remoteData';

import { getCardsData } from 'src/services/cards';

import { CardsFilterHookData } from './types';
import {
    cupIcon,
    cupSelectedIcon,
    pentacleIcon,
    pentacleSelectedIcon,
    swordIcon,
    swordSelectedIcon,
    wandIcon,
    wandSelectedIcon,
} from './images';

type suitIcons = {
    name: SuitType;
    icon: ImageSourcePropType;
    iconSelected: ImageSourcePropType;
};

export const SUITS: suitIcons[] = [
    { name: 'cups', icon: cupIcon, iconSelected: cupSelectedIcon },
    { name: 'swords', icon: swordIcon, iconSelected: swordSelectedIcon },
    { name: 'pentacles', icon: pentacleIcon, iconSelected: pentacleSelectedIcon },
    { name: 'wands', icon: wandIcon, iconSelected: wandSelectedIcon },
];

export function useCardsFilter(): CardsFilterHookData {
    const [arcanaFilter, setArcanaFilter] = useState<ArcanaType['type']>('minor');
    const [suitFilter, setSuitFilter] = useState<SuitType | undefined>();
    const [cardsNameFilter, setCardsNameFilter] = useState<string>('');

    const toggleArcanaTypeFilter = useCallback(() => {
        if (suitFilter) {
            setSuitFilter(undefined);
        }

        setArcanaFilter((prevArcanaFilter) => (prevArcanaFilter === 'major' ? 'minor' : 'major'));
    }, [suitFilter]);

    const suiteTypeFilterHandler = useCallback((suit: SuitType) => {
        setSuitFilter((prevSuit) => (suit === prevSuit ? undefined : suit));
        setArcanaFilter('minor');
    }, []);

    const resetFilters = useCallback(() => {
        setSuitFilter(undefined);
        setArcanaFilter('minor');
    }, []);

    const debouncedSearch = useCallback(
        debounce((text: string) => {
            resetFilters();
            setCardsNameFilter(text);
        }, 300),
        [resetFilters],
    );

    const onSearchHandler = useCallback(
        (text: string) => {
            debouncedSearch(text);
        },
        [debouncedSearch],
    );

    const [cardsRemoteData, setCardsRemoteData] = useState<RemoteData<CardData[]>>(success([]));

    useEffect(() => {
        async function getCardsDataAsync() {
            const response = await getCardsData(cardsNameFilter);

            setCardsRemoteData(response);
        }

        getCardsDataAsync();
    }, [cardsNameFilter]);

    const filteredCards = useMemo(() => {
        const cards = isSuccess(cardsRemoteData) ? cardsRemoteData.data : [];

        if (cardsNameFilter !== '') {
            return cards;
        }

        let resultCards = [...cards];

        if (arcanaFilter === 'major') {
            resultCards = resultCards.filter((card) => card.arcana.type === 'major').sort(() => 1);
        } else if (suitFilter) {
            resultCards = resultCards.filter((card) => card.arcana.suit === suitFilter);
        }

        return resultCards;
    }, [cardsRemoteData, arcanaFilter, suitFilter, cardsNameFilter]);

    return {
        filteredCards,
        arcanaFilter,
        suitFilter,
        cardsNameFilter,
        toggleArcanaTypeFilter,
        suiteTypeFilterHandler,
        onSearchHandler,
    };
}
