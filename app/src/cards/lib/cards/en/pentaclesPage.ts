import { CardData } from 'shared/types/cards';

export const pentaclesPage: CardData = {
    name: 'PAGE OF PENTACLES',
    altNames: ['page of pentacles', 'page of coins', 'page of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Diligence',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Ambitious, diligent, goal-oriented',
                'Planning, consistent, diligent, decisive',
                'Loyal, faithful, kind',
                'Reflections, charity',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lazy, foolish, immature, irresponsible',
                'Missed opportunities, poor prospects',
                'Carelessness, self-criticism, mistakes',
                'Illogical thinking, defiance, wastefulness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Calm and balanced lover',
                'Devotion and mutual understanding in relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Lack of commitment',
                'Quickly switching between people/relationships',
                'Boredom and monotonous relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Making plans to achieve ambitions', 'Training that requires diligence'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Insufficient effort and involvement at work, lack of motivation',
                'Desire to succeed without effort',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ['Forming good financial habits - budgeting and sticking to it'],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Irresponsible attitude towards money', 'Financial insecurity'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Setting realistic goals promises a positive result',
                'The card hints at practical activity and reminds one to pay attention to details',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'The querent might try to present their negative qualities as virtues. Perhaps successes out of envy are possible',
                'Financial difficulties, bad news',
            ],
        },
    ],
};
