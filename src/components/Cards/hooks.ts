import { useCallback, useMemo } from 'react';

import { initializeGardsData } from 'src/services/cards/cards';
import { CardData } from 'src/services/cards/types';

import { CardsProps } from './types';

export function useCards(props: CardsProps) {
    const { navigation } = props;

    const cards = useMemo(() => {
        return initializeGardsData();
    }, []);

    const onCardPressHandler = useCallback(
        (card: CardData) => {
            navigation.navigate('CardDetails', { card: card });
        },
        [navigation],
    );

    return { cards, onCardPressHandler };
}
