import { CardData } from 'src/services/cards/types';

export const swordsNine: CardData = {
    name: 'ДЕВЯТКА МЕЧЕЙ',
    altNames: ['девятка мечей', 'девятка шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Отчаяние',
    image: require('./images/swordsNine.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Страх, тревога, негатив',
                'Переломный момент, отчаяние',
                'Кошмары, надумывание, преувеличение',
                'Страдания, сомнения, стыд, вина',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Выздоровление, научиться справляться, противостоять жизни',
                'Найти помощь, стыд, чувство вины',
                'Надежда, утешение',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Недоверие к партнеру, подозрительность', 'Сожаление о прошлом'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Открыться партнёру, помощь и поддержка от него',
                'Снятие стресса путем обмена опытом',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Тревога, паранойя, стресс из-за работы',
                'Отсутствие механизмов преодоления трудностей',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Ясность в отношении работы',
                'Разрешение проблем, обретение покоя',
                'Стрессы становятся реальностью, усиление проблем',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Паника по поводу финансов, заботы', 'Чувство обделенности'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Ясность в отношении финансов',
                'Ухудшение или улучшение финансовой страхов',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Oпуcтoшeниe и тpaуp, пpинятиe нeизбeжнocти в cвoeй жизни',
                'Эмoциoнaльнo тяжёлый тpуд и пepeживaния зa дpугиx людeй',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Пoлнaя пoгpужённocть в нeгaтив и oгpaничeннoe мышлeниe',
                'Нeвoзмoжнocть пpинять дaннocть',
                'Улучшение ситуации, разрешение опасений',
            ],
        },
    ],
};
