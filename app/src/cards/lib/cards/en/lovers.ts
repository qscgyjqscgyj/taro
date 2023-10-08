import { CardData } from 'shared/types/cards';

export const lovers: CardData = {
    name: 'LOVERS',
    altNames: ['lovers', 'beloved'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Balance between two forces',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Trust, safety, relationships',
                'Choice between opposites',
                'Issues with decision making',
                'Harmony, perfection',
                'Lies, deception, painful realizations',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Imbalance',
                'Conflict, impatience',
                'Betrayal',
                'Detachment',
                'Wrong choice',
                'Indecision',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Balanced, loving, supportive relationships', 'Choice regarding love'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Cold, detached partner', 'Too many admirers', 'Imbalance in relationships'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Business partnership', 'Romance at work', 'Career choice'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Conflicts among colleagues', 'Romance at work leading to troubles'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Mutually exclusive financial choice'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Impulsive financial choice, not responsible for finances'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Your wisdom will help make the right choice',
                'Cooperation and mutual assistance will aid in a positive resolution of the situation',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Negative meaning of the card. Speaks of your misconceptions and wrong actions',
                'Predicts strong disappointment caused by hasty actions',
                'Lack of trust',
            ],
        },
    ],
};
