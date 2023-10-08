import { CardData } from 'shared/types/cards';

export const world: CardData = {
    name: 'The World',
    altNames: ['world', 'universe'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'The Spirit That Has Left the Material World',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Self-discovery, spiritual maturity, perfection',
                'Achievement, self-realization, success',
                'Harmony, freedom, completeness',
                'Triumph, calling',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lack of completion, a sense of unfinishedness, emptiness, inability to finish what has been started',
                'Lack of achievements, lack of vision, fear of change',
                'Failure, disappointment, stagnation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Happiness and deep satisfaction in relationships',
                'Feelings of love and gratitude',
                'Feeling of completeness with or without relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Feeling that something is missing in personal life',
                'Taking a partner for granted',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Achieving career goals, job satisfaction'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Incomplete satisfaction upon achieving career goals',
                'Missing element in your career',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Achieving financial goals, financial comfort', 'Enjoying the present'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Close to achieving financial goals',
                'Feeling of lack despite financial comfort',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Dizzying success, a happy ending',
                'Trust in your own insights and intuition',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Doubts, feelings of guilt',
                'Realization that something is missing for complete happiness',
                "It's worth examining the intentions of those around you",
            ],
        },
    ],
};
