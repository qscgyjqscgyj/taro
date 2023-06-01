import { useEffect, useState } from 'react';

import { cacheImage } from './service';
import { isNull } from 'lodash';

export function useCachedImage(url: string) {
    const [cachedImage, setCachedImage] = useState<string | undefined>();

    useEffect(() => {
        async function getImageDataFromAsyncStorage() {
            const cachedImage = await cacheImage(url);

            if (!isNull(cachedImage)) {
                setCachedImage(cachedImage);
            } else {
                setCachedImage(url);
            }
        }

        getImageDataFromAsyncStorage();
    }, [url]);

    return { cachedImage };
}
