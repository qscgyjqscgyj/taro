import { CardData } from 'shared/types/cards';

export const sun: CardData = {
    name: 'SUN',
    altNames: ['sun'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Peace of Mind',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Happiness, joy, sincerity',
                'Optimism, self-confidence',
                'Success, satisfaction, achievements',
                'Development, auspicious omen',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Misfortune, problems, loss',
                'Cancelled plans, foggy future',
                'Unrealistic expectations, excessive enthusiasm',
                'Pessimism',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Happiness and harmony in relationships',
                'A positive attitude will attract people to you',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Boredom, taking love for granted',
                'Inability to see happiness in relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Enthusiasm and motivation at work',
                'Successful work projects',
                'Job satisfaction',
                'A positive mindset will help in your career',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Pessimistic views and inability to appreciate work',
                'Excessive self-confidence in work matters',
                'Unrealistic expectations',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Stable-comfortable financial situation'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Overly optimistic about finances',
                'A reminder that difficulties are temporary',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Your determination will lead you to great successes and achievements',
                'Good luck and prospects in new ventures',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Aiming for great success will lead to only an average result',
                'More effort will be required than initially planned to achieve your goals',
            ],
        },
    ],
};
