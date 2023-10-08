import { CardData } from 'shared/types/cards';

export const wandsFour: CardData = {
    name: 'FOUR OF WANDS',
    altNames: ['four of wands', 'four of rods', 'four of staffs', 'four of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Blooming Garden',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Community, home, relocation',
                'Celebrations, gatherings, parties, meetings',
                'Stability, harmony, peace, prosperity',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lack of support, instability',
                'Feeling unwelcome, domestic conflict',
                'Criticism, disappointment, haste',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Love that is supported within the context of a larger community',
                'Weddings, engagements, gatherings, and public celebrations of love',
                'Strengthening of relationships through family and friends',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Conflict between your larger circle of friends/family and your partner',
                'Fear of public commitments',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Stable and supportive work relationships',
                'Getting closer to colleagues, making a friend',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Conflicts at work', 'Lack of significant results at work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Stable financial situation', 'Financial support', 'Gifts for loved ones'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Unstable financial situation',
                'Support from family or loved ones can become a burden',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Constant growth, an active phase of growth or transformation of the mind',
                'Accumulation of personal experiences and transition to something new',
                'Joy from well-done work, inspiration and happiness',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Reliance on old connections and developments in all areas of life',
                'Slower growth, a period of stagnation or prolonged rest',
            ],
        },
    ],
};
