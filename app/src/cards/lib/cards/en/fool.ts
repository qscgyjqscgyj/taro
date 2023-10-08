import { CardData } from 'shared/types/cards';

export const fool: CardData = {
    name: 'FOOL',
    altNames: ['joker', 'fool', 'dunce', 'madman'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Spirit',
    number: 0,
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Beginning',
                'Inner freedom',
                'Extravagance',
                'Life here and now',
                'Adventures',
                'Curiosity',
                'Spontaneity',
                "'Inner child'",
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Impulsiveness',
                'Inattention',
                'Recklessness',
                'Apathy',
                'Irresponsibility',
                'Inexperience',
                'Naivety',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['New relationships', 'Freshness in relationships', 'Cheerful light romance'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Lack of commitments', 'Infantilism', 'Risky relationships', 'Cheating'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['New job and projects', 'Talk of a promotion', 'Updates at work'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Boring job', 'Ill-considered actions at work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Spontaneous expenses', 'Financial opportunities'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Carelessness with finances', 'Silly purchases, expenses'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: ['Traveler', 'Carefree personality'],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: ['Disorder, chaos, and mess'],
        },
    ],
};
