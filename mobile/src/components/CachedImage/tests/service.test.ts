import AsyncStorage from '@react-native-async-storage/async-storage';

import { cacheImage } from '../service';

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
}));

describe('cacheImage', () => {
    beforeEach(() => {
        (AsyncStorage.getItem as jest.Mock).mockClear();
        (AsyncStorage.setItem as jest.Mock).mockClear();
    });

    it('should cache image when not previously cached', async () => {
        const url = 'https://example.com/image.jpg';
        const base64Data = 'base64-encoded-image-data';

        // Mock AsyncStorage.getItem to return null (image not cached)
        (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(null);

        // Mock the fetch response and blob
        global.fetch = jest.fn().mockResolvedValueOnce({
            blob: jest.fn().mockResolvedValueOnce({
                arrayBuffer: jest.fn().mockResolvedValueOnce(base64Data),
            }),
        });

        class MockFileReader {
            readAsDataURL = jest.fn();
            onloadend: any;
            result: any;
            readonly DONE = 2;
            readonly EMPTY = 0;
            readonly LOADING = 1;

            constructor() {
                this.result = base64Data;
            }
        }

        global.FileReader = MockFileReader as any;

        const cachedImageData = await cacheImage(url);

        // AsyncStorage.getItem should be called twice
        expect(AsyncStorage.getItem).toHaveBeenCalledTimes(2);

        expect(cachedImageData).toBe(undefined);
    });

    it('should return cached image when previously cached', async () => {
        const url = 'https://example.com/image.jpg';
        const base64Data = 'cached-image-data';

        // Mock AsyncStorage.getItem to return the cached image
        (AsyncStorage.getItem as jest.Mock).mockResolvedValueOnce(base64Data);

        const cachedImageData = await cacheImage(url);

        // AsyncStorage.getItem should be called once
        expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);

        // AsyncStorage.setItem should not be called
        expect(AsyncStorage.setItem).not.toHaveBeenCalled();

        // The result should be the cached image
        expect(cachedImageData).toBe(base64Data);
    });
});
