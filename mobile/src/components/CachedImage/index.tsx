import { Image } from 'react-native';

import { useCachedImage } from './hooks';

interface CachedImageProps {
    url: string;
    style?: any;
}

export function CachedImage(props: CachedImageProps) {
    const { url, style } = props;

    const { cachedImage } = useCachedImage(url);

    return cachedImage ? <Image source={{ uri: cachedImage }} style={style} /> : null;
}
