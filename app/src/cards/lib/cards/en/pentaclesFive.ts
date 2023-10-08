import { CardData } from 'shared/types/cards';

export const pentaclesFive: CardData = {
    name: 'FIVE OF PENTACLES',
    altNames: [
        'five of pentacles',
        'five of coins',
        'five of denarii',
        'five of pentacles',
        'five of coins',
        'five of denarii',
    ],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Poverty',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: ['Isolation, poverty, disgrace', 'Adversities, struggle, losses, bad luck'],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Positive changes, recovery after loss, overcoming adversities',
                'Reversal of a bad trend, forgiveness',
                'Effort, resilience',
                'New interest in affairs',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Feeling of isolation loneliness',
                'Depression',
                'Conflicts over financial problems',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Improvement in relationships/prospects for acquaintance',
                'Opening up to others',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Difficulties at work', 'Isolation in the workplace', 'Outcast'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Opportunity to solve problems at work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Saving in the face of a lack of money',
                'Material losses',
                "Reminder that in tough situations it's okay to ask for help",
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Recovery after financial losses', 'Paying off debts'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: ['Fear before an important event that will still have to be passed'],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: ['Baseless quarrel based on unproven accusations', 'Moral dilemma'],
        },
    ],
};
