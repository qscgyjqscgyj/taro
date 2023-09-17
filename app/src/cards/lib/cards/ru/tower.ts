import { CardData } from 'shared/types/cards';

export const tower: CardData = {
    name: 'БАШНЯ>',
    altNames: ['башня', 'сгоревший храм'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Разрушение',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Разрушение, крах',
                'Катастрофа, разрушение, потрясение, внезапные перемены',
                'Хаос, конфликты',
                'Освобождение, очищение души',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Предотвращение катастрофы',
                'Отсрочка неизбежного',
                'Сопротивление переменам',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Фундаментальные перемены — слабые отношения завершатся',
                'Кардинальное изменение взглядов на отношения',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Улавливать начинающиеся конфликты и устранять их',
                'Ухудшение отношений без желания расстаться',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Резкие и значимые изменения в работе — увольнение, повышение с большой ответственностью',
                'Внезапные перемены и хаос на рабочем месте',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Избежание рисков в карьере, пережить кризис на работе'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Возможна финансовая катастрофа, к которой нужно быть подготовленным'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Пережить финансовую катастрофу', 'Повторяющиеся финансовые проблемы'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Предупреждение о неприятностях', 'Крушение системы ценностей'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Восстановление после кризиса',
                'Подумать, что может облегчить ситуацию в будущем',
            ],
        },
    ],
};
