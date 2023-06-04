import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { styles } from './styles';
import { CardProps } from './types';

export function Card(props: CardProps) {
    const { route } = props;
    const { card } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>{card.name}</Text>
                <Text>{card.subTitle}</Text>

                <Image
                    source={{ uri: card.image }}
                    style={{ width: 250, height: 250, resizeMode: 'contain' }}
                />

                {card.description.map((cardDescription, cardDescriptionIndex) => (
                    <View key={`card-description-${cardDescriptionIndex}`}>
                        <Text>{cardDescription.category}</Text>

                        <Text>
                            {cardDescription.direction === 'normal' ? 'Нормальное' : 'Перевернутое'}
                        </Text>

                        {cardDescription.textData.map((text, textIndex) => (
                            <Text key={`card-text-${textIndex}`}>-- {text}</Text>
                        ))}

                        <Text>-----------------</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}
