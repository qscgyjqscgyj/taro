import { CardData } from 'shared/types/cards';

export const hangedMan: CardData = {
    name: 'ПОВЕШЕННЫЙ',
    altNames: ['повешенный', 'висящий'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Отречение и жертва',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Подвешенное состояние, неуверенность',
                'Застой, скука',
                'Отсутствие направления и перспектив',
                'Раскаяние, сдача, остановка',
                'Разворот, озарение',
                'Учение, опыт',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Бесполезная жертва или избегание жертв',
                'Затягивание, незаинтересованность',
                'Застой, апатия',
                'Озабоченность своим эго',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Нельзя торопить любовь, стоит присмотреться к себе при отстранении',
                'Избегайте романтического давления',
                'Возможно потребуется жертва ради любви',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Честный разговор и совместное радикальное решение',
                'Отсутствие жертвы, следует следить за балансом в отношениях',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Неуверенность в карьере',
                'Ожидание и размышления о следующих шагах',
                'Вынужденный перерыв в работе',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Промедление, мешающее новым карьерным шагам', 'Неоправданные жертвы'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Ожидание, позволяющее по-новому взглянуть на финансы'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Нерешительность, не позволяющая сделать следующий шаг',
                'Неудачные инвестиции',
                'Напрасные финансовые жертвы',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Стоит взять паузу для размышления о целесообразности задуманного',
                'Если стоит вопрос об изменениях, стоит пойти на них',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Самонадеянность и самоуверенность — худшие помощники в этом вопросе',
                'Потребуется решать проблему самостоятельно, не вступая в конфликты и не подчиняясь чужой воле',
            ],
        },
    ],
};
