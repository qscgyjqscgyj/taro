import { CardData } from 'shared/types/cards';

export const highPriestess: CardData = {
    name: 'HIGH PRIESTESS',
    altNames: ['high priestess', 'nun', 'papess'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Secret knowledge',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Harmony of intuition and mind',
                'Inner voice, unconscious',
                'Tranquility',
                'Wisdom, foresight',
                'Feminine principle',
                'Patience',
                'Mysterious matters',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Loss of inner voice',
                'Superficiality, ignorance',
                'Biases',
                'Selfishness',
                'Hidden motives',
                'Secret enemies',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Secret/forbidden attraction',
                'External tranquility in relationships with inner passion and intimacy',
                'Loneliness',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Hiding one\'s "self"',
                'Excessive rationality and ignoring intuition',
                'Lack of patience and empathy',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Education', 'Creative inspiration', 'Mentor', 'Should rely on instincts'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Feeling of isolation',
                'Lack of project information',
                'Rejection of intuition',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ["Hiding one's financial situation", 'Using intuition in financial matters'],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Incomplete possession of information'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Self-analysis, concentration',
                "Listen to one's intuition",
                'Should "Express oneself"',
                'Deep understanding of the situation',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: ['Many hidden motives', 'Doubt and lack of self-confidence'],
        },
    ],
};
