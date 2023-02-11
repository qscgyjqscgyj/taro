// import { ImageSourcePropType } from 'react-native';

import { RemoteData } from 'aidbox-react';
import { CardData } from 'shared/types/cards';

export async function getCardsData(): Promise<RemoteData<CardData[]>> {
    const cardDataRespone = await fetch('http://localhost:4000/cards');

    return cardDataRespone.json();
}
