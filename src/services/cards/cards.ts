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
import { wheelOfFortune } from './lib/wheelOfFortune/card';
import { justice } from './lib/justice/card';
import { hangedMan } from './lib/hangedMan/card';
import { death } from './lib/death/card';
import { temperance } from './lib/temperance/card';
import { devil } from './lib/devil/card';
import { tower } from './lib/tower/card';
import { star } from './lib/star/card';
import { moon } from './lib/moon/card';
import { sun } from './lib/sun/card';
import { judgement } from './lib/judgement/card';
import { world } from './lib/world/card';
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
        wheelOfFortune,
        justice,
        hangedMan,
        death,
        temperance,
        devil,
        tower,
        star,
        moon,
        sun,
        judgement,
        world,
    ];
}
