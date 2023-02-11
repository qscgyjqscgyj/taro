import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const pentaclesTen: CardData = {
    name: 'ДЕСЯТКА ПЕНТАКЛЕЙ',
    altNames: ['десятка пентаклей', 'десятка монет', 'десятка денариев'],
    arcana: { type: 'minor', suit: 'pentacless' },
    subTitle: 'Изобилие',
    image: `${getFullHost()}/images/pentaclesTen/images/pentaclesTen.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Наследие, корни, семья, происхождение, наследство',
                'Выигрыш, фонды, привилегия, достаток',
                'Мудрость, успех, стабильность, традиция',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Семейные споры, нарушение традиций',
                'Банкротство, долги, мимолетный успех, конфликты из-за денег',
                'Финансовые потери, риск, нестабильность',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Финансово и эмоционально стабильная пара',
                'Подходящее время для новых этапов отношений',
                'Желание одобрения избранника семьёй',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Конфликт между вашим партнёром и вашей семьей',
                'Сторонние мнения о вашем избраннике',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Создание прочной карьеры, которая обеспечит стабильное будущее',
                'Семейный бизнес',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Нестабильная работа, карьера', 'Распад компании, долги'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Выигрыш, наследство', 'Развитие стабильного финансового будущего'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Долги, финансовые потери', 'Семейные разногласия из-за денег'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Сильное влияние семьи на ситуацию', 'Медленный, но стабильный прогресс'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Устаревшие методы не будут так эффективны как раньше',
                'Изменение системы ценностей, не стоит забывать семью',
            ],
        },
    ],
};
