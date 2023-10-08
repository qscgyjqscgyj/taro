import { CardData } from 'shared/types/cards';

export const wandsKing: CardData = {
    name: 'KING OF WANDS',
    altNames: ['king of wands', 'king of rods', 'king of staffs', 'king of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Leadership',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Leadership, decision-making, bold ideas',
                'Pride, ambition',
                'Activity, optimism, quick reaction',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Authoritative, dominating, tyrannical',
                'Powerless, ineffective, weak leader',
                'Impulsiveness, strictness, intolerance',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Energetic, charismatic, and passionate lover who takes initiative in love'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Arrogant, authoritative lover', 'Issues with control and pressure'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Success in career', 'Respect at work, high position', 'Mentorship'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Lack of leadership qualities at work',
                'Dependency on others, passivity at work',
                "More self-belief and reliance on one's own abilities needed",
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial stability',
                'Wisdom in financial decisions',
                'Generosity towards others',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Lack of financial responsibility, passivity', 'Lack of financial goals'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Time for active actions, possible mentorship or patronage',
                'A person is required to overcome their negative character traits on the path to spiritual growth',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Now is not the best time for implementing creative ideas, significant capital investments, or making important decisions',
                'Arguments and conflicts are possible, but they can be avoided by showing restraint',
            ],
        },
    ],
};
