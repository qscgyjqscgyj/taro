import { CardData } from 'shared/types/cards';

export const lovers: CardData = {
    name: 'ВЛЮБЛЕННЫЕ',
    altNames: ['влюблённые', 'возлюбленный'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Баланс между двумя силами',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Доверие, безопасность, отношения',
                'Выбор между противоположностями',
                'Проблемы с решением',
                'Гармония, совершенство',
                'Ложь, обман, болезненные прозрения',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Дисбаланс',
                'Конфликт, нетерпение',
                'Измена',
                'Отстраненность',
                'Неверный выбор',
                'Нерешительность',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Сбалансированные, любящие, поддерживающие отношения',
                'Выбор в отношении любви',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Холодный, отстраненный партнер',
                'Слишком много поклонников',
                'Дисбаланс в отношениях',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Деловое партнерство', 'Романтика на работе', 'Выбор карьеры'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Конфликты между коллегами',
                'Романтика на работе, приводящая к неприятностям',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Взаимоисключающий финансовый выбор'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Импульсивный финансовый выбор, не отвечающий за финансы'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Ваша мудрость поможет сделать правильный выбор',
                'Сотрудничество и взаимопомощь помогут в позитивном решении ситуации',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Негативное значение карты. Говорит о ваших заблуждениях и неверных действиях',
                'Сулит сильное разочарование, вызванное поспешными действиями',
                'Отсутствие доверия',
            ],
        },
    ],
};
