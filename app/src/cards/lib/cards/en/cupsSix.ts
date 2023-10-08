import { CardData } from 'shared/types/cards';

export const cupsSix: CardData = {
    name: 'SIX OF CUPS',
    altNames: ['six of cups', 'six of chalices', 'six of goblets', 'six cups'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Good times',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Nostalgia, memories, acquaintance',
                'Healing, sentimentality, pleasure',
                'Comfort, tranquility, comfort',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Being stuck, living in the past, anxiety',
                'Moving forward, new events',
                'Leaving home, independence',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Influence of the past on the present - restoring past relationships',
                'Memories',
                'Healing after a breakup',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Obsession with past experience',
                'Inability to move on',
                'Unwillingness to live in the present',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Return to the past - to a previous job, to what was interesting before',
                'Do not repeat old mistakes, learn from them',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Leaving a comfortable job',
                'Staying in a disliked job',
                'Beware of repeating your negative experience',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial gifts, donation',
                'Joint use of finances, support by a partner',
                "Family's influence on your financial position (e.g., your return to your parents' house)",
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Readiness for financial independence', 'End of a difficult period'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Fear of letting go of the past, being closed off from anything new and better',
                'Attachment to past events, obsession with them',
                "Moving away from one's past, liberation through grief, tears",
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Attachment to the idea of safety, being sheltered, defending boundaries',
                'Expanding boundaries, renewing social circle, acquiring knowledge leading to new opportunities',
            ],
        },
    ],
};
