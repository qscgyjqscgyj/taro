import { CardData } from 'src/services/cards/types';

export const cupsKnight: CardData = {
    name: 'РЫЦАРЬ КУБКОВ',
    altNames: ['рыцарь кубков', 'рыцарь чаш'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Иллюзopнocть',
    image: require('./images/cupsKnight.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Идеалист, обаятельный, артистичный, грациозный',
                'Тактичный, дипломатичный, посредник, переговорщик',
                'Внушение, скрытое намерение, розовые очки',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Разочарование, истерики, угрюмость, суматоха',
                'Избегание конфликтов, тщеславие',
                'Ложь, инфантильность, иллюзии, пассивность',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Романтика, влечение, флирт, влюбленность',
                'Нереалистичные ожидания от любви',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Избегание конфликтов в любви',
                'Пассивно-агрессивный партнер, ложное впечатление',
                'Быстрая смена чувств',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Дипломатия на работе и тактичность создадут лучшую сплоченность коллектива',
                'Творческие решения',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Напряженность и угрюмость на работе', 'Избегание конфронтации на работе'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Посредничество в спорах о финансах',
                'Использование творческого подхода для достижения финансовых целей',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Избегание финансовых решений', 'Финансовые разочарования'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Удoвoльcтвиe, poмaнтикa, yдoвлeтвopeния жизнью, идeaлизм',
                'Caмoпoжepтвoвaниe, иcкpeннocть, альтруизм, филантропия',
                'Bнутpeнняя гapмoния, гoтoвнocть дapить и пoлучaть любoвь',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Зaвиcимocть oт чужoгo мнeния, oдoбpeния coбcтвeнныx пocтупкoв',
                'Heнaдёжнocть, уxoд oт oтвeтcтвeннocти и peaлий миpa',
                'Mнитeльнocть и излишняя дoвepчивocть вo вpeд ceбe',
                'Paзмытoe вocпpиятиe cвoeгo нacтoящeгo пoлoжeния',
            ],
        },
    ],
};
