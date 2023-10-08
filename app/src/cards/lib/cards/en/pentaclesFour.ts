import { CardData } from 'shared/types/cards';

export const pentaclesFour: CardData = {
    name: 'FOUR OF PENTACLES',
    altNames: [
        'four of pentacles',
        'four of coins',
        'four of denarii',
        'four of pentacles',
        'four of coins',
        'four of denarii',
    ],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Firm Grip',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Accumulation, saving',
                'Stability, security, materialism',
                'Possessiveness, insecurity',
                'Greed, miserliness',
                'Gift, inheritance',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Generosity, spending, openness',
                'Financial vulnerability, thoughtless spending',
                'Timidity, suspicions, quarrels',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Obsessive lover',
                'Jealousy, feeling of insecurity',
                'Clinging to the past',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Overcoming jealousy', 'Liberation from past memories and offenses'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Impostor syndrome, paranoia, and anxiety',
                'Avoiding collaboration',
                "Sticking to a stable job that doesn't bring pleasure",
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Generosity with colleagues', 'Risky decisions in work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Thrift',
                'Financial accumulation (e.g., for a major purchase)',
                'Stability',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Moving from thrift towards generosity',
                'Sacrificing and sharing resources',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'The goal will be achieved in the planned way and within the set deadlines',
                "The querent's interest is currently focused on the material component",
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Fixation on past achievements, fear of moving forward',
                'Fear of losing what one has',
            ],
        },
    ],
};
