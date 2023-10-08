import { CardData } from 'shared/types/cards';

export const wandsKnight: CardData = {
    name: 'KNIGHT OF WANDS',
    altNames: ['knight of wands', 'knight of rods', 'knight of staffs', 'knight of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Overcoming Problems',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Brave, energetic, charming',
                'Rebellious, impulsive, free-spirited',
                'Risk, impatience, extremes',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Arrogant, reckless, impatient',
                'Lack of self-control, passive, inconsistent',
                'Authoritative, jealous, suspicious',
                'Obstacles',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Fearless, brave lover',
                'Difficulty taking on commitments',
                'Unstable relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Avoidance of commitments',
                'Impatience',
                'Feeling of instability in relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Surge of enthusiasm for work', 'Bold new decisions'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Lack of direction in career, uncertainty',
                'Haste at work',
                'Unreliable job',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Sudden inflow of money',
                'Excellent time for travel and expanding horizons',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Excessive confidence in money',
                'Money wastage, financial losses',
                'Avoid unnecessary expenses when possible',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'A favorable time for new beginnings - new projects will be successfully realized',
                'Changes for the better',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Lack of satisfaction from fulfilling one’s duties',
                'Worries and anxieties can worsen the situation',
            ],
        },
    ],
};
