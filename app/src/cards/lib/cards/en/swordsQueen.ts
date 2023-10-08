import { CardData } from 'shared/types/cards';

export const swordsQueen: CardData = {
    name: 'QUEEN OF SWORDS',
    altNames: ['queen of swords', 'sword queen'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Independence',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Honest, independent',
                'Career, ambitions',
                'Principled, fair, insightful',
                'Constructive criticism, objective',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Pessimistic, spiteful, cruel',
                'Manipulative, severe, deceitful, unforgiving, intolerant',
                'Delusion, fanaticism, betrayal',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Discerning in lovers',
                'Independent, self-sufficient partner',
                'Personal boundaries',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Trauma, toxic relationships',
                'Manipulation, cruelty',
                'Loneliness due to anger and negative attitude towards people',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Constructive criticism, good advice',
                'Wise leadership',
                'Respect in the workplace, a good reputation',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Rigidity, excessive negativity', 'Poor communication'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Act with logic and reason', 'Financial agreements'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Inability to make logical financial decisions',
                'Consequences of financial uncertainty',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Unbiased attitude or fairness, wisdom, experience',
                'Independence from the people around you, the right to be free',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Refusal or unwillingness to delve into details and nuances, anger',
                'Cruel behavior, refusal to express emotions or feelings',
            ],
        },
    ],
};
