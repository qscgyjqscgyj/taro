import { CardData } from 'shared/types/cards';

export const swordsTwo: CardData = {
    name: 'Two of Swords',
    altNames: ['Two Swords', 'Two of Spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Stalemate',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Deadlock, difficult choice, getting stuck in the middle',
                'Denial, hidden information',
                'Emotional restraint',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Indecision, hesitation, no right choice',
                'Anxiety, too much information, truth revealed',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Getting stuck in decision-making, avoiding choices',
                'A deadlock situation',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Lack of choice, unattractive options',
                'Inability to prioritize between life areas',
                'The longer you delay the choice, the bigger and more unpleasant the consequences become',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Choosing between career paths',
                "Conflicts at work, taking someone's side",
                'Insufficient awareness',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['A choice without a win', 'Stressful decisions'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Avoiding financial decisions',
                'Lack of clear understanding in financial matters',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Realization of the truth', 'Acceptance of the financial situation'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Resolving conflict situations using your strengths',
                'A suitable period for bold actions',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Gullibility can lead to deception',
                'Stressful situations, strong emotions',
            ],
        },
    ],
};
