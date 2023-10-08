import { CardData } from 'shared/types/cards';

export const wandsSeven: CardData = {
    name: 'Seven of Wands',
    altNames: ['seven of wands', 'seven of rods', 'seven of staffs', 'seven of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Steadfastness',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Stand up for yourself, defend yourself, your territory, and possessions',
                'Courage, resilience, overcoming',
                'Profit',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Cowardice, shame, avoidance of problems, indecision',
                'Giving up, yielding, lack of self-belief',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Establishing boundaries in relationships',
                'Struggle for relationships against external forces',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Caution',
                'Lack of a strong foundation in relationships, disappointment',
                'Separation due to external pressure',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Competing with competitors, confrontation', 'Defending your interests'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Competitive environment', 'Inability to hold your positions', 'Envy'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial stability, passive income',
                'Long-term success',
                'Envy of your position',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Some loss of savings',
                'Excessive self-confidence leading to loss',
                'Impulsive spending',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Independent successful resolution of challenging tasks. You have the strength, desire, and competence for it',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Feeling guilty about your own failures. The card encourages making the right decision in the situation',
            ],
        },
    ],
};
