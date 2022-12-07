import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { Card } from 'src/components/Card';

import { styles } from './styles';

export function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Card />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}
