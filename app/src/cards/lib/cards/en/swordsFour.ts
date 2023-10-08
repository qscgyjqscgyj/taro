import { CardData } from 'shared/types/cards';

export const swordsFour: CardData = {
    name: 'FOUR OF SWORDS',
    altNames: ['four of swords', 'four of spades', '4 of swords', '4 of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Rest',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Rest, relaxation, travel, tranquility',
                'Refuge, recovery, self-defense, self-contemplation',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Recovery, return to the world, healing',
                'Release from isolation, anxiety, burnout',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Rest from excessive zeal, respite', 'Solitude, personal time'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Rejecting an oppressive lover',
                'End of the rest period, energy replenishment',
                'Breaking routine and reigniting passion',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Advice to take a break, take a vacation or day off, and spend them taking care of yourself',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Fresh perspective on tasks after a break', 'Burnout'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Financial concerns, avoid excessive money-related thoughts'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Unwillingness to accept support', 'Recovery after financial pressure'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Desire to withdraw, step away from tasks or specific people',
                'Delving into the depths of the mind or disconnecting from the body',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                "Prioritize in a way that won't harm your health - recharge, then come back to the battle with renewed strength",
            ],
        },
    ],
};
