import { CardData } from 'shared/types/cards';

export const cupsTwo: CardData = {
    name: 'TWO OF CUPS',
    altNames: ['two of cups', 'two of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Reciprocity',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Unity, partnership, joint effort, mutual respect',
                'Attraction, bond, close ties',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Separation, rejection, imbalance',
                'Tension, poor communication, departure',
                'Jealousy, illusion, discord',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Beginning of a relationship',
                'Mutually beneficial partnerships',
                'Teamwork',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Relationship imbalance, codependency',
                'Advice to be oneself in relationships as it makes them more fruitful',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Good relationship with colleagues',
                'Beneficial business partnership',
                'Office romance',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Unsuccessful business partnership',
                'Tension in communication at work and conflicts with colleagues',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial balance',
                'Financial security and stability, but not wealth',
                'Lack of financial stress',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Lack of budget distribution discipline', 'Expenditures exceed earnings'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Reciprocity, agreement, shared ideas and goals',
                'Reaching a new level, internal growth',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Long way to the goal, obstacles and hindrances',
                'Shifting responsibility, being touchy, anxiety',
            ],
        },
    ],
};
