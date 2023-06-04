import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { AddToSetButton } from 'src/components/Sets/AddToSetButton';

import { useHeader } from './hooks';
import { styles } from './styles';
import { backIcon } from './images';
import { MainHeader } from './MainHeader';
import { HeaderProps } from './types';

function NavigationHeader(props: HeaderProps) {
    const { back, options, rightBlock, navigation, route } = props;

    const { onBackPressHandler } = useHeader(props);

    const card = route.name === 'CardDetails' ? route.params.card : undefined;

    return (
        <View style={styles.container}>
            <View style={styles.leftBlock}>
                {back ? (
                    <TouchableOpacity onPress={onBackPressHandler}>
                        <Image source={backIcon} />
                    </TouchableOpacity>
                ) : null}
            </View>

            <View style={styles.centerBlock}>
                <Text style={styles.centerBlockText}>{options.title}</Text>
            </View>

            {rightBlock !== undefined && card !== undefined ? (
                <View style={styles.rightBlock}>{rightBlock({ navigation, card: card })}</View>
            ) : null}
        </View>
    );
}

export function Header(props: HeaderProps) {
    const { route } = props;

    switch (route.name) {
        case 'CardsList':
            return <MainHeader {...props} />;
        case 'CardDetails':
            return <NavigationHeader {...props} rightBlock={AddToSetButton} />;
        default:
            return <NavigationHeader {...props} />;
    }
}
