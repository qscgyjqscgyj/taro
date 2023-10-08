import { CardData } from 'shared/types/cards';

export const wandsAce: CardData = {
    name: 'ACE OF WANDS',
    altNames: ['ace of wands', 'ace of rods', 'ace of staffs', 'ace of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Courage to Begin a Journey',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Inspiration, creative spark',
                'New initiative, new passion',
                'Energy, strength, enthusiasm',
                'Inheritance, changes',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lack of passion, lack of energy',
                'Indecision, creative blocks, delays',
                'Helplessness, pessimism, stubbornness, unclear prospects',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Exciting, sensual relationships', 'Flirting, romance, attraction'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Short-lived passionate love affair',
                'Lack of excitement in love, requiring effort to resolve',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Inspiration, passionate approach to work, career development',
                'Creative projects',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Loss of inspiration at work', 'Stagnation, lack of progress'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial relief, assistance in resolving financial issues',
                'End of struggle',
                'Inspiration in earning money',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Possible deterioration of financial situation',
                'Avoid risky financial decisions',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'A person with powerful energy potential',
                'Everything planned can be achieved through one’s activity and inspiration',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'The situation can be changed by "pulling oneself together"',
                'Restoration and rest will help regain composure and finish what has been started',
            ],
        },
    ],
};
