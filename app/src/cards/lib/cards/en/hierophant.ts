import { CardData } from 'shared/types/cards';

export const hierophant: CardData = {
    name: 'HIEROPHANT',
    altNames: ['hierophant', 'high priest'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Conformism, orthodoxy',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Leadership qualities (spiritual)',
                'Wisdom, education, convictions',
                'Beliefs, hierarchies',
                'Traditions, social groups',
                'Conventions, compliance',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Rebellion, unorthodoxy',
                'Non-compliance',
                'New methods, ignorance',
                'Stubbornness, courage',
                'Vengefulness',
                'Fanaticism',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: ['Safe, traditional partners', 'Avoiding taboos', 'Spiritual love'],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['Outdated relationships', 'Misaligned values', 'Violation of taboos'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Success in work groups', 'Education', 'Mentor', 'Teamwork'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Bureaucracy', 'Stifling, restricted workplace', 'Peer pressure'],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ['Keeping money safe', 'Traditional financial institutions'],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: ['New financial institutions taking financial risks'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: ['Upholding traditional values', 'Spiritual values'],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Rules or rituals that used to help have become meaningless',
                'Should solve problems without violating morals',
            ],
        },
    ],
};
