import { CardData } from 'shared/types/cards';

export const pentaclesKing: CardData = {
    name: 'KING OF PENTACLES',
    altNames: ['king of pentacles', 'king of coins', 'king of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Worldly success',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Abundance, prosperity',
                'Safety, ambitious, sensual, reliable',
                'Businessman, provider',
                'Instinct, intellect, good intuition',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Greed, materialism, wastefulness, fanaticism',
                'Bad financial decisions, gambler',
                'Exploiter, owner, anger',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Serious relationship', 'Generous provider', 'Emotional comfort and wealth'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Materialistic, greedy lover who might use you', 'Control, manipulation'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Success and ambition', 'Encouraging mentor, partner', 'Good reputation'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Failures at work, bad reputation', 'Despondency, tyranny'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Reaching a certain financial milestone',
                'Investing, savings',
                'Supporting loved ones, generosity',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Financial losses, bad financial decisions, debts', 'Stinginess'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Ability to transform internal resource into external',
                'Equivalent exchange of energies leading to breakthrough or growth',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Serious mistakes, improperly conveyed thoughts',
                'Focus on material at the expense of morality and other life spheres',
            ],
        },
    ],
};
