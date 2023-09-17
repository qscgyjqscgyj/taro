import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';

import { CachedImage } from 'src/components/CachedImage';
import { Switcher } from 'src/components/UI/Switcher';
import { useTranslation } from 'src/services/localization/hooks';

import { CardProps } from './types';
import { useCard } from './hooks';
import { chevronDownIcon } from './images';
import { styles } from './styles';

export function Card(props: CardProps) {
    const { card } = props;

    const {
        reversedValue,
        filteredCardDescription,
        reversedValueToggle,
        toggleCardDescriptionAccordion,
        openedCardDescriptionIndeces,
    } = useCard(props);

    const { t } = useTranslation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.cardWrapper}>
                    <CachedImage
                        url={card.image!}
                        style={[styles.cardImage, reversedValue ? styles.reversedImage : {}]}
                    />
                </View>

                <View style={styles.cardTitleWrapper}>
                    <Text style={styles.cardTitle}>{card.name}</Text>
                    <Text style={styles.cardSubTitle}>{card.subTitle}</Text>
                </View>

                <Switcher
                    onPress={reversedValueToggle}
                    values={[t('cardDirectionNormal'), t('cardDirectionFlipped')]}
                    value={reversedValue ? 1 : 0}
                />

                <View style={styles.descriptionWrapper}>
                    {filteredCardDescription.map((cardDescription, cardDescriptionIndex) => (
                        <Pressable
                            onPress={() => toggleCardDescriptionAccordion(cardDescriptionIndex)}
                            key={String(cardDescription.textData)}
                        >
                            <View style={styles.description}>
                                <View style={styles.descriptionTitleWrapper}>
                                    <Text style={styles.descriptionTitle}>
                                        {cardDescription.category}
                                    </Text>

                                    <Image
                                        source={chevronDownIcon}
                                        style={[
                                            openedCardDescriptionIndeces.has(cardDescriptionIndex)
                                                ? styles.dropdownReverseChevronIcon
                                                : {},
                                        ]}
                                    />
                                </View>

                                {openedCardDescriptionIndeces.has(cardDescriptionIndex) ? (
                                    <View style={styles.descriptionTextWrapper}>
                                        {cardDescription.textData.map((text) => (
                                            <View style={styles.descriptionTextItem} key={text}>
                                                <Text style={styles.bullet}>•</Text>
                                                <Text style={styles.descriptionText}>{text}</Text>
                                            </View>
                                        ))}
                                    </View>
                                ) : null}
                            </View>
                        </Pressable>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
