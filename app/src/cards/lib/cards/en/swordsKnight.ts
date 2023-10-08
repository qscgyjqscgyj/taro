import { CardData } from 'shared/types/cards';

export const swordsKnight: CardData = {
    name: 'Swords Knight',
    altNames: ['knight of swords', 'knight of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Determination',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Assertive, direct, impatient',
                'Intellectual, bold, protective',
                'Focused, perfectionist, ambitious',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Rude, tactless, quarrelsome, aggressive',
                'Willful, ruthless, arrogant',
                'Arguments, selfishness, secrecy, misunderstanding',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Fears of intimacy',
                'Demanding, easily bored partner',
                'Resolve in actions',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Aggressive and controlling partner',
                'Mockery, insults',
                'Strong arguments',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Achieving goals, great successes', 'Focus on career, efficiency'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Ruthlessness and aggression at work', 'Arrogance, intimidation'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: ['Focus on financial goals', 'Taking measures to achieve financial goals'],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Excessive focus on money, potentially leading to unethical actions',
                'Fraud, scams, coercion, questionable financial deals',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Fearlessness and self-confidence, oriented towards achieving the goal',
                'Decisive actions, presence of beliefs, high ideals',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Inappropriate behavior, direct expression of anger, hatred',
                'Desire to avenge everyone and everything, restore justice',
                "Fixation on one's own pain, grievances, and past sorrow",
            ],
        },
    ],
};
