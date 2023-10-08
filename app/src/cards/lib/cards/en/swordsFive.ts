import { CardData } from 'shared/types/cards';

export const swordsFive: CardData = {
    name: 'FIVE OF SWORDS',
    altNames: ['five of swords', 'five of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Destruction',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Disputes, conflict, hostility, stress',
                'Aggression, intimidation',
                'Shame, failure, loss',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Reconciliation, resolution, compromise',
                'Regret, repentance, minimizing losses',
                'Revenge, selfishness, weakness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Tense relationships, anxiety, irritability',
                'Dissatisfaction, stress, desire to prove oneself right',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Recovery of relationships, forgiveness',
                'Resolution of conflicts, but possibly the end of relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Workplace conflicts, intimidation, bullying, hostility',
                'Self-criticism leading to strained work relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Compromises, open dialogue', 'Escalation of conflict'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Money conflicts', "Being used or using others for someone else's gain"],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Relief, easing financial tension'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Involvement in conflict',
                'Lack of satisfaction from achieving desired outcomes, victory at a high cost',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Reassessment of priorities in favor of relationships',
                'Dangers and unpleasantness from others',
            ],
        },
    ],
};
