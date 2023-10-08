import { CardData } from 'shared/types/cards';

export const magician: CardData = {
    name: 'MAGICIAN',
    altNames: ['magician', 'wizard'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Willpower',
    number: 1,
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Will',
                'Skill',
                'Diplomacy, flexibility',
                'Desire',
                'Self-confidence',
                'Thirst for action, courage',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: ['Clumsiness', 'Deception', 'Illusions', 'Indecision', 'Weak-willed'],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Creating conditions and opportunities for love',
                'Taking initiative',
                'Active participation in relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Romantic illusion', 'Deception'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Using opportunities for career growth', 'Determination and ambition'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Wasted talent', 'Reluctance to take risks', 'Deception at work'],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ["Financial success due to using one's opportunities"],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Missed opportunities'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: ['Initiative', 'Rapid development'],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Adventure',
                'Appearance of a strong competitor',
                'Bold and aggressive opponent',
                'Instilling self-doubt',
            ],
        },
    ],
};
