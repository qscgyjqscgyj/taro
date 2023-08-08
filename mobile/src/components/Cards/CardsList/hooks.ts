import { GestureResponderEvent } from 'react-native';

import { CardData } from 'shared/types/cards';

import { CardsListProps } from './types';

export function useCardsList(props: CardsListProps) {
    const { onPressCard } = props;

    const onCardPressHandler = (event: GestureResponderEvent, card: CardData) => {
        event.stopPropagation();
        onPressCard(card);
    };

    return { onCardPressHandler };
}
