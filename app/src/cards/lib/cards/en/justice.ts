import { CardData } from 'shared/types/cards';

export const justice: CardData = {
    name: 'JUSTICE',
    altNames: ['justice', 'judiciary'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Proper balance',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Justice, impartiality',
                'Honesty, truth',
                'Karma, balance',
                "Accountability for one's actions",
                'Cause and effect',
                'Transformation, maturation',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Injustice, dishonesty',
                'Evading responsibility, laziness',
                'Retribution, corruption',
                'Extremes',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                "People will mirror the querent's attitude",
                'Reward for romantic efforts',
                'Fair treatment of a partner',
                'Compromise, tact',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Injustice in relation to the partner',
                'Unfair romantic expectations and demands',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Honesty and justice at work will bring rewards',
                "Reminder of responsibility for one's work",
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Dishonest behavior at work that should not be succumbed to or needs to be eliminated if it comes from the querent',
                'Irresponsible attitude towards the task',
                'Unfair work environment',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Balance the budget', 'Balance of giving and receiving'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                "Be cautious about disclosing one's financial situation",
                'Avoid unreliable financial transactions and evasion of financial responsibility',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'With applied efforts and diligence, one can expect a reward',
                'Justice in relation to you',
                'Returning of debts',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'The situation will be resolved unjustly or not resolved at all',
                'Biased attitude',
            ],
        },
    ],
};
