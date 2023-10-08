import { CardData } from 'shared/types/cards';

export const judgement: CardData = {
    name: 'JUDGEMENT',
    altNames: ['judgement', 'final judgement'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Conscience',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Healing, liberation, awakening',
                'Changes for the better',
                'Renewal, rebirth',
                'Choice, justice',
                'Success',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Self-doubt, lack of self-awareness, self-loathing',
                'Inability to absorb lessons, indecisiveness',
                'Delay, losses, disappointment',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Analysis of relationships, making corrections in them',
                'Minor changes now will lead to significant improvement in the future',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Desire to blame the partner',
                "It's worth reconsidering whether your attitude towards each other is fair",
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Searching for career goals, changes at work',
                'Realization of responsibility towards other people',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Self-doubt at work, excessive self-criticism',
                'Feeling of disappointment after mistakes, inability to take responsibility for them',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: [
                'Analysis of financial habits, making corrections based on the situation',
                'Reflections on your values and priorities',
                'Improving financial status',
            ],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Excessive self-flagellation', 'Inability to assimilate financial lessons'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: ['Achieving the desired soon', 'Change leading to the better'],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Signal to be honest with yourself',
                'Success is possible, but not quickly',
                'Complicated situations',
            ],
        },
    ],
};
