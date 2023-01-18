import { CardData } from 'src/services/cards/types';

export const swordsKnight: CardData = {
    name: 'РЫЦАРЬ МЕЧЕЙ',
    altNames: ['рыцарь мечей', 'рыцарь шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Упорство',
    image: require('./images/swordsKnight.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Напористый, прямой, нетерпеливый',
                'Интеллектуальный, смелый, защита',
                'Сосредоточенный, перфекционист, амбициозный',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Грубый, бестактный, задиристый, агрессивный',
                'Волевой, безжалостный, высокомерный',
                'Ссоры, эгоизм, скрытность, непонимание',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Страхи по поводу близости',
                'Требовательный, легко скучающий партнер',
                'Решительность в действиях',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Агрессивный и контролирующий партнёр',
                'Издевательства, оскорбления',
                'Сильные ссоры',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Достижение целей, большие успехи',
                'Сосредоточенность на карьере, эффективность',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Безжалостность и агрессия на работе', 'Высокомерие, запугивание'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Концентрация на финансовых целях',
                'Принятие мер по достижению финансовых целей',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Чрезмерная концентрация на деньгах, потенциально ведущая к аморальным действиям',
                'Мошенничество, аферы, принуждение, сомнительные финансовые сделки',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Бeccтpaшиe и caмoувepeннocть, opиeнтиp нa дocтижeниe цeли',
                'Peшитeльныe дeйcтвия, нaличиe убeждeний, выcoкиx идeaлoв',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Heумecтнoe пoвeдeниe, пpямoe пpoявлeниe злoбы, нeнaвиcти',
                'Жeлaниe oтoмcтить вceм и вcя, вoccтaнoвить cпpaвeдливocть',
                'Зaциклeннocть нa coбcтвeннoй боли, oбидax и пpoшлoм гope',
            ],
        },
    ],
};
