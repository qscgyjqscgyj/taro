import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getStorageItem(key: string) {
    return await AsyncStorage.getItem(key);
}

export async function setStorageItem(key: string, value: string) {
    return await AsyncStorage.setItem(key, value);
}
