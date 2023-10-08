import { CardData } from 'shared/types/cards';

export const pentaclesNine: CardData = {
    name: 'NINE OF PENTACLES',
    altNames: ['nine of pentacles', 'nine of coins', 'nine of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Acquisition',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Rewarded efforts, labor, completion of work',
                'Success, achievements',
                'Material security, self-sufficiency',
                'Independence, leisure',
                'Prudence, safety',
                'Insight, foresight',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Be cautious',
                'Living beyond means, thoughtless spending',
                'Superficiality, dishonesty',
                'Fraud, legal issues',
                'Loss of a friend',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Balance of love and independence', 'Enjoyment of what one has'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Caution in love', 'Fear of giving up independence'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Career goal achievement', 'Reaping the benefits of paid-off labor'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Strong desire for success without readiness to work for it',
                'Skewed balance towards work over personal life',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Improved financial position, comfort',
                'Abundance',
                'Acquisition of real estate',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Financial dependence on another person',
                'Overspending, impulsive purchases',
                'Desire for easy money',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Financial stability and comfort. Success in the material sphere',
                'All problems will be solved properly, given time',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: ['Warning about the need to stop in time, whatever the case may be'],
        },
    ],
};
