import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const pentaclesTwo: CardData = {
    name: 'ДВОЙКА ПЕНТАКЛЕЙ',
    altNames: ['двойка пентаклей', 'двойка монет', 'двойка денариев'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Суета',
    image: `${getFullHost()}/images/pentaclesTwo/images/pentaclesTwo.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Балансирование',
                'Адаптация, гибкость',
                'Хаотичность, эмоции',
                'Ловкость, находчивость',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Дисбаланс, беспокойство',
                'Неорганизованность, хаос',
                'Перегруженность, перенапряжение, упадок духа',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Трудности в удержании баланса между любовью, семьёй и работой',
                'Адаптация к изменениям в отношениях',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Расстановка приоритетов между отношениями и чем-то другим',
                'Пренебрежение партнером',
                'Выбор между двумя (потенциальными) партнёрами',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Жонглирование проектами, непомерная нагрузка', 'Находчивость на работе'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Стресс от перегрузки работой — потребуется пересмотреть приоритеты и внести коррективы',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Ограниченные финансы, нестабильность',
                'Расставление финансовых приоритетов',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Проблема недостатка ресурсов, которую можно решить сокращением трат или поиском дополнительных вариантов заработка',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Имеется много энергии, которые можно направить на реализацию задуманного',
                'Путаница в мыслях',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Усталость и утрата мотивации',
                'Требуется время для уединённого отдыха и размышлений',
            ],
        },
    ],
};
