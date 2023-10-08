import { CardData } from 'shared/types/cards';

export const strength: CardData = {
    name: 'Strength',
    altNames: ['strength'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Strength of Spirit',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Courage, calmness',
                'Self-confidence, inner strength',
                'Compassion, trust',
                'Optimism, driving force',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Fear, weakness, lack of self-confidence',
                'Aggressiveness, intimidation',
                'Vanity',
                'Illness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Sensual relationships (can be both love and passion, as well as anger and jealousy)',
                'Compassion and sympathy will be the key to better understanding each other',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Codependent relationships, linked to low self-esteem of one of the partners or a display of power)',
                'Excessive emotionalism in relationships, lack of sincerity',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Inner confidence and courage will help channel your emotions into productivity',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Lack of self-confidence hinders self-expression', 'Impostor syndrome'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Controlling impulsive spending promises financial peace',
                'Consider looking into significant well-thought-out purchases',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Impulsive and imposed spending may now cause significant harm',
                'Indecision in financial matters',
                'Lack of confidence in your financial abilities',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'The ability to manage others gently, without applying pressure',
                'The need to act with sensitivity and attentiveness',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Lack of a personal opinion, strict control over the actions of the querent',
                'The problem can be resolved if you tackle it thoroughly and stop letting it run its course',
            ],
        },
    ],
};
