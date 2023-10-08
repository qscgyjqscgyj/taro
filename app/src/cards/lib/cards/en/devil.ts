import { CardData } from 'shared/types/cards';

export const devil: CardData = {
    name: 'DEVIL',
    altNames: ['moderation', 'abstinence'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Subordinated mind',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Lack of freedom due to illusions, powerlessness',
                'Selfishness, excess',
                'Realization of responsibility',
                'Temptation',
                'Emotional dependency, obsession',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Inner strength',
                'Independence, freedom',
                'Revelation, liberation',
                'Regaining power, control',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Lust, hedonism',
                "Selfishness towards partner's feelings",
                'Obsession, codependency',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Liberation from external control or from a dominant partner',
                "Feeling more control over one's own life",
                'Ending codependency',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Feeling of a dead-end situation at work',
                'Blaming colleagues',
                'Self-sabotage, playing the victim',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Liberation from burdensome work, responsibilities',
                'Greater responsibility in career path',
                'Feeling confident at work',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Loss of control over finances, impulsive spending, gambling',
                'Bad financial habits',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Getting rid of harmful financial habits', 'Financial independence'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'The situation inclines to dishonest actions, from which one should abstain',
                'Deviating from the plan under the influence of fear or temptation',
                'Deviating from the "true path", to which one should return',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: ['Trial by subordination', 'Liberation from dependency/illusions/fears'],
        },
    ],
};
