import { CardData } from 'shared/types/cards';

export const wandsEight: CardData = {
    name: 'EIGHT OF WANDS',
    altNames: ['eight of wands', 'eight of rods', 'eight of staffs', 'eight of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Speed',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Movement, speed, progress',
                'Quick decisions, sudden changes, excitement',
                'New friends, creative breakthrough, progress',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Waiting, slowness, loss of pace',
                'Chaos, delays, obstacles',
                'Haste, unpreparedness, impulsiveness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Spark and energy for romantic relationships',
                'Infatuation, desire to be together',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Misunderstandings and confusion', 'Time needed in love matters'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Swift forward movement in a literal or metaphorical sense',
                'Business trip',
                'Rapid career development',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Stagnation in career',
                'Missed opportunities, too fast (hasty) career movement in the past',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Fast financial movement - easy income and impulsive spending'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Disappointment with slow money flow',
                'Lack of patience for financial growth',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Making quick decisions, influencing the speed of processes',
                'Dynamic, rapid development of events',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Urgent matters, lack of time',
                'Hasty decisions will lead to future problems',
            ],
        },
    ],
};
