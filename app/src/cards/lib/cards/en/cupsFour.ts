import { CardData } from 'shared/types/cards';

export const cupsFour: CardData = {
    name: 'FOUR OF CUPS',
    altNames: ['four of cups', 'four of chalices', 'quartet of cups', 'quartet of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Dissatisfaction',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Apathy, boredom, feeling of disconnection, melancholy, indifference',
                'Dissatisfaction, resentment, self-doubt, introversion',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Clarity, awareness, acceptance',
                'Depressive moods, negativity',
                'Feeling of missed opportunity, self-pity',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Boredom in personal life', 'Lack of vivid emotions in relationships'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Awakening and activity in the romantic sphere',
                'New discovery, fresh perspective on relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Boredom at work',
                'Feeling of dissatisfaction with work or career',
                'Lack of progress',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Inspiration or creativity',
                'Career realization, new approach',
                'Adjustments',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Feeling of disappointment in money', 'Envy towards other people'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Positive approach to finances',
                'Willpower to achieve financial goals',
                'Focus on personal decisions',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                "Identity crisis, questions about one's place in life, search for meaning",
                'Boredom, tiresome people, worn-out relationships, overprotection, intrusiveness',
                "Fastidiousness, inflexibility, focus only on one's opinion",
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Second wind, revealing new strengths, new opportunities that should not be missed',
                'Susceptibility to external influence, unfair compromise',
                'Regression, immersion in memories, recalling past experience',
            ],
        },
    ],
};
