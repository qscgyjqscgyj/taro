import { useState } from 'react';
import { GestureResponderEvent, LayoutChangeEvent } from 'react-native';

import { CardData } from 'shared/types/cards';

import { CardsListProps } from './types';

const CARD_WIDTH_OFFSET = 30;

export function useCardsList<CD>(props: CardsListProps<CD>) {
    const { onPressCard, deleteCard } = props;

    const [cardWidth, setCardWidth] = useState<number | undefined>();

    const handleCardWrapperLayout = (event: LayoutChangeEvent) => {
        if (cardWidth) {
            return;
        }

        const { width } = event.nativeEvent.layout;

        setCardWidth(width - CARD_WIDTH_OFFSET);
    };

    const onCardPressHandler = (event: GestureResponderEvent, card: CardData) => {
        event.stopPropagation();
        onPressCard(card);
    };

    const onCardDeletePressHandler = (event: GestureResponderEvent, card: CardData) => {
        event.stopPropagation();
        deleteCard!(card);
    };

    return { cardWidth, handleCardWrapperLayout, onCardPressHandler, onCardDeletePressHandler };
}
