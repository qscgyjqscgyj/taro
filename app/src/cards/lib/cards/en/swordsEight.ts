import { CardData } from 'shared/types/cards';

export const swordsEight: CardData = {
    name: 'EIGHT OF SWORDS',
    altNames: ['eight of swords', 'eight of swords', 'eight of swords', 'eight of swords'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Restrictions',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Feeling trapped, limited',
                'Victim, weakness, helplessness, powerlessness',
                'Obstacles, beliefs, anticipation of failure',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Freedom, liberation, taking control',
                'Confronting fears, liberation from fear, strength',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Feeling trapped, suffocation, lack of choice', 'Passivity in love life'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Clearer vision of relationships', 'Active role in love life'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Dependency on work, inability to change profession',
                'Fear of changing jobs',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'New job for unleashing potential',
                'Getting rid of anxiety',
                'Unreliable partners',
                'Unrealized plans, disappointment',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Worry about money',
                'Not seeing additional financial opportunities that actually exist',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Reduced or intensified anxiety',
                'Fears clouding the truth',
                'Significant financial losses, large debts',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Self-pity, unrealistic problems and feeling cornered',
                'Lack of confidence in own abilities, self-deprecation, stagnation',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                "Being captive to others' beliefs, attitudes, or ideas",
                'External limitations, malice, and obstacles on the path to betterment',
            ],
        },
    ],
};
