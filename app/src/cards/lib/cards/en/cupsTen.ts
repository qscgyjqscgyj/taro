import { CardData } from 'shared/types/cards';

export const cupsTen: CardData = {
    name: 'TEN OF CUPS',
    altNames: ['ten of cups', 'ten of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Joy',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Happiness, coming home, self-realization',
                'Emotional stability, safety',
                'Home harmony, family, emotional peace',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Disharmony, separation, domestic conflict, isolation',
                'Betrayal, loss, sorrow',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Long-term stability, lasting relationships',
                'Readiness for commitment, taking the next step in the relationship',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'External factors influencing relationships (possibly, relatives)',
                'Ensure your partner feels valued and loved',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Sense of belonging at work, comradery among colleagues',
                'Satisfying job',
                'Opportunity to spend enough time with family',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Feeling of hostility at the workplace, tense relationships among colleagues',
                'Imbalance between career and personal life',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Financial stability and safety', 'Feeling of prosperity'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Disputes with family over finances', 'Financial instability'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'A large friendly team, a certain society',
                'Reconciliation, merger, partnership and support for each other',
                'Achieving a common goal, satisfying needs',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Restriction by place of residence, family, traditions',
                'Undervalued or overestimated expectations from other people',
                'Undervaluing oneself in terms of contribution to the common cause',
            ],
        },
    ],
};
