import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { useCard } from './hooks';
import { styles } from './styles';

export function Card() {
    const { cards } = useCard();

    return (
        <ScrollView style={styles.container}>
            {cards.map((card, cardIndex) => (
                <View key={`card-${cardIndex}`}>
                    <Text>{card.name}</Text>
                    <Text>{card.subTitle}</Text>

                    <Image
                        source={card.image}
                        style={{ width: 250, height: 250, resizeMode: 'contain' }}
                    />

                    {card.description.map((cardDescription, cardDescriptionIndex) => (
                        <View key={`card-description-${cardDescriptionIndex}`}>
                            <Text>{cardDescription.category}</Text>

                            <Text>
                                {cardDescription.direction === 'normal'
                                    ? 'Нормальное'
                                    : 'Перевернутое'}
                            </Text>

                            {cardDescription.textData.map((text, textIndex) => (
                                <Text key={`card-text-${textIndex}`}>-- {text}</Text>
                            ))}

                            <Text>-----------------</Text>
                        </View>
                    ))}
                </View>
            ))}
        </ScrollView>
    );
}
