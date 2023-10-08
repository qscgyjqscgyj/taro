import { CardData } from 'shared/types/cards';

export const death: CardData = {
    name: 'DEATH',
    altNames: ['death'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Transformation',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'End of a phase, irreversibility of changes',
                'Abandonment of outdated values and habits, liberation',
                'Loss of relationships, friendship, or profit',
                'Illness, death',
                'Awakening, new period',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Fear of changes, repeating negative patterns',
                'Resistance to change, stubbornness, passivity',
                'Stagnation, decline, lack of motivation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Transformation in relationships',
                'Change of beliefs about relationships',
                'Breakup',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Resistance to changes in relationships',
                'Dependency/desire to stick to relationships out of habit, restricting oneself from development without them',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                "Fear of the new due to clinging to a stable option that doesn't bring satisfaction",
                'Changes in career - new job, promotion, departure from the usual career path',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Repeating negative patterns, unhealthy work environment',
                'Stagnation',
                'Fear of changing activity',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Financial losses and adaptation to them', 'Changing views on money'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Inability to adapt to financial losses',
                'Maintaining unhealthy financial habits',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Something important has died, outlived, logically concluded',
                'Beginning of a new, completely unfamiliar stage of life',
                'Moving from the established to the new, which needs to be accepted',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Reluctance to let go of what has already lost meaning',
                'Resistance to change will exacerbate the situation, and accepting its inevitability will ease it',
            ],
        },
    ],
};
