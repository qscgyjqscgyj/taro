import { CardData } from 'shared/types/cards';

export const wandsTen: CardData = {
    name: 'Ten of Wands',
    altNames: ['ten of wands', 'ten of rods', 'ten of staffs', 'ten of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'A Lot of Responsibility',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: ['Burden, responsibility, duty, obligation', 'Stress, burnout, struggle'],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Inability to delegate authority',
                'Placing too much responsibility, overloading',
                'Failure, breakdown, distrust',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Feeling the weight of the burden of love, overloaded with responsibility',
                "Stress creates problems in relationships, don't hesitate to ask for help from loved ones",
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Inability to share the burden with the partner, loss of balance in relationships',
                'Providing emotional support to each other',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Work overload, carrying the burden of work alone',
                'Need for help from colleagues. Collaboration and delegation are your best allies at this time',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Relief from work load, task delegation', 'Seeking support, burnout'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Financial obligations, significant unavoidable expenses'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Relief from financial burden, seeking assistance',
                'Deepening economic problems',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Stress from unexpected new circumstances. Requires support and attention from loved ones',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Foreboding of disappointment, anxieties due to overestimated possibilities',
            ],
        },
    ],
};
