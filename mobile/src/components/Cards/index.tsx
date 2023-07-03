import React from 'react';
import { View, ScrollView } from 'react-native';

import { CardsFilter } from 'src/components/Cards/CardsFilter';
import { useCardsFilter } from 'src/components/Cards/CardsFilter/hooks';
import { SearchInput } from 'src/components/Cards/SearchInput';
import { CardsList } from 'src/components/Cards/CardsList';

import { useCards } from './hooks';
import { CardsProps } from './types';

export function Cards(props: CardsProps) {
    const { onCardPressHandler } = useCards(props);

    const {
        filteredCards,
        arcanaFilter,
        suitFilter,
        toggleArcanaTypeFilter,
        suiteTypeFilterHandler,
        onSearchHandler,
    } = useCardsFilter();

    return (
        <View>
            <SearchInput onChange={onSearchHandler} />

            <CardsFilter
                suitFilter={suitFilter}
                arcanaFilter={arcanaFilter}
                toggleArcanaTypeFilter={toggleArcanaTypeFilter}
                suiteTypeFilterHandler={suiteTypeFilterHandler}
            />

            <ScrollView style={{ marginBottom: 150 }}>
                <CardsList cards={filteredCards} onPressCard={onCardPressHandler} />
            </ScrollView>
        </View>
    );
}
