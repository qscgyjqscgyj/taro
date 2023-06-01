import AsyncStorage from '@react-native-async-storage/async-storage';

export async function cacheImage(url: string) {
    try {
        const cachedImage = await AsyncStorage.getItem(url);

        if (cachedImage !== null) {
            return cachedImage;
        } else {
            const response = await fetch(url);
            const imageBlob = await response.blob();

            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);

            reader.onloadend = async () => {
                const readerData = reader.result;

                let base64data = readerData;
                if (typeof readerData !== 'string') {
                    const decoder = new TextDecoder('utf-8');
                    base64data = decoder.decode(readerData);
                }

                await AsyncStorage.setItem(url, base64data as string);
            };

            return await AsyncStorage.getItem(url);
        }
    } catch (error) {
        console.log('Error caching image:', error);
        return null;
    }
}
