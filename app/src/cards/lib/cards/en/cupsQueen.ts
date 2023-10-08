import { CardData } from 'shared/types/cards';

export const cupsQueen: CardData = {
    name: 'QUEEN OF CUPS',
    altNames: ['queen of cups', 'queen of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Kind-heartedness',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Compassion, warmth, kindness',
                'Intuition, counselor, support',
                'Success, tranquility, restraint',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Insecurity, overly sensitive',
                'Needy, fragile, dependent',
                'Delusion, intolerance, condemnation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Caring and benevolent character',
                'Deeper unfolding of relationships',
                'Maintain balance in emotional service in relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Dependent, clingy or overly sensitive lover',
                'Exerting more effort than the partner',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Taking on a caretaker role at work',
                'Seeking support and compassion at work',
                'Forming an attractive image in a competitive environment',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Emotional burnout at work',
                "Neglecting one's emotional health for work",
                'Unmet expectations from the position and workplace',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Using resources to care for others',
                'Gifts, charity, generosity',
                'Financial help from relatives, family',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                "Excessive generosity, neglecting one's financial health for others",
                'Financial illiteracy and problems with self-control',
                'Broke, financial dependence on a loved one',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Feminine qualities of personality, character; smoothness, inertia, hope, kindness, soft-heartedness, sincerity, empathy',
                'Internal influence on the external, harmony, balance',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                "Inability to stand up for oneself, undervaluation of one's skills, complaisance",
                'Sacrifice, self-denial, a state of perpetual waiting, inactivity, apathy',
                'Susceptibility to manipulation, suppression, despondency',
            ],
        },
    ],
};
