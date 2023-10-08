import { CardData } from 'shared/types/cards';

export const cupsSeven: CardData = {
    name: 'SEVEN OF CUPS',
    altNames: ['seven of cups', 'seven of chalices', 'seven cups', 'seven chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Dreams',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Choice, goal search, mistaken choice',
                'Illusion, fantasy, dreaminess, mistaking the desired for the real, creativity',
                'Indecision',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lack of purpose, disorder, confusion, disappointment',
                'Distraction, diverting factors, fear',
                'Clarity, choice',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Choice between lovers or between relationships and other life spheres',
                'Caution in romantic decisions, no rush',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Avoiding a decision in relationships, which complicates and brings chaos',
                'Clarity in matters of love',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Multiple career options',
                'A work-related choice that needs full dedication',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Feeling of hopelessness, lack of career options',
                'Missed opportunities',
                'Clear career vision',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: [
                'Multiple financial decisions',
                'Caution and objectivity in choosing financial decisions ',
            ],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: [
                'Financial clarity, focus on goals',
                'Distraction from financial goals, lack of financial goals',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Perplexity in the face of a difficult choice',
                'Excessive impressionability, tendency to self-deception, approach the situation rationally',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Procrastination in this situation will backfire',
                'Call for well-thought-out actions',
                'Multiple alternatives will help not to give up, and instantly change direction, in case of a negative outcome',
            ],
        },
    ],
};
