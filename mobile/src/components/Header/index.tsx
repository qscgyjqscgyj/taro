import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import { useHeader } from './hooks';
import { styles } from './styles';
import { aboutMenuIcon, historyMenuIcon, setMenuIcon } from './images';

function MainHeader(props: NativeStackHeaderProps) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={setMenuIcon} />
                <Text style={styles.menuText}>Расклад</Text>
            </View>
            <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={historyMenuIcon} />
                <Text style={styles.menuText}>История</Text>
            </View>
            <View style={styles.menuItem}>
                <Image style={styles.menuIcon} source={aboutMenuIcon} />
                <Text style={styles.menuText}>О Таро</Text>
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
