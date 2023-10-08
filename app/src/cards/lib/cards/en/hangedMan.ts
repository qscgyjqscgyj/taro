import { CardData } from 'shared/types/cards';

export const hangedMan: CardData = {
    name: 'HANGED MAN',
    altNames: ['hanged', 'hanging'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Renunciation and Sacrifice',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Suspended state, uncertainty',
                'Stagnation, boredom',
                'Lack of direction and perspective',
                'Repentance, surrender, halt',
                'U-turn, enlightenment',
                'Learning, experience',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Futile sacrifice or avoidance of sacrifice',
                'Dragging on, disinterest',
                'Stagnation, apathy',
                "Concerned with one's ego",
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                "Can't rush love, should take a closer look at oneself when distancing",
                'Avoid romantic pressure',
                'Might need a sacrifice for love',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Honest conversation and joint radical decision',
                'Lack of sacrifice, should monitor the balance in relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Uncertainty in career',
                'Waiting and pondering the next steps',
                'Forced break in work',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Delay hindering new career steps', 'Unjustified sacrifices'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Waiting, allowing a new perspective on finances'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Indecision, not allowing the next step',
                'Bad investments',
                'Futile financial sacrifices',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Should take a pause to reflect on the feasibility of the planned',
                "If there's a question about changes, should go for them",
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Overconfidence and self-assurance are the worst assistants in this matter',
                "Will need to solve the problem independently, without getting into conflicts and not submitting to someone else's will",
            ],
        },
    ],
};
