import { CardData } from 'shared/types/cards';

export const wandsTwo: CardData = {
    name: 'Two of Wands',
    altNames: ['two of wands', 'two of rods', 'two of staffs', 'two of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Possibilities',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Planning, decision-making',
                'First steps, stepping out of comfort, taking risks',
                'Achieving goals and needs',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Poor planning, excessive analysis',
                'Inaction, overcaution, risk avoidance',
                'Unpleasant news, conflicts, misunderstanding',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Romantic goals', 'Plans for a shared future'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'A timeout for reflection and planning personal life',
                'Lack of long-term perspectives or ideas about the future',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Career plans and dreams', 'First steps in your career'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Unexpected obstacles and failure to achieve career plans',
                'Excessive analysis and an attempt to control everything',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Long-term financial planning', 'Laying the foundation for your future'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Lack of control over finances', 'Unsuccessful financial planning'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'A determination to achieve your goals by any means necessary. Carefully consider and weigh each step before taking action',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'A suspended state in the matter. The situation is highly dependent on external factors',
            ],
        },
    ],
};
