import { CardData } from 'shared/types/cards';

export const wandsPage: CardData = {
    name: 'Page of Wands',
    altNames: ['page of wands', 'page of rods', 'page of staffs', 'page of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Inspiration',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Adventures, energy, extroversion',
                'Enthusiasm, courage',
                'Zest, fresh ideas, joyfulness',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Haste, impatience, tantrums',
                'Lack of ideas, laziness, boredom, exhaustion',
                'Unreliability, scatterbrained, boasting',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Romantic adventures in love',
                'Fleeting romance',
                'Desire and the opportunity to bring novelty into relationships',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Inability to take on commitments',
                'Unreliable lover',
                'Boredom in relationships requiring effort and attention',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'New position or project, a desire for challenges at work',
                'Taking risks at work',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Boredom at work', 'Lack of energy to achieve career goals'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Small financial surprises',
                'Temptations regarding expenses that should be overcome to save for the future',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Financial instability',
                "Overspending in the past has created problems in the present. It's important to remember this for the future",
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Challenging but interesting work that will bring recognition and enjoyment. The new endeavor will allow the querent to fully showcase their talents',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Poor prospects for the undertaking, an inability to approach the task correctly, lack of necessary skills',
            ],
        },
    ],
};
