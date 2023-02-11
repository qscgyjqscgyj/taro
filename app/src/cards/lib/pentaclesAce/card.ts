import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const pentaclesAce: CardData = {
    name: 'ТУЗ ПЕНТАКЛЕЙ',
    altNames: ['туз пентаклей', 'туз монет', 'туз денариев'],
    arcana: { type: 'minor', suit: 'pentacless' },
    subTitle: 'Финансовая независимость',
    image: `${getFullHost()}/images/pentaclesAce/images/pentaclesAce.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Новые возможности, удача',
                'Ресурсы, изобилие, процветание, большое богатство',
                'Безопасность, стабильность',
                'Независимость, личные достижения',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Упущенные шансы, поспешные решения, неудачные инвестиции',
                'Дефицит, нестабильность, тревога',
                'Жадность, коррупция',
                'Достаток без счастья',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Стабильные и безопасные отношения', 'Изобилие и процветание в паре'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Потеря эмоциональной стабильности',
                'Возможны денежные проблемы в отношениях',
                'Одиноким стоит избегать жадных людей',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Новые возможности для работы или заработка'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Упущенные возможности работы', 'Сожаление в выборе карьерных целей'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Время инвестирования в будущее', 'Новые финансовые возможности'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Ошибочные выборы в плане финансов',
                'Дефицит',
                'Чрезвычайная финансовая ситуация',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Новые дела сулят успех', 'Вознаграждение, подарок'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Траты вызванные проблемами',
                'Удержание финансов',
                'Задержка в реализации намеченного',
            ],
        },
    ],
};
