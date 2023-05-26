import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';

import { CardData } from 'shared/types/cards';
import { isSuccess, RemoteData, success } from 'shared/types/remoteData';

import { getCardsData } from 'src/services/cards';

import { CardsProps } from './types';

export function useCards(props: CardsProps) {
    const { navigation } = props;

    const [cardsRemoteData, setCardsRemoteData] = useState<RemoteData<CardData[]>>(success([]));
    const [cardsNameFilter, setCardsNameFilter] = useState<string>('');

    useEffect(() => {
        async function getCardsDataAsync() {
            const response = await getCardsData(cardsNameFilter);

            setCardsRemoteData(response);
        }

        getCardsDataAsync();
    }, [cardsNameFilter]);

    const onCardPressHandler = useCallback(
        (card: CardData) => {
            navigation.navigate('CardDetails', { card: card });
        },
        [navigation],
    );

    const debouncedSearch = useCallback(
        debounce((text: string) => {
            setCardsNameFilter(text);
        }, 300),
        [],
    );

    const onSearchHandler = useCallback(
        (text: string) => {
            debouncedSearch(text);
        },
        [debouncedSearch],
    );

    return { cardsRemoteData, cardsNameFilter, onCardPressHandler, onSearchHandler };
}
