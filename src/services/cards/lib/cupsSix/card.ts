import { CardData } from 'src/services/cards/types';

export const cupsSix: CardData = {
    name: 'ШЕСТЁРКА КУБКОВ',
    altNames: ['шестёрка кубков', 'шестёрка чаш', 'шестерка кубков', 'шестерка чаш'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Славные времена',
    image: require('./images/cupsSix.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Ностальгия, воспоминания, знакомство',
                'Исцеление, сентиментальность, удовольствие',
                'Уют, покой, комфорт',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Зацикливаться, жить прошлым, беспокойство',
                'Движение вперед, новые события',
                'Уход из дома, независимость',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Влияние прошлого на настоящее — восстановление прошлых отношений',
                'Воспоминания',
                'Исцеление после расставания',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Зацикленность на прошлом опыте',
                'Неспособность двигаться дальше',
                'Нежелание жить настоящим',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Возвращение к прошлому — прежней работе, тому, что было интересно ранее',
                'Не стоит повторять старые ошибки, необходимо извлечь из них уроки',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Уход от комфортной работы',
                'Пребывание на нелюбимой работе',
                'Остерегаться повторения своего негативного опыта',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Финансовые подарки, пожертвование',
                'Совместное использование финансов, обеспечение партнёром',
                'Влияние семьи на ваше финансовое положение (например, ваше возвращение в родительский дом)',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Готовность к финансовой независимости', 'Окончание неприятного периода'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Cтpax отпустить пpoшлoe, зaкpытocть oт вceгo нoвoгo и лучшего',
                'Привязка к пpoшeдшим событиям, зaциклeннocть нa ниx',
                'Уход oт ceбя прошлого, ocвoбoждeниe чepeз гopecти, cлёзы',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Пpивязкa к идee o бeзoпacнocти, зaшopeннocть, зaщитa гpaниц',
                'Расширение границ,обновление круга общения, приобретение знаний, ведущие к новым возможностям',
            ],
        },
    ],
};