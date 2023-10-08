import { CardData } from 'shared/types/cards';

export const moon: CardData = {
    name: 'MOON',
    altNames: ['moon', 'twilight'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Inspiration',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Deceit, slander',
                'Hidden motives, secrets',
                'Uncertainty, unknown, confusion',
                'Warning, danger, bad influence',
                'Subconscious, inner voice',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Chaos, misunderstanding, anxiety, fear',
                'Misunderstanding, misinterpretation',
                'Petty deception, minor mistakes',
                'Clarity, understanding',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Delusions due to things left unsaid',
                'Uncertainty in relationships',
                'Complicated romance',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Hesitations or deceit', 'Restlessness and paranoia in relationships'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Uncertainty regarding career progression',
                'Confusion at work that requires',
                'Lack of information and facts',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Dissipation of misunderstandings and clarity at work',
                'Deception at the workplace and sabotage',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: [
                'Uncertainty regarding financial prospects',
                'Lack of knowledge in the financial sector',
            ],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Clarity regarding finances', 'Deception in financial matters'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Complicated matters, deceit',
                'Incomplete view of the situation due to hidden information',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Fear due to ignorance or lack of experience',
                'Intuition will suggest a direction and help with problem-solving',
            ],
        },
    ],
};
