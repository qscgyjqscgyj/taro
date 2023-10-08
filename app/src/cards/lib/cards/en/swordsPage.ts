import { CardData } from 'shared/types/cards';

export const swordsPage: CardData = {
    name: 'Page of Swords',
    altNames: ['page of swords', 'page of blades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Ingenuity',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Inquisitive, witty, communicative',
                'Inspired, attentive, mental activity',
                'Chance, opportunity, beginning of the end, honesty, determination',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Distracted, cynical, sarcastic',
                'Gossip, sensitive, rude, lack of planning',
                'Insult, deceit, suspicion, espionage',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Intellectual relationships', 'Unfulfilled emotional needs'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Argumentative, defensive partner',
                'Inability to communicate and empathize',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Ambitious, intelligent individual', 'New career, education'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Job search, uncertainty about future career',
                'Many ideas without implementation',
                'Office gossip',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Financial curiosity', 'Money-making ideas'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Excessive financial analysis, analysis without action',
                'Wrong choice and missed opportunity or delay',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Resourcefulness, cleverness, observation from the sidelines, information gathering',
                'Rejecting the unnecessary and stepping out of the comfort zone, the familiar',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Taking on commitments and responsibilities but not fulfilling them',
                'Misconceptions about one’s own abilities',
            ],
        },
    ],
};
