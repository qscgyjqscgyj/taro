import { CardData } from 'shared/types/cards';

export const wandsQueen: CardData = {
    name: 'Queen of Wands',
    altNames: ['queen of wands', 'queen of rods', 'queen of staffs', 'queen of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Businesswoman',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Self-confident, passionate',
                'Determined, energetic, optimistic',
                'Sociable, charismatic',
                'Success, a love for luxury',
                'Strictness, justice',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Demanding, vengeful, irritable, temperamental',
                'Low self-esteem, jealous, selfish',
                'Jealousy, deceit, favor, obligation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Independent, joyful, and self-assured lover',
                'Openness and trust in relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Selfishness and demands in relationships',
                'Jealousy, domination, disputes',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Passionate approach to work, inspiration', 'Selfish or envious colleague'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Lack of motivation in the career, a negative outlook',
                'Selfish or envious colleague',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Sound and wise financial decisions', "Confidence in one's decisions"],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Excessive or insufficient strictness in financial matters',
                'Poor financial decisions, greed, overspending, avarice',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Strategy, plans, and intensive dynamics with active involvement promise a very positive outcome',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Minor setbacks may be caused by or result in the display of bad character traits, stubbornness',
                'A perspective-less occupation',
            ],
        },
    ],
};
