import { CardData } from 'shared/types/cards';

export const wandsNine: CardData = {
    name: 'Nine of Wands',
    altNames: ['nine of wands', 'nine of rods', 'nine of staffs', 'nine of scepters'],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Reserve of Strength',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Persistence, determination, proximity to success, fatigue',
                'Courage, perseverance',
                'Calmness, readiness for defense, financial success',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Stubbornness, rigidity, refusal to compromise',
                'Defensiveness, obstinacy, suspicion',
                'Failure, emptiness, fatigue',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'A reminder that love and relationships are the result of work on them',
                'Readiness for serious steps, self-improvement',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                "Relationships don't meet expectations, despite one of the partners making efforts",
                'Feeling of exhaustion and weariness from the relationship',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Being halfway through your career project',
                'Fatigue from work, a feeling of emptiness',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Feeling of exhaustion and fatigue at work, struggle',
                'Approaching burnout',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial pressure',
                'The idea of turning to your financial cushion or taking a loan should be replaced by searching for alternative income options',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Avoiding financial responsibility, attempts to avoid financial stress',
                'Advice to manage finances wisely and avoid impulsive and inappropriate spending at this time',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'A surge of strength to achieve everything planned',
                'Deserved rewards for hard work will bring income, but it is important to pay attention to your well-being to avoid physical exhaustion',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'The person has lost their connection with the outside world. Perhaps they have taken on too much or have unrealistic expectations of others',
            ],
        },
    ],
};
