import { useCallback, useEffect } from 'react';

import { CardData } from 'shared/types/cards';
import { isSuccess } from 'shared/types/remoteData';

import { useAppContext } from 'src/services/store/context';
import { getCardsData } from 'src/services/cards';

import { CardsProps } from './types';

export function useCards(props: CardsProps) {
    const { navigation } = props;

    const { cards, dispatch } = useAppContext();

    useEffect(() => {
        if (cards.length === 0) {
            async function getCardsDataAsync() {
                const response = await getCardsData();

                if (isSuccess(response)) {
                    dispatch({ type: 'SET_CARDS', payload: response.data });
                }
            }

            getCardsDataAsync();
        }
    }, []);

    const onCardPressHandler = useCallback(
        (card: CardData) => {
            navigation.navigate('CardDetails', { card: card });
        },
        [navigation],
    );

    return { onCardPressHandler };
}
