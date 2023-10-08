import { CardData } from 'shared/types/cards';

export const pentaclesSix: CardData = {
    name: 'SIX OF PENTACLES',
    altNames: [
        'six of pentacles',
        'six of coins',
        'six of denarii',
        'six of pentacles',
        'six of coins',
        'six of denarii',
    ],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Generosity',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Generosity, charity, material help',
                'Support, exchange, gratitude, kindness, mercy',
                'Financial benefit',
                'Mentorship',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Abuse of generosity, extortion',
                'Inequality',
                'Greed, selfishness, jealousy, dangerous mistake',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Emotional and financial support from a partner', 'Favorable relations'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Unfair power dynamics',
                'Uneven role distribution',
                'Using love for selfish purposes',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Generous mentor who shares his experience and time',
                'The querent is valued at the workplace',
                "If considering a job change, you'll find a better option than expected",
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Abuse of official position',
                'Hidden motives, "quid pro quo"',
                'Sycophancy to the management',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: [
                'Generous environment, material support, financing',
                'Donations, helping the needy',
            ],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Refusal to provide help', 'Gifts with conditions', 'Offenses'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: ['Gift, financial support', 'Help'],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: ['Financial losses - loss, theft, unpaid debt', 'Deception, poor quality'],
        },
    ],
};
