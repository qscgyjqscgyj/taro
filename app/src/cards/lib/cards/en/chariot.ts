import { CardData } from 'shared/types/cards';

export const chariot: CardData = {
    name: 'CHARIOT',
    altNames: ['chariot', 'cart', 'driver'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Triumph of the Mind',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Will, ambition, determination',
                'Direction, movement',
                'Control, concentration',
                'Success, breakthrough',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lack of control, direction',
                'Obstacles, failure, defeat',
                'Aggression, resentment',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                "Control over one's personal life — understanding one's desires, showing initiative",
                'In relationships, one should not lose their individuality and values. They should be balanced',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Difficulty in making the right decision',
                'Relationship problems related to spontaneous decisions or actions',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Your ambition and motivation will help you achieve success in your job',
                'New experience',
                'Independent line of work, self-employment',
                'Change of activity',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Futility of efforts', 'Lack or excess of ambition and focus'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'A sign to address financial obstacles. You will have the motivation, focus, and determination to overcome these difficulties',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Beware of rash and hasty purchases',
                'Indicates indecision on the financial front',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'The card indicates a clash of the inner and outer worlds. It is important to determine a goal and concentrate on it. Listening to your inner voice will assist in achieving the desired outcome.',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Loss of control over the situation/actions. One should take a closer look at their pace and effort and adjust them accordingly',
            ],
        },
    ],
};
