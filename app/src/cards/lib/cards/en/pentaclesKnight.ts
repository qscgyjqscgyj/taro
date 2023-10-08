import { CardData } from 'shared/types/cards';

export const pentaclesKnight: CardData = {
    name: 'KNIGHT OF PENTACLES',
    altNames: ['knight of pentacles', 'knight of coins', 'knight of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Question',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Hard-working, enduring, methodical, conservative',
                'Slow and steady',
                'Reliability, efficiency',
                'Mature and responsible person',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Workaholic, laziness',
                'Boring, tedious person, narrow-minded views',
                'Greed, a gambler',
                'Apathy, stagnation, lack of initiative, carefreeness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Loyal and diligent lover', 'Stable, reliable relationships'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Neglecting relationships',
                'Boring relationships, desire for strong changes',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Ambition, drive, and focus', 'Persistent work, unwavering effort'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Too little or too much ambition',
                'Insufficient diligence to achieve career goals',
                'Workaholic, obsessed with work, loss of balance',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ['Slow and steady financial growth', 'No risks - savings, frugality'],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Wasting money, impulsive purchases', 'Risky purchases, disappointment'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Business acumen, hard work, realistic approach, and professionalism will help achieve all goals',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Unfair dealings, miscommunication between people',
                'Frivolous and irresponsible person',
            ],
        },
    ],
};
