import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { I18nextProvider } from 'react-i18next';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cards } from 'src/components/Cards';
import { Card } from 'src/components/Cards/Card';
import { Header } from 'src/components/Header';
import i18n from 'src/services/localization/i18n';
import { useTranslation } from 'src/services/localization/hooks';

import { RootStackParamList } from './types';
import { useApp } from './hooks';
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
    const { fontsLoaded } = useApp();

    const { t } = useTranslation();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <LinearGradient colors={['#F1D9D9', '#AC67CC', '#5064A9']} style={styles.linearGradient}>
            <I18nextProvider i18n={i18n}>
                <SafeAreaView style={styles.container}>
                    <NavigationContainer theme={appTheme}>
                        <Stack.Navigator
                            initialRouteName={'CardsList'}
                            screenOptions={{
                                header: Header,
                                animation: 'none',
                            }}
                        >
                            <Stack.Screen name={'CardsList'} component={Cards} />

                            <Stack.Screen
                                name={'CardDetails'}
                                component={Card}
                                options={{
                                    title: t('cardDetailsTitle'),
                                }}
                            />
                        </Stack.Navigator>

                        <StatusBar style="auto" />
                    </NavigationContainer>
                </SafeAreaView>
            </I18nextProvider>
        </LinearGradient>
    );
}
