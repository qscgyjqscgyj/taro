import { CardData } from 'shared/types/cards';

export const cupsNine: CardData = {
    name: 'NINE OF CUPS',
    altNames: ['nine of cups', 'nine chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Excess',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Wish fulfillment, satisfaction',
                'Success, achievements, recognition',
                'Abundance, excess, celebration, pleasure',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Failure, lack of satisfaction',
                'Disappointment, non-achievement',
                'Deprivation, greed, arrogance, snobbery',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Appreciate your current love life',
                'Lightness and joyfulness will become your attractive traits and may lead to romance',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Lack of a deeper connection, superficial relationships',
                'Inner work is needed',
                'Perhaps you are more focused on the opinions of others rather than your own feelings',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Satisfaction with career',
                'People are receptive to your requests, recognition and respect at work',
                'Avoid excessive overconfidence',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Disappointment in dream job', 'Unmet career expectations'],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ['Abundance, comfort, financial security', 'Material reward'],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['Failure in financial goals', 'Lack of return on investment'],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Hedonism, enjoying life, being satisfied with oneself and the world',
                'Comfortable position, ability to meet your needs',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Excessive fussiness, selectiveness',
                'Greed in expressing emotions, refusing help, sympathy',
                'Self-assessment that does not match the reality',
                'Undermined trust from close ones – family, friends, partners',
            ],
        },
    ],
};
