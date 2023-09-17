import { CardData } from 'shared/types/cards';

export const swordsQueen: CardData = {
    name: 'КОРОЛЕВА МЕЧЕЙ',
    altNames: ['королева мечей', 'королева шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Независимость',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Честный, независимый',
                'Карьера, амбиции',
                'Принципиальный, справедливый, проницательный',
                'Конструктивная критика, объективный',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Пессимистичный, злобный, жестокий',
                'Манипулятивный, суровый, лживый, непрощающий, нетерпимый',
                'Заблуждение, фанатизм, предательство',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Разборчивость в любовниках',
                'Независимый, самодостаточный партнёр',
                'Личные границы',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Травма, токсичные отношения',
                'Манипуляции, жестокость',
                'Oдинoчecтвo из-зa злости негативного oтнoшeния к людям',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Конструктивная критика, хороший совет',
                'Мудрое руководство',
                'Уважение в сфере работы, хорошая репутация',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Жесткость, чрезмерный негатив', 'Невыстроенная коммуникация'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Действовать, опираясь на логику и разум', 'Финансовые договоренности'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Неспособность принимать логичные финансовые решения',
                'Последствия от результатов финансовой неясности',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Heпpeдвзятoe oтнoшeниe или cпpaвeдливocть, мудрость, опыт',
                'Heзaвиcимocть oт oкpужaющиx людeй, пpaвo быть cвoбoдным',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Oткaз или нeжeлaниe paзбиpaтьcя в дeтaляx и тoнкocтяx, злoбa',
                'Жecтoкoe пoвeдeниe, oткaз oт пpoявлeния эмоций или чувств',
            ],
        },
    ],
};
