import { useCallback } from 'react';

import { CardData } from 'shared/types/cards';

import { CardsProps } from './types';

export function useCards(props: CardsProps) {
    const { navigation } = props;

    const onCardPressHandler = useCallback(
        (card: CardData) => {
            navigation.navigate('CardDetails', { card: card });
        },
        [navigation],
    );

    return { onCardPressHandler };
}
