import { CardData } from 'shared/types/cards';

export const hermit: CardData = {
    name: 'HERMIT',
    altNames: ['hermit', 'elder', 'seeker', 'pilgrim'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Guide',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Self-analysis, contemplation',
                'Recognition of priorities',
                'Maturity, wisdom, prudence',
                'Discretion, caution',
                'Loneliness',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Carelessness, immaturity',
                'Rashness, confusion',
                'Rejection',
                'Loneliness, isolation',
                'Return to society',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Distancing from relationships for self-discovery',
                'Discussion with a partner about common goals and plans',
                'Strong relationships filled with mutual understanding',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Feeling of detachment of one of the partners in the relationship',
                'Romantic rejection, allowing one to focus on oneself and desires',
                'Egoism of one of the partners',
                "Testing the relationship's strength and potential separation",
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                "Stability, pondering the next steps in one's career path",
                'Education, mentorship',
                'Achieving goals with minimal contact with people',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Reevaluating career in line with inner goals',
                'Inability to work in a team, feeling detached from the team',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Reevaluating the priority of finances in life',
                'Low income, breach of agreements',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Need and poverty due to lack of work',
                'Financial responsibility for someone else',
                "Better understanding of one's financial position",
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Independent immersion into the situation, prolonged error analysis, and finding solutions without the help of others',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Ending a period of solitude',
                'The possibility that the situation will resolve on its own',
            ],
        },
    ],
};
