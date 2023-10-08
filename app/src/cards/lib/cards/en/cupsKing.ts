import { CardData } from 'shared/types/cards';

export const cupsKing: CardData = {
    name: 'KING OF CUPS',
    altNames: ['king of cups', 'king of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Wisdom',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Wise, diplomatic, balance between head and heart',
                'Devoted, adviser, consultant',
                'Empathy, kindness, imagination, elegance',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Depressed, anxious, cold',
                'Introverted, manipulative, selfish',
                'Scandal, deception, immaturity, indulgence',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Using rational and emotional in relationships',
                'Readiness to develop relationships, to achieve trust, love',
                'Sincerity, mutual respect, and trust in a couple, strong marriage',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Manipulations, deceit, and selfishness in love',
                'Temporary affair, dangerous variant, having a lover/mistress',
                'Lack of initiative and unwillingness to work on relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Balancing emotional, practical, and logical needs',
                'Wisdom leading to respect and admiration',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Selfishness and tyranny at work',
                'Keeping a job despite the lack of emotional satisfaction',
                'Unwillingness to advance in career, laziness, and unemployment',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial stability',
                'Being realistic, but hopeful about finances',
                'When contemplating a major purchase, being guided by logic',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Uncontrolled expenses',
                'Poor financial judgments',
                'Emotional financial choices',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Kindness combined with wisdom, care, responsibility',
                'Peaceful coexistence and orderliness, ability to think broadly, engaging other people in the process',
                'Realization of a big dream or goal',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Laziness, vanity, focus on external manifestations',
                'Frivolousness, carelessness, tendency to lie and exaggerate',
                "Loss of internal compass, betraying oneself, turning a blind eye to one's own principles",
            ],
        },
    ],
};
