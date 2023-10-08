import { CardData } from 'shared/types/cards';

export const wandsThree: CardData = {
    name: 'Three of Wands',
    altNames: ['three of wands', 'three of rods', 'three of staffs', 'three of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Beginnings',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Impulse, confidence, enterprise',
                'Expansion, growth, effort',
                'Foresight, looking into the future',
                'Material well-being, support, practical knowledge',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Limitations, delays',
                'Lack of progress, obstacles, disappointment',
                'Carelessness, creative stagnation, arrogance, pride',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'The next stage in relationships',
                'Building a strong foundation',
                'Romantic impulse',
                'An excellent time for joint travel',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Disappointments or obstacles in love that should not be rushed',
                'Learning to compromise in love',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'New horizons in your career that expand your career opportunities',
                'A suitable time for job searching abroad or expanding internationally',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Obstacles on your career path', 'Lack of growth and challenges'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Enjoying the results of your efforts',
                'Taking courses, traveling, or something else that helps broaden your horizons will be a good investment in the future',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Delays in achieving financial goals',
                'Feeling of chaos in the financial sphere',
                'Attention and control will help avoid problems',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Transitioning into an active phase',
                'Optimistic outlook on life and self-confidence',
                'A desire for something new, a search for different paths',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'A complex situation, enthusiasm for your ideals, stubbornness',
                'Impatience, a desire to achieve more',
                'Indecision, scatteredness, lack of a clear goal',
            ],
        },
    ],
};
