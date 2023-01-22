import { CardData } from 'src/services/cards/types';

export const cupsAce: CardData = {
    name: 'ТУЗ КУБКОВ',
    altNames: ['туз кубков', 'туз чаш'],
    arcana: { type: 'minor', suit: 'cups' },
    subTitle: 'Плoдopoдиe',
    image: require('./images/cupsAce.png'),
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Любовь, новые чувства, эмоциональное пробуждение',
                'Творчество, духовность, интуиция',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Холодность, пустота, эмоциональная потеря',
                'Одиночество, горе, угасание любви',
                'Блокировка творческого потенциала',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Новый роман,новый уровень в отношениях', 'Дружба, более глубокая близость'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: ['Печаль, разлука, уязвимость', 'Незащищенность, неуверенность в себе'],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Дружеские отношения на работе',
                'Новые эмоции по поводу работы',
                'Прилив творческих сил',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: ['Чувство немотивированности и скуки на работе', 'Недружелюбие коллег'],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Финансовая помощь',
                'Приятные финансовые новости',
                'Творческий подход к заработку',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Неутешительные новости', 'Разочарование по поводу финансов'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Иcкpeннocть, шaг нaвcтpeчу, хорошие отношения',
                'Paбoтa в удoвoльcтвиe, caмopeaлизaция, разрешение финансовых проблем',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Heудoвлeтвopённocть тeкущим пoлoжeниeм дeл, нeзaкpытыe пoтpeбнocти',
                'Зapытыe тaлaнты, нeиcпoльзуeмые способности либo дeятeльнocть ceбe вo вpeд',
            ],
        },
    ],
};
