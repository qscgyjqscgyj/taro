import { CardData } from 'shared/types/cards';

export const pentaclesTwo: CardData = {
    name: 'TWO OF PENTACLES',
    altNames: ['two of pentacles', 'two of coins', 'two of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Fuss',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Balancing',
                'Adaptation, flexibility',
                'Chaotic, emotions',
                'Agility, resourcefulness',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Imbalance, anxiety',
                'Disorganization, chaos',
                'Overload, strain, spirit downfall',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Difficulty in maintaining balance between love, family, and work',
                'Adaptation to changes in relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Setting priorities between relationships and something else',
                'Neglecting partner',
                'Choice between two (potential) partners',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Juggling projects, excessive workload', 'Resourcefulness at work'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Stress from work overload \u2013 need to review priorities and make adjustments',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Limited finances, instability', 'Setting financial priorities'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Problem of resource shortage, which can be solved by cutting expenses or looking for additional earning options',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                "There's a lot of energy that can be directed towards the realization of what's planned",
                'Confusion in thoughts',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Fatigue and loss of motivation',
                'Need time for secluded rest and reflection',
            ],
        },
    ],
};
