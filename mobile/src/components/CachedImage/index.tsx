import { Image, ImageProps } from 'react-native';

import { useCachedImage } from './hooks';

interface CachedImageProps extends Omit<ImageProps, 'source'> {
    url: string;
}

export function CachedImage(props: CachedImageProps) {
    const { url, style, onLayout } = props;

    const { cachedImage } = useCachedImage(url);

    return cachedImage ? (
        <Image onLayout={onLayout} source={{ uri: cachedImage }} style={style} />
    ) : null;
}
