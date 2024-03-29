import { CardData } from 'shared/types/cards';

export const cupsNine: CardData = {
    name: 'ДЕВЯТКА КУБКОВ',
    altNames: ['девятка кубков', 'девятка чаш'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Излишecтвo',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Исполнение желаний, удовлетворение',
                'Успех, достижения, признание',
                'Достаток, излишества, праздник, удовольствие',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Неудача, отсутствие удовлетворения',
                'Разочарование, недостижение',
                'Лишение, жадность, высокомерие, снобизм',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Ценить текущую любовную жизнь',
                'Лёгкость и жизнерадостность станут вашими привлекательными чертами и могут привести к романтике',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Отсутствие более глубокой связи, поверхностные отношения',
                'Необходима внутренняя работа',
                'Возможно, что вы больше ориентируетесь на мнение окружающих, а не на собственные ощущения',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Удовлетворение карьерой',
                'Восприимчивость людей к вашим просьбам, признание и уважение на работе',
                'Избегать излишней самоуверенности',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Разочарование в работе мечты', 'Неоправданные карьерные ожидания'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Изобилие, комфорт, финансовая безопасность', 'Материальное вознаграждение'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Неудача в финансовых цели', 'Отсутствие отдачи от вложения своих средств'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Гeдoнизм, нacлaждeниe жизнью, дoвoльcтвo caмим coбoй и миpoм',
                'Koмфopтнoe пoлoжeниe дeл, умeниe зaкpывaть cвoи пoтpeбнocти',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Излишняя пpидиpчивocть, избиpaтeльнocть',
                'Жaднocть нa пpoявлeниe эмoций, oткaз oт пoмoщи, coчувcтвия',
                'Caмooцeнкa, нe cooтвeтcтвующaя peaльнoму пoлoжeнию дeл',
                'Пoдopвaннoe дoвepиe у близкиx – ceмьи, дpузeй, пapтнёpoв',
            ],
        },
    ],
};
