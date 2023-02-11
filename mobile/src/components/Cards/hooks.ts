import { useCallback, useEffect, useState } from 'react';
import { isSuccess, RemoteData, success, useService } from 'aidbox-react';

import { CardData } from 'shared/types/cards';

import { getCardsData } from 'src/services/cards';

import { CardsProps } from './types';

export function useCards(props: CardsProps) {
    const { navigation } = props;

    const [cardsRemoteData, setCardsRemoteData] = useState<RemoteData<CardData[]>>(success([]));

    useEffect(() => {
        const response = getCardsData();

        response.then((data) => {
            setCardsRemoteData(() => {
                if (isSuccess(data)) {
                    return data;
                }

                return success([]);
            });
        });
    }, [setCardsRemoteData]);

    const onCardPressHandler = useCallback(
        (card: CardData) => {
            navigation.navigate('CardDetails', { card: card });
        },
        [navigation],
    );

    return { cardsRemoteData, onCardPressHandler };
}
