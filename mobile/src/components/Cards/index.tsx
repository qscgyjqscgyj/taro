import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import { CardsFilter } from 'src/components/Cards/CardsFilter';
import { useCardsFilter } from 'src/components/Cards/CardsFilter/hooks';

import { useCards } from './hooks';
import { CardsProps } from './types';
import { styles } from './styles';
import { SearchInput } from './SearchInput';

export function Cards(props: CardsProps) {
    const { cardsRemoteData, cardsNameFilter, onCardPressHandler, onSearchHandler } =
        useCards(props);

    const {
        filteredCards,
        arcanaFilter,
        suitFilter,
        toggleArcanaTypeFilter,
        suiteTypeFilterHandler,
    } = useCardsFilter({
        cardsRemoteData,
        cardsNameFilter,
    });

    return (
        <View style={styles.container}>
            <SearchInput onChange={onSearchHandler} />

            <CardsFilter
                suitFilter={suitFilter}
                arcanaFilter={arcanaFilter}
                toggleArcanaTypeFilter={toggleArcanaTypeFilter}
                suiteTypeFilterHandler={suiteTypeFilterHandler}
            />

            <ScrollView>
                <View style={styles.cardsWrapper}>
                    {filteredCards.map((card, cardIndex) => (
                        <View key={`card-${cardIndex}`} style={styles.cardWrapper}>
                            <View style={styles.cardImageWrapper}>
                                <TouchableOpacity onPress={() => onCardPressHandler(card)}>
                                    <Image source={{ uri: card.image }} style={styles.cardImage} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.cardNameWrapper}>
                                <Text style={styles.cardNameText}>{card.name}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}
