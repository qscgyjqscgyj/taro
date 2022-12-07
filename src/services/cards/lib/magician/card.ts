import { CardData } from 'src/services/cards/types';

export const magician = {
    name: 'МАГ',
    altNames: ['маг', 'волшебник'],
    subTitle: 'Сила воли',
    image: require('./images/magician.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Воля',
                'Мастерство',
                'Дипломатия, гибкость',
                'Желание',
                'Уверенность в себе',
                'Жажда действия, смелость',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: ['Неумелость', 'Обман', 'Иллюзии', 'Нерешительность', 'Слабохарактерность'],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Создание условий и возможности для любви',
                'Проявление инициативы',
                'Активное участие в отношениях',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: ['Романтическая иллюзия', 'Обман'],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Использование возможностей для карьерного роста',
                'Решительность и стремление',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Растраченный талант', 'Нежелание рисковать', 'Обман на рабочем месте'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Финансовые успехи благодаря использованию своих возможностей'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Упущенные возможности'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Инициатива', 'Стремительное развитие'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Авантюра',
                'Появление сильного конкурента',
                'Дерзкий и агрессивный противник',
                'Внушение неуверенности в себе',
            ],
        },
    ],
} as CardData;
