import { CardData } from 'shared/types/cards';

export const swordsNine: CardData = {
    name: 'Nine of Swords',
    altNames: ['nine of swords', 'nine of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Despair',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Fear, anxiety, negativity',
                'Turning point, despair',
                'Nightmares, exaggeration, overthinking',
                'Suffering, doubts, shame, guilt',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Recovery, learning to cope, facing life',
                'Finding help, shame, feelings of guilt',
                'Hope, consolation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Distrust of the partner, suspicion', 'Regret about the past'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Opening up to the partner, help and support from them',
                'Relieving stress through sharing experiences',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Anxiety, paranoia, work-related stress',
                'Lack of mechanisms to overcome difficulties',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Clarity about work',
                'Problem resolution, finding peace',
                'Stresses become a reality, problems intensify',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Financial panic, worries', 'Feeling deprived'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Clarity about finances', 'Worsening or improving financial security'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                "Devastation and trauma, accepting inevitability in one's life",
                'Emotionally heavy burden and experiences for others',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Complete immersion in negativity and limited thinking',
                'Inability to accept reality',
                'Improvement in the situation, resolving anxieties',
            ],
        },
    ],
};
