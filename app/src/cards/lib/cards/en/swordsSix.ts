import { CardData } from 'shared/types/cards';

export const swordsSix: CardData = {
    name: 'Six of Swords',
    altNames: ['Six Swords', 'Six of Spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Troubles Behind',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Moving forward, changes',
                'Leaving behind, learning lessons',
                'Travel, business trip',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Stuck in the past, returning to troubles',
                'Escaping from problems, trap, despair',
                'Unwanted proposal, confession, statement',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Reconciliation and continuation of relationships',
                'End of relationships',
                'Willingness to leave the past behind and start new relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Unwillingness to move forward, clinging to unhappy relationships',
                "Emotional emptiness, feeling of inability to change one's life",
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Escaping from a stressful work situation',
                'Transition to a calmer job or projects',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Creating conflicts, self-sabotage',
                'Inability to change the work situation or career',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Restoring financial stability', 'Learning from the past'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Avoiding financial problems',
                'Advice - to honestly assess the situation and possibly seek help',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                "Moving away from the past, reassessing one's priorities, seeking new prospects",
                "Commitment to a better future, belief in oneself and one's abilities",
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Strong attachment hindering progress and growth',
                "Being stuck in one's own fears and lack of confidence",
                "Clutching to one's own beliefs or past patterns",
            ],
        },
    ],
};
