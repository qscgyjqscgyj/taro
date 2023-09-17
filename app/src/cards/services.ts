import { CardData } from 'shared/types/cards';
import { Locale } from 'shared/types/localization';

import { getCardImageUrl } from 'src/cards/utils';
import { CardsData } from 'src/cards/lib/cards/types';
import { allRUCards } from 'src/cards/lib/cards/ru';
import { allENCards } from 'src/cards/lib/cards/en';

function getCardsByLocale(locale: Locale) {
    if (locale === 'ru') {
        return allRUCards;
    } else if (locale === 'en') {
        return allENCards;
    }

    return [];
}

export function initializeCardsData(locale: Locale): CardData[] {
    const allCards = getCardsByLocale(locale);

    const resultCards = allCards.reduce<CardData[]>((result, cardData) => {
        result.push({ ...cardData.card, image: getCardImageUrl(cardData.name) });
        return result;
    }, []);

    return resultCards;
}
