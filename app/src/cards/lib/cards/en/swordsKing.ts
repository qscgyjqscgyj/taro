import { CardData } from 'shared/types/cards';

export const swordsKing: CardData = {
    name: 'KING OF SWORDS',
    altNames: ['king of swords', 'king of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Leadership',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Intellect, authority, discipline',
                'Honesty, morality, seriousness, strictness',
                'Responsibility, control, authority',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Irrational, dictator',
                'Controlling, cold, ruthless, dishonest',
                'Selfishness, evil intentions, exploitation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'High standards in love, strong serious relationships',
                'Partner you can always rely on, loyalty',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Selfish, cruel lover', 'Low standards of love, abusive relationships'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Stern but fair mentor pushing you to do your best',
                'Diplomacy is necessary in dealing with colleagues',
                'Focus on respect and growth, not just money',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Dominance, power thirst at work', 'Irrational decisions in work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Be disciplined about finances',
                'Act logically',
                'Realize ideas and plans effectively for income',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Irrational financial decisions', 'Lack of financial discipline'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Complex situations requiring patience and calmness',
                'Obstacles that will strengthen character in the future',
                'Assistance from influential figures',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Loss or aggressive behavior, a hard heart, ignoring',
                'Focus on achieving desired goals by any means',
            ],
        },
    ],
};
