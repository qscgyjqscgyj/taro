import { fool } from './lib/fool/card';
import { magician } from './lib/magician/card';
import { CardData } from './types';

export function initializeGardsData(): CardData[] {
    return [fool, magician];
}
