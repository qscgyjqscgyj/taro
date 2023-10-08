import { CardData } from 'shared/types/cards';

export const pentaclesAce: CardData = {
    name: 'ACE OF PENTACLES',
    altNames: ['ace of pentacles', 'ace of coins', 'ace of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Financial Independence',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'New opportunities, luck',
                'Resources, abundance, prosperity, great wealth',
                'Security, stability',
                'Independence, personal achievements',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Missed chances, hasty decisions, bad investments',
                'Deficit, instability, anxiety',
                'Greed, corruption',
                'Affluence without happiness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Stable and safe relationships', 'Abundance and prosperity in a pair'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Loss of emotional stability',
                'Possible financial problems in relationships',
                'Singles should avoid greedy people',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['New opportunities for work or earning'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Missed work opportunities', 'Regret in career choices'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Time to invest in the future', 'New financial opportunities'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Wrong choices in terms of finances',
                'Deficit',
                'Extreme financial situation',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: ['New ventures promise success', 'Reward, gift'],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Expenses caused by problems',
                'Withholding finances',
                "Delay in implementing what's planned",
            ],
        },
    ],
};
