import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardData } from 'shared/types/cards';
import { isSuccess } from 'shared/types/remoteData';
import { Locale } from 'shared/types/localization';

import { useLocale } from 'src/services/localization/hooks';
import { getCardsData } from 'src/services/cards';
import { selectCards, setCards } from 'src/services/store';

import { CardsScreenProps } from './types';

export function useCardsScreen(props: CardsScreenProps) {
    const { navigation } = props;

    const { currentLocale } = useLocale();

    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    useEffect(() => {
        if (cards.length === 0) {
            async function getCardsDataAsync() {
                const response = await getCardsData(currentLocale.languageCode as Locale);

                if (isSuccess(response)) {
                    dispatch(setCards(response.data));
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
