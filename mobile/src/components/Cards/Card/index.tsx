import React from 'react';
import { View, Text, ScrollView, Pressable, FlatList } from 'react-native';

import { CachedImage } from 'src/components/CachedImage';

import { styles } from './styles';
import { CardProps } from './types';
import { useCard } from './hooks';

export function Card(props: CardProps) {
    const { route } = props;

    const { card } = route.params;

    const { reversedValue, reversedValueToggle } = useCard(props);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.cardWrapper}>
                    <CachedImage
                        url={card.image}
                        style={[styles.cardImage, reversedValue ? styles.reversedImage : {}]}
                    />
                </View>

                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{card.name}</Text>
                    <Text style={styles.cardSubTitle}>{card.subTitle}</Text>
                </View>

                <Pressable onPress={reversedValueToggle}>
                    <View style={styles.cardDirectionWrapper}>
                        <View
                            style={[
                                styles.cardDirectionItem,
                                reversedValue ? {} : styles.cardDirectionActiveItem,
                            ]}
                        >
                            <Text>Прямое</Text>
                        </View>

                        <View
                            style={[
                                styles.cardDirectionItem,
                                reversedValue ? styles.cardDirectionActiveItem : {},
                            ]}
                        >
                            <Text>Перевернутое</Text>
                        </View>
                    </View>
                </Pressable>

                <View style={styles.descriptionWrapper}>
                    <FlatList
                        style={{ margin: 40 }}
                        data={card.description}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.description}>
                                    <Text style={styles.descriptionTitle}>{item.category}</Text>
                                    {item.textData.map((text, textIndex) => (
                                        <Text key={`card-text-${textIndex}`}>{text}</Text>
                                    ))}
                                </View>
                            );
                        }}
                    />

                    {/* <View style={styles.descriptionsWrapper}></View> */}
                </View>

                {/* {card.description.map((cardDescription, cardDescriptionIndex) => (
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
                ))} */}
            </View>
        </ScrollView>
    );
}
