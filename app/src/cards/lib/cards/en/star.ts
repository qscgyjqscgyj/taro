import { CardData } from 'shared/types/cards';

export const star: CardData = {
    name: 'STAR',
    altNames: ['star'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Hope',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Faith, inspiration, bright prospects',
                'Mix of past and present, promising opportunity',
                'Positivity, inspiration',
                'Renewal, healing',
                'Education, spirituality, creativity',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Losses, doubts',
                'Pessimism, despondency, lack of faith',
                'Unfulfilled hopes, disappointment, lack of opportunities',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Optimistic view of personal life', 'Healing from past wounds'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Loss of hope in relationships, loss of faith in oneself',
                'Extreme criticism',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Positive prospects', 'Steady work'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Excessive pessimism about work',
                'Lack of enthusiasm and motivation affecting work',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Optimistic attitude and gratitude for existing successes',
                'Achievement of financial goals',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Despair about financial position, which can be changed by seeking solutions with a more optimistic attitude',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: ['Improvement of the situation, favorable changes, positive outcome'],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Loss of faith, despondency',
                'Loss of a valuable opportunity due to excessive self-criticism',
            ],
        },
    ],
};
