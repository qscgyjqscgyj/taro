import { loadAsync } from 'expo-font';

export async function initFonts() {
    return await loadAsync({
        Inter: require('src/styles/fonts/static/Inter-Regular.ttf'),
        'Inter-Medium': require('src/styles/fonts/static/Inter-Medium.ttf'),
        'Inter-Light': require('src/styles/fonts/static/Inter-Light.ttf'),
        'Inter-ExtraBold': require('src/styles/fonts/static/Inter-ExtraBold.ttf'),
    });
}
