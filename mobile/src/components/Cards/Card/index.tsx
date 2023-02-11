import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from 'src/components/App/types';

import { styles } from './styles';

type CardProps = NativeStackScreenProps<RootStackParamList, 'CardDetails'>;

export function Card({ route }: CardProps) {
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
