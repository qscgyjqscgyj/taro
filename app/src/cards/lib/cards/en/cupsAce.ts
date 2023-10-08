import { CardData } from 'shared/types/cards';

export const cupsAce: CardData = {
    name: 'ACE OF CUPS',
    altNames: ['ace of cups', 'ace of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Fertility',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Love, new feelings, emotional awakening',
                'Creativity, spirituality, intuition',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Coldness, emptiness, emotional loss',
                'Loneliness, sorrow, fading love',
                'Blockage of creative potential',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['New romance, new level in relationships', 'Friendship, deeper intimacy'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Sadness, separation, vulnerability', 'Insecurity, lack of self-confidence'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Friendly relationships at work',
                'New emotions about work',
                'Surge of creative forces',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Feeling of unmotivation and boredom at work',
                'Unfriendliness of colleagues',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial assistance',
                'Pleasant financial news',
                'Creative approach to earning',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Discouraging news', 'Disappointment about finances'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Sincerity, step forward, good relationships',
                'Working with pleasure, self-realization, resolution of financial issues',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Dissatisfaction with the current situation, unmet needs',
                'Buried talents, unused abilities or actions that harm oneself',
            ],
        },
    ],
};
