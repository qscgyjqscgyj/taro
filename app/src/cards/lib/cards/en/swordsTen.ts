import { CardData } from 'shared/types/cards';

export const swordsTen: CardData = {
    name: 'Ten of Swords',
    altNames: ['ten of swords', 'ten of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Inevitable End',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Failure, bitterness, pain, exhaustion',
                'Dead end, victimization, betrayal',
                'Desperation, loss, stress',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Improvement, healing, lessons learned',
                'Desperation, relapse',
                'Temporary advantage, favor, benefit',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Painful breakup, betrayal',
                'Loss of trust, love, warmth in a relationship',
                'Complete closure to the opposite gender',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Healing from the past', 'Rebuilding relationships'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Job loss', 'Disruption due to stress, burnout'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Job change, less stressful work', 'Increased tension and stress'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial losses, unsuccessful investments',
                'Check if expenses related to unsuccessful endeavors have been reduced',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Avoidance of financial collapse or bankruptcy',
                'Recovery after resource loss',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: ['End of a battle, defeat', 'Equal forces, initially prevented outcome'],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Loss in favor or relief after a setback, rupture',
                'Clearing of surroundings, fair justice, punishment of enemies',
                "Choosing in one's favor, the ability to refuse or not go along",
            ],
        },
    ],
};
