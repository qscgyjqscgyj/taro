import { CardData } from 'src/services/cards/types';

export const emperor: CardData = {
    name: 'ИМПЕРАТОР',
    altNames: ['император', 'хозяИН'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Контроль через интеллект',
    image: require('./images/emperor.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Сила, власть, стабильность',
                'Уверенность в себе, достижения',
                'Самопознание',
                'Богатство, контроль',
                'Мужское влияние',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Незрелость',
                'Недостаток силы',
                'Нерешительность, безрассудство',
                'Неумение контролировать эмоции',
                'Властный, жесткий, упрямый',
                'Недисциплинированный',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Прочные отношения, основанные на уважении',
                'Традиционные отношения',
                'Использование логики в любви',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Отношения по расчёту, привычка',
                'Борьба за власть',
                'Властный партнер',
                'Невыраженные эмоции',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Трудолюбие, концентрация',
                'Создание структуры, дисциплины',
                'Наставничество',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Трудности в работе без системы',
                'Низкая концентрация',
                'Бюрократия',
                'Плохой начальник',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Дисциплина в отношении денег', 'Контроль'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Отсутствие дисциплины в отношении денег', 'Неконтролируемые финансы'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Стабильность',
                'Продвижение по работе благодаря дисциплине и ответственности',
                'Совет тщательно планировать свои действия, не откладывать решения, принимая их взвешенно, но быстро',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Проблемы вызваны безответственностью, отсутствием дисциплины, нежеланием сотрудничать с другими людьми',
            ],
        },
    ],
};
