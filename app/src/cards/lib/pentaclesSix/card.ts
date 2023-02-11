import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const pentaclesSix: CardData = {
    name: 'ШЕСТЁРКА ПЕНТАКЛЕЙ',
    altNames: [
        'шестерка пентаклей',
        'шестерка монет',
        'шестерка денариев',
        'шестёрка пентаклей',
        'шестёрка монет',
        'шестёрка денариев',
    ],
    arcana: { type: 'minor', suit: 'pentacless' },
    subTitle: 'Щедрость',
    image: `${getFullHost()}/images/pentaclesSix/images/pentaclesSix.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Щедрость, благотворительность,  материальная помощь',
                'Поддержка, обмен,  благодарность, доброта, милосердие',
                'Финансовая выгода',
                'Наставничество',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Злоупотребление щедростью, вымогательство',
                'Неравенство',
                'Жадность, эгоизм, ревность, опасная ошибка',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Эмоциональная и финансовая поддержка от партнёра',
                'Благоприятные отношения',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Несправедливая динамика власти',
                'Неравномерное распределение ролей',
                'Использование любви в корыстных целях',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Щедрый наставник, который делится своим опытом и временем',
                'Гадающего ценят на рабочем месте',
                'Если задумываетесь о смене работы, то найдёте вариант лучше ожидаемого',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Злоупотребление служебным положением',
                'Скрытые мотивы, "услуга за услугу"',
                'Подхалимство к начальству',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Щедрое окружение, материальная поддержка, финансирование',
                'Пожертвования, помощь нуждающимся',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Отказ в оказании помощи', 'Подарки с условиями', 'Обиды'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Подарок, финансовая поддержка', 'Помощь'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Финансовые потери — проигрыш, кража, неоплаченный долг',
                'Обман, плохое качество',
            ],
        },
    ],
};