import { Text, View } from 'react-native';

import { useSet } from './hooks';
import { SetProps } from './types';

export function Set(props: SetProps) {
    const { activeSet } = useSet(props);

    return (
        <>
            <Text>Active set: {activeSet ? activeSet.id : 'No set'}</Text>

            <Text>---------</Text>

            <View>
                {activeSet
                    ? activeSet.cards.map((card) => <Text key={card.name}>{card.name}</Text>)
                    : null}
            </View>
        </>
    );
}
