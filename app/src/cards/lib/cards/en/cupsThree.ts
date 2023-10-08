import { CardData } from 'shared/types/cards';

export const cupsThree: CardData = {
    name: 'THREE OF CUPS',
    altNames: ['three of cups', 'trio of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Celebration',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Friendship, community',
                'Meetings, celebrations, group events, social events',
                'Success, business, joy',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Gossip, scandal, deceit, selfishness, intolerance',
                'Excess, isolation, loneliness, solitude, unbalanced social life',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Friendship turning into romance',
                'Time among friends will help improve the relationship with the partner',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Short, but thrilling romance',
                'Beware of the influence on your relationship from a third party',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Reason to celebrate at work (new job, promotion, successful project completion)',
                'Happy and joyful atmosphere in the office',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Work events not going as planned', 'Destructive atmosphere in the office'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Expenses on social life', 'Achievement of financial prosperity'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Excessive expenses on social receptions', 'Borrowing beyond means'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Path without obstacles, gift of fate, luck',
                'Mobility, ease, carefreeness and spontaneity',
                'Earthly values, enjoying simple pleasures',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Loss of interest, devaluation of life, inner emptiness',
                'Fatigue, focus only on external attributes of wealth',
                "Observer's position and refusal to participate in events",
            ],
        },
    ],
};
