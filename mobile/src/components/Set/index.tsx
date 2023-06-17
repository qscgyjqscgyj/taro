import { Text } from 'react-native';

import { useSet } from './hooks';
import { SetProps } from './types';

export function Set(props: SetProps) {
    const { params } = props.route;

    const card = params?.card;
    const activeSet = params?.activeSet ?? null;

    const {} = useSet(props);

    if (card === undefined) {
        return <Text>Set Screen with no card</Text>;
    }

    return (
        <>
            <Text>Set Screen, card: {card.name}</Text>
            <Text>active set: {activeSet ? activeSet.id : 'No set'}</Text>
        </>
    );
}
