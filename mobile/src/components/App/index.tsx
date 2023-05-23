import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import { Cards } from 'src/components/Cards';
import { Card } from 'src/components/Cards/Card';
import { Header } from 'src/components/Header';

import { RootStackParamList } from './types';
import { styles } from './styles';

const Stack = createNativeStackNavigator<RootStackParamList>();

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export function App() {
    return (
        <LinearGradient colors={['#F1D9D9', '#AC67CC', '#5064A9']} style={styles.linearGradient}>
            <SafeAreaView style={styles.container}>
                <NavigationContainer theme={appTheme}>
                    <Stack.Navigator
                        initialRouteName={'CardsList'}
                        screenOptions={{
                            header: Header,
                            animation: 'none',
                        }}
                    >
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
        </LinearGradient>
    );
}
