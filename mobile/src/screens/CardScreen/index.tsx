import { Card } from 'src/components/Cards/Card';

import { useCardScreen } from './hooks';
import { CardScreenProps } from './types';

export function CardScreen(props: CardScreenProps) {
    const { route } = props;

    useCardScreen(props);

    const { card } = route.params;

    return <Card card={card} />;
}
