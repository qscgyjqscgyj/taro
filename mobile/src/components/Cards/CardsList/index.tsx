import { View, TouchableOpacity, Text } from 'react-native';

import { CachedImage } from 'src/components/CachedImage';

import { useCardsList } from './hooks';
import { CardsListProps } from './types';
import { styles } from './styles';

export function CardsList(props: CardsListProps) {
    const { cards } = props;

    const { onCardPressHandler } = useCardsList(props);

    return (
        <>
            {cards.map((card) => (
                <View key={card.name} style={styles.cardWrapper}>
                    <View style={styles.cardImageContainer}>
                        <View style={styles.cardImageWrapper}>
                            <TouchableOpacity onPress={(event) => onCardPressHandler(event, card)}>
                                <CachedImage url={card.image!} style={styles.cardImage} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.cardNameWrapper}>
                        <Text style={styles.cardNameText}>{card.name}</Text>
                    </View>
                </View>
            ))}
        </>
    );
}
