import { CardData } from 'shared/types/cards';

export const swordsSeven: CardData = {
    name: 'SEVEN OF SWORDS',
    altNames: ['seven of swords', 'seven of blades', '7 of swords', '7 of blades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Deception',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: ['Deceit, cunning, intrigue', 'Strategy, resourcefulness', 'Cunning, deceit'],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Acknowledgment, conscience, remorse',
                'Malice, deception, concealment of truth',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Lies, suspicion, betrayal',
                'Be cautious in relationships and honestly evaluate your actions if deception comes from you',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Lies exposed, confession', 'Abandonment of pretense, honesty'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Gossip, sabotage',
                'Be cautious in trust, betrayal may come from an unexpected source',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Exposure of liars',
                'Facing consequences',
                'Change of approach, old methods no longer work',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Doubtful business deals', 'Fraud, theft, scams'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Consequences of dishonesty in financial matters',
                "Pay off debts, pay taxes, check if you're not deceiving someone",
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Unpredictability, unconventional approach, ability to twist situations',
                'Bypassing rules, unusual plan, reduction of aggression and anger',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Deception, betrayal of close people, envy and hatred',
                'Lack of ethics, honor',
            ],
        },
    ],
};
