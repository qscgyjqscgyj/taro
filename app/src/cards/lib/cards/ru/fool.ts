import { CardData } from 'shared/types/cards';

export const fool: CardData = {
    name: 'ШУТ',
    altNames: ['шут', 'глупец', 'дурак', 'безумец'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Дух',
    number: 0,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Начало',
                'Внутренняя свобода',
                'Экстравагантность',
                'Жизнь здесь и сейчас',
                'Приключения',
                'Любознательность',
                'Спонтанность',
                '"Внутренний ребёнок"',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Импульсивность',
                'Невнимательность',
                'Безрассудство',
                'Апатия',
                'Безответственность',
                'Неопытность',
                'Наивность',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Новые отношения', 'Свежесть в отношениях', 'Веселый легкий роман'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Отсутствие обязательств',
                'Инфантильность',
                'Рискованные отношения',
                'Измена',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Новая работа и проекты', 'Разговор о повышении', 'Обновления на работе'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Скучная работа', 'Необдуманные поступки на работе'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Спонтанные траты', 'Финансовые возможности'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Неосторожность в отношении финансов', 'Глупые покупки, траты'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Путешественник', 'Беззаботная личность'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: ['Нepaзбepиxа, xaoc и cумбуp'],
        },
    ],
};
