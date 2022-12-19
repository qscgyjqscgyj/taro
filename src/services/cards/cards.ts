import { fool } from './lib/fool/card';
import { magician } from './lib/magician/card';
import { highPriestess } from './lib/highPriestess/card';
import { hierophant } from './lib/hierophant/card';
import { CardData } from './types';

export function initializeGardsData(): CardData[] {
    return [fool, magician, highPriestess, hierophant];
}
