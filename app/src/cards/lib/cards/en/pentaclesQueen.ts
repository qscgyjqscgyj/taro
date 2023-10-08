import { CardData } from 'shared/types/cards';

export const pentaclesQueen: CardData = {
    name: 'QUEEN OF PENTACLES',
    altNames: ['queen of pentacles', 'queen of coins', 'queen of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Practical Guidance',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Generous, luxurious',
                'Caring, loyal, well-mannered, kind',
                'Homebody, hospitable, cordiality',
                'With good business sense, practical, sensible, hardworking',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Selfish, jealous, greedy, insecure, materialistic',
                'Untidy, intolerant, self-centered, boastful, envious',
                'Distrust',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Stability and abundance',
                'Care, kind partner, home comfort',
                'Excellent time for searching/choosing a partner',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Superficial and selfish partner', 'Relationships for the wrong reasons'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Talented businessman', 'Mentor, colleague'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Chaos at work, which requires more strength and attention than usual',
                'Poor business partner',
                'Unreliable or envious colleague',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial security and responsible attitude towards money',
                'Beneficial deals',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Irrational use of money', 'Accumulation of things'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Demonstration of character strength in various circumstances',
                'Prudent and organized person, capable of achieving their goals',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Irresponsibility, unwarranted claims, and self-importance',
                'Haste and indiscretion in statements cause harm',
            ],
        },
    ],
};
