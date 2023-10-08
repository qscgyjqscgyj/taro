import { CardData } from 'shared/types/cards';

export const wandsFive: CardData = {
    name: 'FIVE OF WANDS',
    altNames: ['five of wands', 'five of rods', 'five of staffs', 'five of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Pretend Fight',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Conflict, competition, rivals',
                'Disputes, aggression, tension',
                'Troubles, losses, feeling lost',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Resolution of conflict, avoidance of conflicts',
                'Cooperation, agreements, truces, harmony, peace',
                'Effort, perseverance',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Competition with others for attention from your potential partner',
                'Conflict between lovers',
                'Playful teasing',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Avoiding conflicts that don’t help resolve them',
                'Advice to put effort and attention into resolving disagreements with your partner',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Element of competition at work, a competitive environment',
                'Conflict at work',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Resolution of conflict, reduced competition in the workplace',
                'Lack of significant results at work',
                'Avoiding conflicts at work',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial instability',
                'Putting in a lot of effort to earn money',
                'Conflicts over money',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Relief and peace after financial stress',
                'Escalation of conflicts over financial matters',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Conflicts and overlapping interests',
                'Struggle, competition',
                'Push for active actions and productivity',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: ['Hidden competition, passive confrontation'],
        },
    ],
};
