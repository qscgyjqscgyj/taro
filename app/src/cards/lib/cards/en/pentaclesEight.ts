import { CardData } from 'shared/types/cards';

export const pentaclesEight: CardData = {
    name: 'EIGHT OF PENTACLES',
    altNames: ['eight of pentacles', 'eight of coins', 'eight of denarii'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Work',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Effort, work, dedication',
                'Experience, skill, talent, quick learning',
                'High quality, achievements',
                'Success, luck',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Lack of ambition, laziness, low qualification, vain labor',
                'Vanity, mediocrity, pretense',
                'Sensitivity, disappointment, need',
                'Lack of quality, hasty work, poor motivation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Successful development of relationships',
                'Common goals and desires, which can be achieved with some effort',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: ['To be lazy, to evade putting effort into love', 'Neglect of relationships'],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Dedication to work and showcasing your talent can help you advance in service',
                'Developing new skills',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: ['Low motivation, low quality of work', 'Tiring work'],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Financial reward due to dedication to your cause',
                'Strengthening financial independence',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: ['Careless attitude towards finances'],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Do not hide your talents and skills. Now is a very suitable time to showcase them. In this case, they will be rewarded properly',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Certain personal qualities, despite your adequate skills, hinder achieving the desired',
                'You should not overestimate your own chances and take on too much',
            ],
        },
    ],
};
