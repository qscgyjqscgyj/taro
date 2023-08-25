import { getFullHost } from 'src/services';

export function getCardImageUrl(name: string) {
    return `${getFullHost()}/images/images/${name}.png`;
}
