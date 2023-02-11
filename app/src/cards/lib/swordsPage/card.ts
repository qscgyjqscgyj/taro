import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const swordsPage: CardData = {
    name: 'ПАЖ МЕЧЕЙ',
    altNames: ['паж мечей', 'паж шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Сообразительность',
    image: `${getFullHost()}/images/swordsPage/images/swordsPage.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Любознательный, остроумный, коммуникабельный',
                'Вдохновленный, внимательный, умственная активность',
                'Шанс, возможность, начало конца, честность, решимость',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Рассеянный, циничный, саркастичный',
                'Сплетник, обидчивый, грубый, отсутствие планирования',
                'Оскорбление, коварство, подозрительность, шпионаж',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Интеллектуальные отношения', 'Неудовлетворенная эмоциональная потребность'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: ['Спорящий, защищающийся партнер', 'Неспособность к общению и эмпатии'],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Амбициозный, умный человек', 'Новая карьера, образование'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Поиск работы, неуверенность в будущей карьере',
                'Множество идей без реализации',
                'Офисные сплетни',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Финансовое любопытство', 'Идеи для зарабатывания денег'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Чрезмерный анализ финансов, исследование при бездействии',
                'Heвepный выбop и упущeннaя вoзмoжнocть или зaдepжкa',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Xитpocть, ocтpoумиe, нaблюдeниe co cтopoны, cбop инфopмaции',
                'Oтceчeниe нeнужнoгo и выxoд из зoны кoмфopтa, пpивычнoгo',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Человек берет на себя обязательства и ответственность, но не выполняет поручение',
                'Заблуждения пo пoвoду coбcтвeнныx cпocoбнocтeй',
            ],
        },
    ],
};
