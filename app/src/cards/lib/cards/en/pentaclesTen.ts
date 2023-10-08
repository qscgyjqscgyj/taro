import { CardData } from 'shared/types/cards';

export const pentaclesTen: CardData = {
    name: 'TEN OF PENTACLES',
    altNames: ['ten of pentacles', 'ten of coins', 'ten of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Abundance',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Legacy, roots, family, origin, inheritance',
                'Winning, funds, privilege, affluence',
                'Wisdom, success, stability, tradition',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Family disputes, breach of traditions',
                'Bankruptcy, debts, fleeting success, conflicts over money',
                'Financial losses, risk, instability',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Financially and emotionally stable couple',
                'Appropriate time for new stages of relationships',
                'Desire for approval of the chosen one by the family',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Conflict between your partner and your family',
                'Outside opinions about your chosen one',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Creating a strong career that will ensure a stable future',
                'Family business',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Unstable job, career', 'Company breakdown, debts'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Winning, inheritance', 'Development of a stable financial future'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Debts, financial losses', 'Family disagreements over money'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: ['Strong family influence on the situation', 'Slow but steady progress'],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Outdated methods will not be as effective as before',
                'Changing the value system, should not forget about the family',
            ],
        },
    ],
};
