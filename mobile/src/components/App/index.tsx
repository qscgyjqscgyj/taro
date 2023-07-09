import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { I18nextProvider } from 'react-i18next';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Header } from 'src/components/Header';
import { Set } from 'src/components/Set';
import i18n from 'src/services/localization/i18n';
import { useTranslation } from 'src/services/localization/hooks';
import { AppContextProvider } from 'src/services/store';
import { MainLinearGradient } from 'src/components/App/LinearGradient';
import { CardScreen } from 'src/screens/CardScreen';
import { CardsScreen } from 'src/screens/CardsScreen';

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
        <AppContextProvider>
            <MainLinearGradient>
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
                                <Stack.Screen name={'CardsList'} component={CardsScreen} />

                                <Stack.Screen
                                    name={'CardDetails'}
                                    component={CardScreen}
                                    options={{
                                        title: t('cardDetailsTitle'),
                                    }}
                                />

                                <Stack.Screen
                                    name={'Set'}
                                    component={Set}
                                    options={{
                                        title: t('setScreenTitle'),
                                    }}
                                />
                            </Stack.Navigator>

                            <StatusBar style="auto" />
                        </NavigationContainer>
                    </SafeAreaView>
                </I18nextProvider>
            </MainLinearGradient>
        </AppContextProvider>
    );
}
