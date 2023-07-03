import { View, TouchableOpacity, Text, Image } from 'react-native';

import { CardData } from 'shared/types/cards';

import { CachedImage } from 'src/components/CachedImage';

import { whitePlusIcon } from './images';
import { useCardsList } from './hooks';
import { styles } from './styles';

interface CardsListProps {
    cards: CardData[];
    onPressCard: (card: CardData) => void;
    addCard?: () => void;
    deleteCard?: (card: CardData) => void;
}

export function CardsList(props: CardsListProps) {
    const { cards, onPressCard, addCard } = props;

    const { cardWidth, handleCardWrapperLayout } = useCardsList();

    return (
        <View style={styles.cardsWrapper}>
            {cards.map((card, cardIndex) => (
                <View key={`card-${cardIndex}`} style={styles.cardWrapper}>
                    <View style={styles.cardImageWrapper}>
                        <TouchableOpacity onPress={() => onPressCard(card)}>
                            <CachedImage
                                url={card.image}
                                style={styles.cardImage}
                                onLayout={handleCardWrapperLayout}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardNameWrapper}>
                        <Text style={styles.cardNameText}>{card.name}</Text>
                    </View>
                </View>
            ))}

            {addCard && (
                <View style={styles.cardWrapper}>
                    <View style={styles.cardImageWrapper}>
                        <TouchableOpacity onPress={addCard}>
                            <View
                                style={[
                                    styles.emptyCardWrpper,
                                    cardWidth ? { maxWidth: cardWidth } : {},
                                ]}
                            >
                                <Image style={styles.emptyCardAddIcon} source={whitePlusIcon} />

                                <Text style={styles.emptyCardText}>добавить карту</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
