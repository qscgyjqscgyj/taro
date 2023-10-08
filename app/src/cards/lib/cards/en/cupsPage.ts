import { CardData } from 'shared/types/cards';

export const cupsPage: CardData = {
    name: 'PAGE OF CUPS',
    altNames: ['page of cups', 'page of chalices'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Infatuation',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Idealism, sensitivity',
                'Dreamer, naivety, innocence, inner child, head in the clouds',
                'Good news, impulse, chance, push',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Emotional vulnerability, immaturity',
                'Neglect of the inner child, escapism, insecurity',
                'Spoiled, daydreaming',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Fresh look at relationships',
                'Sincerity, innocence, purity of felt emotions',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Shyness, vulnerability, emotionally immature partner',
                'Insecurity in romantic relationships',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: ['Creative outlet at work', 'Dreaming of career growth'],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Emotional vulnerability at work, insecurity',
                'Creative blocks',
                'Lack of motivation',
            ],
        },
        {
            category: 'Finance',
            direction: 'normal',
            textData: ['Unrealistic financial goals', 'Dreaming without putting in effort'],
        },
        {
            category: 'Finance',
            direction: 'reversed',
            textData: [
                'Denial of financial status',
                'Avoiding financial decisions, financial illiteracy',
            ],
        },
        {
            category: 'Current situation',
            direction: 'normal',
            textData: [
                'Lightness, playfulness, innocent feelings, flirt, compliments',
                'Arrival of good news, romantic gift',
                'Bright experience, beginning of understanding',
            ],
        },
        {
            category: 'Current situation',
            direction: 'reversed',
            textData: [
                'Non-seriousness, avoidance of personal responsibility',
                'Obsession with past failures, experiences',
                "Victim of circumstances, doubt in one's capabilities",
            ],
        },
    ],
};
