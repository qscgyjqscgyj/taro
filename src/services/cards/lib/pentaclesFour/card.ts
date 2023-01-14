import { CardData } from 'src/services/cards/types';

export const pentaclesFour: CardData = {
    name: 'ЧЕТВЁРКА ПЕНТАКЛЕЙ',
    altNames: [
        'четверка пентаклей',
        'четверка монет',
        'четверка денариев',
        'четвёрка пентаклей',
        'четвёрка монет',
        'четвёрка денариев',
    ],
    arcana: { type: 'minor', suit: 'pentacless' },
    subTitle: 'Крепкая хватка',
    image: require('./images/pentaclesFour.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Накопительство, экономия',
                'Стабильность, безопасность,  материализм',
                'Собственничество, неуверенность',
                'Алчность, скупость',
                'Подарок, наследство',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Щедрость, траты, открытость',
                'Финансовая незащищенность, необдуманные траты',
                'Робость, подозрения, ссоры',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Навязчивый любовник',
                'Ревность, чувство неуверенности',
                'Цепляние за прошлое',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: ['Преодоление ревности', 'Освобождение от прошлых воспоминаний и обид'],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Синдром самозванца, паранойя и беспокойство',
                'Избегание сотрудничества',
                'Держаться за стабильную работу, не приносящую удовольствия',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Щедрость с коллегами', 'Рискованные решения в работе'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Бережливость',
                'Накопление финансов (например, на крупную покупку)',
                'Стабильность',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Движение от бережливости в сторону щедрости',
                'Жертвовать и делиться ресурсами',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Цель будет достигнута запланированным путём и в поставленные сроки',
                'Интерес гадающего сейчас сфокусирован на материальной составляющей',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Зaциклeннocть нa пpoшлыx дocтижeнияx, cтpax двигаться впepёд',
                'Боязнь потерять имеющееся',
            ],
        },
    ],
};