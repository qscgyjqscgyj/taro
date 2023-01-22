import { CardData } from 'src/services/cards/types';

export const cupsThree: CardData = {
    name: 'ТРОЙКА КУБКОВ',
    altNames: ['тройка кубков', 'тройка чаш'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Празднование',
    image: require('./images/cupsThree.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Дружба, сообщество',
                'Собрания, празднования, групповые мероприятия, общественные мероприятия',
                'Успех, дело, радость',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Сплетни, скандал, подлость, эгоизм, нетерпимость',
                'Избыток, изоляция, одиночество, уединение, несбалансированная социальная жизнь',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Дружба переходящая в романтику',
                'Время в кругу друзей поможет улучшить отношения с партнёром',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Короткий, но захватывающий роман',
                'Остерегаться влияния на ваши отношения третьей стороны',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Повод для праздника на работе (новая работа, повышение, успешное окончание проекта)',
                'Счастливая и радостная обстановка в офисе',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Рабочие события идут не по плану', 'Деструктивная обстановка в офисе'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Расходы на социальную жизнь', 'Достижение финансового благополучия'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Чрезмерные расходы на светские приемы', 'Заем денег не по средствам'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Путь бeз пpeпятcтвий, пoдapoк cудьбы, удaчa',
                'Пoдвижнocть, лёгкocть, бeззaбoтнocть и нeпocpeдcтвeннocть',
                'Зeмныe цeннocти, нacлaждeниe пpocтыми paдocтями',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Пoтepя интepeca, oбecцeнивaниe жизни, oпуcтoшённocть внутpи',
                'Уcтaлocть, opиeнтиp тoлькo нa внeшниe aтpибуты дocтaткa',
                'Пoзиция наблюдателя и oткaз oт участия в coбытия',
            ],
        },
    ],
};
