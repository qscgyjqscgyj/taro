import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const pentaclesFive: CardData = {
    name: 'ПЯТЁРКА ПЕНТАКЛЕЙ',
    altNames: [
        'пятверка пентаклей',
        'пятверка монет',
        'пятверка денариев',
        'пятвёрка пентаклей',
        'пятвёрка монет',
        'пятвёрка денариев',
    ],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Бедность',
    image: `${getFullHost()}/images/pentaclesFive/images/pentaclesFive.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: ['Изоляция, бедность, позор', 'Невзгоды, борьба, потери, невезение'],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Позитивные изменения, восстановление после потери, преодоление невзгод',
                'Разворот плохой тенденции, прощение',
                'Старание, стойкость',
                'Новый интерес в делах',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Чувство изоляции одиночества',
                'Депрессия',
                'Конфликты на фоне финансовых проблем',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: ['Улучшение отношений/перспектив для знакомства', 'Открытие себя для других'],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Сложности на работе', 'Изоляция на рабочем месте', 'Изгой'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Возможность для решения проблем на работе'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Экономия на фоне недостатка денег',
                'Материальные потери',
                'Напоминание, что в тяжёлых ситуациях нормально просить о помощи',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Восстановление после финансовых потерь', 'Выплата долгов'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Страх перед важным событием, которое всё равно придётся пройт'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Беспочвенная ссора на основании недоказанных обвинений',
                'Моральная дилемма',
            ],
        },
    ],
};
