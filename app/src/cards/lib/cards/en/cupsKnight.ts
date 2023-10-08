import { CardData } from 'shared/types/cards';

export const cupsKnight: CardData = {
    name: 'KNIGHT OF CUPS',
    altNames: ['knight of cups', 'knight of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Illusoriness',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Idealist, charming, artistic, graceful',
                'Tactful, diplomatic, mediator, negotiator',
                'Suggestion, hidden intent, rose-colored glasses',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Disappointment, tantrums, gloominess, chaos',
                'Avoidance of conflicts, vanity',
                'Lie, childishness, illusions, passivity',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Romance, attraction, flirt, infatuation', 'Unrealistic love expectations'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Avoiding conflicts in love',
                'Passive-aggressive partner, false impression',
                'Quick change of feelings',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Diplomacy at work and tactfulness will create better team cohesion',
                'Creative solutions',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Tension and gloominess at work', 'Avoiding confrontation at work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Mediation in financial disputes',
                'Using a creative approach to achieve financial goals',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Avoiding financial decisions', 'Financial disappointments'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Pleasure, romance, life satisfaction, idealism',
                'Self-sacrifice, sincerity, altruism, philanthropy',
                'Inner harmony, readiness to give and receive love',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                "Dependency on others' opinions, approval of one's own actions",
                'Unreliability, escape from responsibility and realities of the world',
                "Delusion and excessive trust to one's own detriment",
                "Blurred perception of one's current situation",
            ],
        },
    ],
};
