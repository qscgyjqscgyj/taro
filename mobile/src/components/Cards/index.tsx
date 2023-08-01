import React from 'react';
import { ScrollView } from 'react-native';

import { CardsFilter } from 'src/components/Cards/CardsFilter';
import { useCardsFilter } from 'src/components/Cards/CardsFilter/hooks';
import { SearchInput } from 'src/components/Cards/SearchInput';
import { CardsList } from 'src/components/Cards/CardsList';

import { CardsProps } from './types';
import { CardData } from 'shared/types/cards';

export function Cards(props: CardsProps) {
    const { onCardPress } = props;

    const {
        filteredCards,
        arcanaFilter,
        suitFilter,
        toggleArcanaTypeFilter,
        suiteTypeFilterHandler,
        onSearchHandler,
    } = useCardsFilter();

    return (
        <ScrollView>
            <SearchInput onChange={onSearchHandler} />

            <CardsFilter
                suitFilter={suitFilter}
                arcanaFilter={arcanaFilter}
                toggleArcanaTypeFilter={toggleArcanaTypeFilter}
                suiteTypeFilterHandler={suiteTypeFilterHandler}
            />

            <CardsList<CardData> cards={filteredCards} onPressCard={onCardPress} />
        </ScrollView>
    );
}
