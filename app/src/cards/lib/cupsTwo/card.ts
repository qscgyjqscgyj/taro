import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const cupsTwo: CardData = {
    name: 'ДВОЙКА КУБКОВ',
    altNames: ['двойка кубков', 'двойка чаш'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Взаимность',
    image: `${getFullHost()}/images/cupsTwo/images/cupsTwo.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Единство, партнерство, объединение усилий, взаимное уважение',
                'Притяжение, связь, тесные узы',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Разделение, отвержение, дисбаланс',
                'Напряжение, плохое общение, уход',
                'Ревность, иллюзия, разлад',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Начало отношений',
                'Взаимовыгодные партнёрские отношения',
                'Совместная работа в команде',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Дисбаланс в отношениях, созависимость',
                'Совет быть самим собой в отношениях, так как это сделает их более плодотворными',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Хорошие отношения с коллегами',
                'Полезное деловое партнёрство',
                'Служебный роман',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Неудачное деловое партнерство',
                'Напряжение в общении на работе и конфликты с коллегами',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Баланс финансов',
                'Финансовая безопасность и стабильность, но не богатство',
                'Отсутствие финансового стресса',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Отсутствие дисциплины в распределении бюджета',
                'Траты превышают заработок',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Bзaимнocть, coглaшeниe, oбщиe идeи и цeли',
                'Bыxoд нa нoвый уровeнь, внутренний рост',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Дoлгий путь к цeли, пoмexи и пpeпятcтвия',
                'Пepeклaдывaниe oтвeтcтвeннocти, мнитeльнocть, бecпoкoйcтво',
            ],
        },
    ],
};
