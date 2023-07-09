import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { AddToSetButton } from 'src/components/Set/AddToSetButton';

import { useHeader } from './hooks';
import { styles } from './styles';
import { backIcon } from './images';
import { MainHeader } from './MainHeader';
import { HeaderProps } from './types';

function NavigationHeader(props: HeaderProps) {
    const { back, options, rightBlock } = props;

    const { onBackPressHandler } = useHeader(props);

    return (
        <View style={styles.container}>
            {back ? (
                <TouchableOpacity onPress={onBackPressHandler}>
                    <View style={styles.leftBlock}>
                        <Image source={backIcon} />
                    </View>
                </TouchableOpacity>
            ) : (
                <View style={styles.leftBlock}></View>
            )}

            <View style={styles.centerBlock}>
                <Text style={styles.centerBlockText}>{options.title}</Text>
            </View>

            <View style={styles.rightBlock}>
                {rightBlock !== undefined ? rightBlock(props) : null}
            </View>
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
