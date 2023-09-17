// import { ImageSourcePropType } from 'react-native';

import { RemoteData } from 'shared/types/remoteData';
import { CardData } from 'shared/types/cards';
import { Locale } from 'shared/types/localization';

import { HOST } from 'src/services/initialise';

export async function getCardsData(locale: Locale): Promise<RemoteData<CardData[]>> {
    const cardDataRespone = await fetch(
        `${HOST}/cards?${new URLSearchParams({
            locale: locale,
        })}`,
        {},
    );

    return cardDataRespone.json();
}
