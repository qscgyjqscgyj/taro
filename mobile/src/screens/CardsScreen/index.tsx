import { Cards } from 'src/components/Cards';

import { useCardsScreen } from './hooks';
import { CardsScreenProps } from './types';

export function CardsScreen(props: CardsScreenProps) {
    const { onCardPressHandler } = useCardsScreen(props);

    return <Cards onCardPress={onCardPressHandler} />;
}
