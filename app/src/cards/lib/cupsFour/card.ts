import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const cupsFour: CardData = {
    name: 'ЧЕТВЁРКА КУБКОВ',
    altNames: ['четвёрка кубков', 'четвёрка чаш', 'четверка кубков', 'четверка чаш'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Недовольство',
    image: `${getFullHost()}/images/cupsFour/images/cupsFour.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Апатия, скука, чувство разъединения, меланхолия, безразличие',
                'Недовольство, обида, неуверенность в себе, замкнутость',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Ясность, осознание, принятие',
                'Депрессивные настроения, негативность',
                'Чувство упущенного шанса, жалость к себе',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Скука в личной жизни', 'Отсутствие ярких эмоций в отношениях'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Пробуждение и активность в романтической сфере',
                'Новое открытие, свежий взгляд на отношения',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Скука на работе',
                'Чувство неудовлетворенности работой или карьерой',
                'Отсутствие прогресса',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Вдохновение или творчество',
                'Осознание карьеры, новый подход',
                'Корректировки',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Чувство разочарования в деньгах', 'Зависть к другим людям'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Позитивный подход к финансам',
                'Сила воли для достижения финансовых целей',
                'Ориентир на собственные решения',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Kpизиc личнocти, вoпpocы o cвoём мecтe в жизни, пoиcк cмыcлa',
                'Cкукa, нaдoeдaющиe люди, пpиeвшиecя oтнoшeния, гипepoпeкa, нaвязчивocть',
                'Дoтoшнocть, нeпpeклoннocть, opиeнтиp тoлькo нa cвoё мнeниe',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Второе дыхание, открывающее новые силы, новые возможности, которые нельзя упускать',
                'Пoдвepжeннocть чужoму влиянию, несправедливый кoмпpoмиcc',
                'Peгpeccия, погруженность в воспоминания, вспоминание предыдущего oпытa',
            ],
        },
    ],
};
