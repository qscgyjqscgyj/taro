import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cards } from 'src/components/Cards';
import { Card } from 'src/components/Cards/Card';
import { Header } from 'src/components/Header';

import { RootStackParamList } from './types';
import { styles } from './styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={'CardsList'} screenOptions={{ header: Header }}>
                    <Stack.Screen
                        name={'CardsList'}
                        component={Cards}
                        options={{ title: 'Cards list' }}
                    />

                    <Stack.Screen
                        name={'CardDetails'}
                        component={Card}
                        options={{ title: 'Card details' }}
                    />
                </Stack.Navigator>

                <StatusBar style="auto" />
            </NavigationContainer>
        </SafeAreaView>
    );
}
