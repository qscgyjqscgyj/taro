import { View, TouchableOpacity, Text, Image } from 'react-native';

import { CachedImage } from 'src/components/CachedImage';
import { useTranslation } from 'src/services/localization/hooks';

import { whitePlusIcon } from './images';
import { useSetCardsList } from './hooks';
import { SetCardsListProps } from './types';
import { styles } from './styles';

export function SetCardsList(props: SetCardsListProps) {
    const { cards, addCard, deleteCard } = props;

    const { cardWidth, handleCardWrapperLayout, onCardPressHandler, onCardDeletePressHandler } =
        useSetCardsList(props);

    const { t } = useTranslation();

    return (
        <View style={styles.cardsWrapper}>
            {cards.map((card) => (
                <View key={card.name} style={styles.cardWrapper}>
                    <View style={styles.cardImageContainer}>
                        {deleteCard !== undefined ? (
                            <View style={styles.deleteIconWrapper}>
                                <TouchableOpacity
                                    onPress={(event) => onCardDeletePressHandler(event, card)}
                                >
                                    <Image style={styles.deleteIcon} source={whitePlusIcon} />
                                </TouchableOpacity>
                            </View>
                        ) : null}

                        <View style={styles.cardImageWrapper}>
                            <TouchableOpacity onPress={(event) => onCardPressHandler(event, card)}>
                                <CachedImage
                                    url={card.image!}
                                    style={[
                                        styles.cardImage,
                                        'direction' in card && card.direction === 'reversed'
                                            ? styles.reversedImage
                                            : {},
                                    ]}
                                    onLayout={handleCardWrapperLayout}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.cardNameWrapper}>
                        <Text style={styles.cardNameText}>{card.name}</Text>
                    </View>
                </View>
            ))}

            {addCard !== undefined ? (
                <View style={styles.cardWrapper}>
                    <View style={styles.cardImageWrapper}>
                        <TouchableOpacity onPress={addCard}>
                            <View
                                style={[
                                    styles.emptyCardWrpper,
                                    cardWidth ? { maxWidth: cardWidth } : { maxWidth: 100 },
                                ]}
                            >
                                <Image style={styles.emptyCardAddIcon} source={whitePlusIcon} />

                                <Text style={styles.emptyCardText}>
                                    {t('setCardsListAddCardText')}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
        </View>
    );
}
