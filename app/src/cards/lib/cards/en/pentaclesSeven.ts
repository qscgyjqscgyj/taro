import { CardData } from 'shared/types/cards';

export const pentaclesSeven: CardData = {
    name: 'SEVEN OF PENTACLES',
    altNames: ['seven pentacles', 'seven coins', 'seven denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Persistence',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Patience, slow growth, progress',
                'Reward, results',
                'Planning, diligent work',
                'Wealth',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Unfinished work, procrastination, insufficient effort',
                'Lack of growth or reward',
                'Impatience, reckless actions',
                'Loss, loss of money, wastefulness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Slow revelation of feelings into a deeper attachment (new relationships, friendship)',
                'Tiring actions in relationships, necessary for successful coexistence (planning, compromises, etc.)',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Feeling of non-justification of efforts spent on relationships',
                'Impatience in love, trying to accelerate the course of events',
                'Tender and slow revelation of feelings',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Advancement, noticeable progress',
                'Evaluation of achievements for further planning',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Too much/little effort put into work, imbalance',
                'Lack of results, stagnation',
                'Should focus on one thing and monitor development, making adjustments',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Joy and pleasure from efforts applied to finances',
                'Slow and steady investment',
                'Reaping the fruits of hard work in the past',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Result not commensurate with investments', 'Losses, lack of reward'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'If the question is about something the querent has been working on for a long time and has put a lot of effort into – a favorable finale will soon be seen',
                "Now is not the best time for better beginnings, it's better to take a break",
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Setting priorities from important to insignificant',
                'Focusing on one thing, not trying to grab everything at once',
            ],
        },
    ],
};
