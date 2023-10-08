import { CardData } from 'shared/types/cards';

export const cupsFive: CardData = {
    name: 'FIVE OF CUPS',
    altNames: ['five of cups', 'five of chalices', 'fives of cups', 'fives of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Disappointment',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Loss, sorrow, disappointment, failure',
                'Sadness, mourning, dissatisfaction',
                'Feeling that you were let down',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Acceptance, moving forward, finding peace',
                'Contentment, seeing the positive, motivation',
                'Good news, courage, loneliness',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Experiencing a breakup',
                'Tension and sadness in relationships',
                'Time to reflect on gained experience',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Healing from old wounds',
                'Moving on from past relationships',
                'Relief after a tense period in relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Taking a step back in your career',
                'Breakup — loss of job, project failure, loss of a client',
                'Transformation',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Job loss leading to an improved situation',
                'Healing, taking a deep breath after a career mistake',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial losses',
                "There's still something to save",
                'Consider focusing on your strengths to recover financially',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Relief of financial losses', 'Recovery of financial security'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Forced departure',
                'Challenging life period, lesson',
                'First step into the unknown, beginning of something bigger',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Fear of letting go of the past, being closed off to anything new and better',
                'Attachment to past events, dwelling on them',
                'Moving away from the past self, liberation through grief and tears',
            ],
        },
    ],
};
