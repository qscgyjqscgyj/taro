import { loadAsync } from 'expo-font';
import { useEffect, useState } from 'react';

export function useApp() {
    const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);

    useEffect(() => {
        async function loadFontsAsync() {
            try {
                await loadAsync({
                    Inter: require('src/styles/fonts/Inter-Regular.ttf'),
                    'Inter-Medium': require('src/styles/fonts/Inter-Medium.ttf'),
                });
                setFontsLoaded(true);
            } catch (error) {
                console.log('Error loading fonts:', error);
            }
        }

        loadFontsAsync();
    }, []);

    return { fontsLoaded };
}
