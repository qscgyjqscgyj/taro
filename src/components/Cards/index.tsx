import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import { useCards } from './hooks';
import { styles } from './styles';
import { CardsProps } from './types';

export function Cards(props: CardsProps) {
    const { cards, onCardPressHandler } = useCards(props);

    return (
        <ScrollView style={styles.container}>
            {cards.map((card, cardIndex) => (
                <View key={`card-${cardIndex}`}>
                    <TouchableOpacity onPress={() => onCardPressHandler(card)}>
                        <Image source={card.image} style={styles.cacrdImage} />
                    </TouchableOpacity>
                    <Text>{card.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
