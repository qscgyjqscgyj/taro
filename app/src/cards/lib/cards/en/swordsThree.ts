import { CardData } from 'shared/types/cards';

export const swordsThree: CardData = {
    name: 'THREE OF SWORDS',
    altNames: ['three of swords', 'three of spades'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Sorrow',
    description: [
        {
            category: 'General',
            direction: 'normal',
            textData: [
                'Broken heart, separation, loss, trauma',
                'Sadness, grief, sorrow',
                'Conflict, rupture, unpleasantness',
            ],
        },
        {
            category: 'General',
            direction: 'reversed',
            textData: [
                'Healing, forgiveness, recovery, reconciliation, recuperation',
                'Suppression of emotions, alienation',
            ],
        },
        {
            category: 'Love',
            direction: 'normal',
            textData: [
                'Painful feelings, sadness, and tears',
                'Relationship conflicts, separation, parting',
                'Possibly, a third party is involved in the relationship',
            ],
        },
        {
            category: 'Love',
            direction: 'reversed',
            textData: [
                'Forgiveness of each other',
                'Moving on after emotional trauma',
                'Unhealed heart wound',
            ],
        },
        {
            category: 'Career',
            direction: 'normal',
            textData: [
                'Conflicts with clients or colleagues, workplace grievances',
                'Feelings of hopelessness',
                'Job loss',
            ],
        },
        {
            category: 'Career',
            direction: 'reversed',
            textData: [
                'Overcoming conflicts, forgiveness',
                'Development of more effective processes',
                'Possibly worsening the conflict situation',
            ],
        },
        {
            category: 'Finances',
            direction: 'normal',
            textData: [
                'Loss of property',
                'Severe stress from financial decisions',
                'Negative financial consequences of a breakup/layoff',
            ],
        },
        {
            category: 'Finances',
            direction: 'reversed',
            textData: [
                'Achieving stability, creating savings',
                'Heavy emotional experiences regarding finances',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'normal',
            textData: [
                'Experiencing emotionally challenging period of life, depression and melancholy',
                'Unexpected blow, shock',
                'Dangerous current situation, unfriendly environment',
            ],
        },
        {
            category: 'Current Situation',
            direction: 'reversed',
            textData: [
                'Forgiveness of grievances',
                'Vindictiveness, desire to punish the offender in the same way',
            ],
        },
    ],
};
