// import { ImageSourcePropType } from 'react-native';

import { RemoteData } from 'shared/types/remoteData';
import { CardData } from 'shared/types/cards';

import { HOST } from 'src/services/initialise';

export async function getCardsData(): Promise<RemoteData<CardData[]>> {
    const cardDataRespone = await fetch(`${HOST}/cards`);

    return cardDataRespone.json();
}
