import { CardData } from 'shared/types/cards';

export const swordsAce: CardData = {
    name: 'ACE OF SWORDS',
    altNames: ['ace of swords', 'ace of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Triumph',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Clarity, breakthrough, new idea, freedom',
                'Concentration, vision, strength, focus, truth',
                'Problem solving, conquest, determination',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Confusion, misunderstanding, hostility, disputes, parting',
                'Destruction, cruelty, stroke of fate, problems, business failure',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Honest attitude to problems',
                'Discussion, communication',
                'Getting rid of a toxic environment',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Mismatch of views, inability to establish a dialogue, painful words'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Stimulating work environment, challenges',
                'Clear communication',
                'Focus on the process',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Misunderstanding, inability to clearly express thoughts', 'Boredom'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Priority on rationality', 'Avoid emotional decisions regarding money'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Double-check finances, statements or legal documents',
                'Get rid of misunderstandings in financial matters',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Time to express oneself. Decisive actions either lead to success or to something new and insanely interesting',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Should be cautious in words and actions',
                'Perhaps someone close is using you for their own purposes',
            ],
        },
    ],
};
