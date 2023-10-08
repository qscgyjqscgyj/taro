import { CardData } from 'shared/types/cards';

export const pentaclesThree: CardData = {
    name: 'THREE OF PENTACLES',
    altNames: ['three of pentacles', 'three of coins', 'three of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Good work',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Teamwork, common goals, collaboration',
                'Assistance, combining energy',
                'Apprenticeship, efforts',
                'Craftsmanship, artistry, fame',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lack of cohesion and teamwork',
                'Apathy, weak motivation, mediocrity',
                'Conflicts, ego, competition, lack of respect',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Balanced teamwork with a partner, complementing each other',
                'Office romance, sympathy in a place of creative passion',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Unequal distribution of responsibilities in relationships',
                "Someone isn't a good love partner",
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Working in a team',
                'Collaboration with people with various skills and opinions',
                'Training, skill enhancement',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Disharmony in relationships with colleagues',
                'Intrigues, competition, and politics at the workplace',
                'Poor academic performance',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Collaboration with financially literate people',
                'Learning and organizing finances',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Avoiding financial matters', 'Avoiding learning about finances'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: ['Confident improvement of the situation'],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Lack of skills to handle the problems',
                'It will be hard to take on the leader role, better to prefer the executor role in this situation',
            ],
        },
    ],
};
