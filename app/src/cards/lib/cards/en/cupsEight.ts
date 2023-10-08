import { CardData } from 'shared/types/cards';

export const cupsEight: CardData = {
    name: 'EIGHT OF CUPS',
    altNames: ['eight of cups', 'eight of chalices', 'eighth of cups', 'eighth of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Dreams',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Seeking truth, uncertainty',
                'Leaving the past behind, walking away, letting go',
                'Disappointment, modesty, honesty',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Stagnation, monotony, mediocrity',
                'Settling for less, staying in a bad situation',
                'Avoidance, fear of change',
                'End of a challenging phase',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Analyzing relationships, leaving unhappy relationships',
                'Issues related to refusing them',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Dissatisfaction with relationships, thoughts of ending them',
                'Fear of being alone',
                'Need to analyze the situation thoroughly and make a decision',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Presence of complex work tasks, seeking a way out of the situation',
                'Leaving stress at a tense job – taking a break, vacation, burnout, or changing activity',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Accepting an unsatisfying job or readiness to change activity',
                'Fear of change',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: [
                'Setting priorities, not in favor of financial security',
                'Caution with significant expenses, in this case, planning expenses in advance is recommended',
            ],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: [
                'Prioritizing financial security over happiness',
                'Unwillingness to take risks, usual activity, returning to the usual',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Self-care, overcoming difficulties, working on character',
                'Balance between feelings and reason, seeking a compromise',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                "Searching for a purpose in life. It will help evaluate your choices and work results or determine if you're willing to settle for an unsatisfactory environment or ready to change it",
            ],
        },
    ],
};
