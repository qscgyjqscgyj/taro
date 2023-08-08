import React from 'react';
import { ScrollView, View } from 'react-native';

import { CardsFilter } from 'src/components/Cards/CardsFilter';
import { useCardsFilter } from 'src/components/Cards/CardsFilter/hooks';
import { SearchInput } from 'src/components/Cards/SearchInput';
import { CardsList } from 'src/components/Cards/CardsList';

import { CardsProps } from './types';
import { styles } from './styles';

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
            <View style={styles.cardsWrapper}>
                <CardsList cards={filteredCards} onPressCard={onCardPress} />
            </View>
        </ScrollView>
    );
}
