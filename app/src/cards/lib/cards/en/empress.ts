import { CardData } from 'shared/types/cards';

export const empress: CardData = {
    name: 'EMPRESS',
    altNames: ['empress', 'mistress'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Fertility',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Femininity, sensuality',
                'Motherhood, upbringing',
                'Development, creativity',
                'Wealth, abundance',
                "Responsibility for one's life",
                'Realization of personal goals',
                'Businesswoman leader',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Authoritativeness, greed',
                'Insecurity, suppression',
                'Carelessness',
                'Anxiety, suffering',
                'Stagnation',
                'Greed/wastage of resources',
                'Infidelity',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Caring, supportive (financially stable) lover',
                'Sensual dedicated relationships',
                'Marriage, pregnancy, a new stage of relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Difficult times in relationships (arguments)',
                'Possible breakup, loneliness',
                'Cold/controlling partner',
                'Depressive moods, low self-esteem',
                'Ethical issues',
                'Changes on a social level',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Creative period at work', 'Harmony in the workplace'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Feeling of insecurity and dissatisfaction at work',
                'Lack of skill growth',
                'Routine',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ['Material comfort', 'Generosity', 'Gifting, exchanging material wealth'],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Feeling of insecurity in finances, despite stability'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Cooperation and success in business',
                'Enjoyment of the process and experience',
                "Manifestation of one's best qualities when working in a team",
                'Beneficial acquaintances',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Extremely unfavorable conditions',
                'Doubts of other people in you',
                'Acceptance of life transformations',
            ],
        },
    ],
};
