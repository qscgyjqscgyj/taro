import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const swordsFive: CardData = {
    name: 'ПЯТЁРКА МЕЧЕЙ',
    altNames: ['пятёрка мечей', 'пятёрка шпаг', 'пятерка мечей', 'пятерка шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Разрушение',
    image: `${getFullHost()}/images/swordsFive/images/swordsFive.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Споры, конфликт, враждебность, стресс',
                'Агрессия, запугивание',
                'Позор, неудача, потеря',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Примирение, разрешение, компромисс',
                'Сожаление, раскаяние, сокращение потерь',
                'Месть, эгоизм, слабость',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Напряженные отношения, тревожность и раздражительность',
                'Недовольство, стресс, желание доказать свою правоту',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Восстановление отношений, прощение',
                'Прекращение конфликтов, но возможно и завершение отношений',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Конфликты на рабочем месте, запугивание, задира, враждебность',
                'Самобичевание, ведущее к напряжению рабочих отношений',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Компромиссы, открытый диалог', 'Нарастание конфликта'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Конфликты из-за денег', 'Использовать вас или других в чьих-то интересах'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Облегчение, ослабление финансового напряжения'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Вовлеченность в конфликт',
                'Отсутствия удовлетворения от получения желаемого, победа дорогой ценой',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Пересмотрение приоритетов в пользу отношений',
                'Опасности и неприятности со стороны окружающих',
            ],
        },
    ],
};
