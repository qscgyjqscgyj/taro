import { CardData } from 'shared/types/cards';

export const chariot: CardData = {
    name: 'CHARIOT',
    altNames: ['chariot', 'cart', 'charioteer'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Triumph of Reason',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Willpower, ambition, determination',
                'Direction, movement',
                'Control, focus',
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
                'Control over your personal life - understanding your desires, taking initiative',
                "In relationships, don't lose your individuality and values. It's important to balance them",
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Difficulties in making the right decisions',
                'Relationship problems related to spontaneous decisions or actions',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Your ambitions and motivation will help you succeed in your work',
                'New experiences',
                'Independent field of activity, self-employment',
                'Change of profession',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Futility of efforts made', 'Lack or excess of ambition and focus'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'A sign to tackle financial obstacles. You will have the motivation, focus, and determination to overcome these difficulties',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Beware of impulsive and hasty purchases',
                'Indicates indecision in financial matters',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'The card indicates a collision of the inner and outer worlds. It is important to define your goal and pursue it with focus. Listening to your inner voice will help you achieve your desires.',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                "Loss of control over the situation/your actions. It's important to examine your pace and diligence and make adjustments",
            ],
        },
    ],
};
