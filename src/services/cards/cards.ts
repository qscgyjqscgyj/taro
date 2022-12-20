import { fool } from './lib/fool/card';
import { magician } from './lib/magician/card';
import { highPriestess } from './lib/highPriestess/card';
import { empress } from './lib/empress/card';
import { emperor } from './lib/emperor/card';
import { hierophant } from './lib/hierophant/card';
import { lovers } from './lib/lovers/card';
import { chariot } from './lib/chariot/card';
import { strength } from './lib/strength/card';
import { hermit } from './lib/hermit/card';
import { CardData } from './types';

export function initializeGardsData(): CardData[] {
    return [
        fool,
        magician,
        highPriestess,
        empress,
        emperor,
        hierophant,
        lovers,
        chariot,
        strength,
        hermit,
    ];
}
