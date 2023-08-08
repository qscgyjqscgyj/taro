import { useCallback, useMemo, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { debounce } from 'lodash';

import { ArcanaType, SuitType } from 'shared/types/cards';

import { useAppContext } from 'src/services/store/context';

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
import { normaliseFilterValue } from 'src/utils/strings';

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

    const { cards } = useAppContext();

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

    const filteredCards = useMemo(() => {
        if (cardsNameFilter !== '') {
            const normalisedCardsNameFilter = normaliseFilterValue(cardsNameFilter);

            return cards.filter((card) =>
                normaliseFilterValue(card.name).includes(normalisedCardsNameFilter),
            );
        }

        let resultCards = [...cards];

        if (arcanaFilter === 'major') {
            resultCards = resultCards.filter((card) => card.arcana.type === 'major').sort(() => 1);
        } else if (suitFilter) {
            resultCards = resultCards.filter((card) => card.arcana.suit === suitFilter);
        }

        return resultCards;
    }, [cards, arcanaFilter, suitFilter, cardsNameFilter]);

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
