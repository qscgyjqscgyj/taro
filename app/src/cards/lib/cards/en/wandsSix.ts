import { CardData } from 'shared/types/cards';

export const wandsSix: CardData = {
    name: 'Six of Wands',
    altNames: ['six of wands', 'six of rods', 'six of staffs', 'six of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Victory',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Success, victory, triumph, completion',
                'Reward, recognition, praise, approval, pride',
                'Leadership qualities, wise decisions',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Failure, lack of recognition, lack of reward, lack of achievements',
                'Troubles, betrayal, failure, defeat',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Success in romance', 'Achievement of goals in relationships'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Feeling of mismatch between desired and actual',
                'Feeling unloved, neglected, unnoticed',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Career achievements, rewards', 'Successful project completion'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Unsuccessful work project',
                'Work without reward',
                'Dissatisfaction with work and achievements',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Financial stability', 'Material rewards'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Analysis of financial situation is needed',
                'Losses, unsuccessful investments, dissatisfaction with purchases',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Successful resolution of a long-term project',
                'Necessity to make a serious and urgent decision for a favorable outcome',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: ['Self-doubt, lack of financial resources, a series of unpleasant details'],
        },
    ],
};
