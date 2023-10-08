import { CardData } from 'shared/types/cards';

export const tower: CardData = {
    name: 'TOWER',
    altNames: ['tower', 'burned temple'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Destruction',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Destruction, collapse',
                'Catastrophe, devastation, shock, sudden changes',
                'Chaos, conflicts',
                'Liberation, cleansing of the soul',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Prevention of catastrophe',
                'Delaying the inevitable',
                'Resistance to change',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Fundamental changes - weak relationships will end',
                'A radical change in views on relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Detecting and resolving budding conflicts',
                'Deterioration of relationships without the desire to part ways',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Sharp and significant changes in work - dismissal, promotion with great responsibility',
                'Sudden changes and chaos in the workplace',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Avoiding career risks, surviving a workplace crisis'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['A financial catastrophe is possible, and one should be prepared for it'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Surviving a financial catastrophe', 'Recurring financial problems'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: ['Warning of troubles', 'Crash of the value system'],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Recovery after a crisis',
                'Think about what can ease the situation in the future',
            ],
        },
    ],
};
