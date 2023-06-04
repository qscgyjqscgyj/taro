import { Text } from 'react-native';

import { AddToSetButtonProps } from './types';

export function AddToSetButton(props: AddToSetButtonProps) {
    const { navigation, card } = props;

    return <Text onPress={() => navigation.goBack()}>{card.name}</Text>;
}
