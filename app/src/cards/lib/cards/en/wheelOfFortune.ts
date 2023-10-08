import { CardData } from 'shared/types/cards';

export const wheelOfFortune: CardData = {
    name: 'The Wheel of Fortune',
    altNames: ['wheel of fortune', 'wheel of destiny', 'fortune'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'The Spirit Moving Towards Destiny',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Upcoming changes, unexpected events',
                'Resolution of the situation, a new beginning',
                'Fate, decisive moments, luck',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Clinging to the past, unwanted changes',
                'Misfortune, deadlock, stagnation',
                'Attempts to maintain control',
                'Failure, inconsistency',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Unexpected strong changes in relationships',
                'Making corrections and jointly seeking solutions will bring you closer',
                'Fateful encounter, a successful romance',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Stagnation, routine, boredom',
                'Unexpected strong/breakthrough changes in relationships',
                'External influence on relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Adapting to changes in your career path, luck',
                'It\'s important to stay informed about available opportunities and be able to say "yes" to them',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Desire to cling to past decisions', 'Inability to adapt at work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Unexpected changes in your financial situation',
                "You should manage your finances well — save and don't despair, as problems are not permanent",
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Unexpected financial expenses',
                'You should prepare and have a financial cushion',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'You should act quickly without succumbing to emotions',
                'You should listen to the first idea that comes to you as a solution to the problem',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: ['Many difficulties and unpleasantness', 'Lack of trust'],
        },
    ],
};
