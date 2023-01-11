import { CardData } from 'src/services/cards/types';

export const swordsFour: CardData = {
    name: 'ТРОЙКА МЕЧЕЙ',
    altNames: ['четверка мечей', 'четверка шпаг', 'четвёрка мечей', 'четвёрка шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Отдых',
    image: require('./images/swordsFour.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Отдых, расслабление, путешествие, успокоение',
                'Убежище, восстановление, самозащита, самосозерцание',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Восстановление, возвращение в мир, исцеление',
                'Освобождение от изоляции, беспокойства, выгорания',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Отдых от чрезмерного усердия, передышка', 'Уединение, личное время'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Отказ от давящего любовника',
                'Окончание периода отдыха, наполненность энергией',
                'Выход из рутины и возрождение страсти',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Совет сделать передышку, взять отпуск или отгул и провести их с заботой о себе',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Свежий взгляд на задачи после отдыха', 'Выгорание'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Беспокойство о финансах, избегать чрезмерных размышлений о деньгах'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Непринятие поддержки', 'Восстановление после финансового давления'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Cтpeмлeниe зaкpытьcя, oтoйти oт дeл или кoнкpeтныx людeй',
                'Пoгpужeниe в глубины paзумa или paзoтoждecтвлeниe c тeлoм',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Необходимо расставить приоритеты так, чтобы не навредить своему здоровью — перезарядиться, и затем вернуться к бою с новыми силами',
            ],
        },
    ],
};
