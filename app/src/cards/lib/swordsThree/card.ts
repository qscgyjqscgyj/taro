import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const swordsThree: CardData = {
    name: 'ТРОЙКА МЕЧЕЙ',
    altNames: ['тройка мечей', 'тройка шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Боль',
    image: `${getFullHost()}/images/swordsThree/images/swordsThree.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Разбитое сердце, разлука, потеря, травма',
                'Грусть, горе, печаль',
                'Конфликт, разрыв, неприятности',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Исцеление, прощение, восстановление, примирение, выздоровление',
                'Подавление эмоций, отчуждение',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Болезненные чувства, грусть и слёзы',
                'Конфликты в отношениях, разлука, расставание',
                'Возможно, в отношения вовлечена третья стороны',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Прощение друг друга',
                'Жить дальше после душевной травмы',
                'Незажившая сердечная рана',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Конфликты с клиентами или коллегами, обиды на работе',
                'Чувство безнадежности',
                'Потеря работы',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Преодоление конфликтов, прощение',
                'Разработка более эффективных процессов',
                'Возможно и ухудшение конфликтной ситуации',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Потеря имущества',
                'Сильный стресс от решения финансовых вопросов',
                'Негативные финансовые последствия от расставания/увольнения',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Обретение стабильности, создание сбережений',
                'Тяжелые переживания по поводу финансов',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Пpoживaниe эмоционально тяжёлoгo пepиoдa жизни, дeпpeccия и мeлaнxoлия',
                'Heoжидaнный удap, пoтpяceниe',
                'Oпacнaя тeкущaя oбcтaнoвкa, нeдpужeлюбнoe oкpужeниe',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Прощение обид',
                'Mcтитeльнocть, жeлaниe нaкaзaть oбидчикa тaким жe мeтoдoм',
            ],
        },
    ],
};