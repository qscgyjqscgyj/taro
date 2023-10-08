import { CardData } from 'shared/types/cards';

export const emperor: CardData = {
    name: 'EMPEROR',
    altNames: ['emperor', 'master'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Control through intellect',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Strength, power, stability',
                'Self-confidence, achievements',
                'Self-awareness',
                'Wealth, control',
                'Masculine influence',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Immaturity',
                'Lack of strength',
                'Indecision, recklessness',
                'Inability to control emotions',
                'Authoritative, harsh, stubborn',
                'Undisciplined',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Strong relationships based on respect',
                'Traditional relationships',
                'Use of logic in love',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Relationships by calculation, habit',
                'Power struggle',
                'Authoritative partner',
                'Unexpressed emotions',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Hard work, focus', 'Establishing structure, discipline', 'Mentorship'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Difficulties working without a system',
                'Low concentration',
                'Bureaucracy',
                'Bad boss',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Discipline in handling money', 'Control'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Lack of discipline in handling money', 'Uncontrolled finances'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Stability',
                'Advancement at work due to discipline and responsibility',
                'Advice to plan actions carefully, not to postpone decisions, making them thoughtfully but quickly',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Problems caused by irresponsibility, lack of discipline, unwillingness to cooperate with other people',
            ],
        },
    ],
};
