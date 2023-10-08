import { CardData } from 'shared/types/cards';

export const temperance: CardData = {
    name: 'TEMPERANCE',
    altNames: ['temperance', 'abstinence'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Mind Control',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Moderation, patience, adaptation',
                'Right proportion, balance',
                'Diplomacy, inner strength, calmness, harmony',
                'Compromise, friendship, trust',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Disagreements, conflicts, hostility',
                'Impatience, disappointment',
                'Rashness, haste',
                'Imbalance, excess, extremes',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Attentiveness and caution in relationships',
                'Balance, "Golden Mean" in self-expression',
                'Patience and seeking compromise with a partner',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Swinging to extremes in behavior',
                'Impatience with a partner, unworthy behavior',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Success from patience and moderation',
                'Slow but steady progress',
                'Balance between career and other aspects of life',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Imbalance between work and personal life',
                'Radical swings in work-related matters',
                'Hasty and inattentive work, impulsive decisions',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Balance in budget management', 'Slow and steady growth'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Inability to balance long-term needs with short-term pleasures'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Friendliness and compromise are key to problem-solving',
                'Healing, recovery, restoration of mental and physical health',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Incorrect judgments about people, conflicts, unwillingness to compromise',
                'Excessiveness and imbalance, lack of harmony',
            ],
        },
    ],
};
