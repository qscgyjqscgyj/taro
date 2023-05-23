import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { useHeader } from './hooks';
import { styles } from './styles';

function MainHeader(props: NativeStackHeaderProps) {
    return (
        <View style={styles.container}>
            <View style={styles.centerBlock}>
                <Text style={styles.centerBlockText}>MainHeader</Text>
            </View>
        </View>
    );
}

function NavigationHeader(props: NativeStackHeaderProps) {
    const { back } = props;

    const { onBackPressHandler } = useHeader(props);

    return (
        <View style={styles.container}>
            <View style={styles.leftBlock}>
                {back ? (
                    <TouchableOpacity onPress={onBackPressHandler}>
                        <Text>{back.title}</Text>
                    </TouchableOpacity>
                ) : null}
            </View>

            <View style={styles.centerBlock}>
                <Text style={styles.centerBlockText}>NavigationHeader</Text>
            </View>

            <View style={styles.rightBlock}></View>
        </View>
    );
}

export function Header(props: NativeStackHeaderProps) {
    const { route } = props;

    switch (route.name) {
        case 'CardsList':
            return <MainHeader {...props} />;
        default:
            return <NavigationHeader {...props} />;
    }
}
