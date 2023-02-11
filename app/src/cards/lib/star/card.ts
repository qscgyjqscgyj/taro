import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const star: CardData = {
    name: 'ЗВЕЗДА',
    altNames: ['звезда'],
    arcana: { type: 'major', suit: undefined },
    subTitle: 'Надежда',
    image: `${getFullHost()}/images/star/images/star.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Вера, вдохновение, светлые перспективы',
                'Смешение прошлого и настоящего, многообещающая возможность',
                'Позитивность, вдохновение',
                'Обновление, исцеление',
                'Образование, духовность, творчество',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Потери, сомнения',
                'Пессимизм, уныние, отсутствие веры',
                'Несбывшиеся надежды, разочарование, отсутствие возможностей',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: ['Оптимистичный взгляд на личную жизнь', 'Исцеление от прошлых ран'],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: ['Утрата надежды на отношения, потеря веры в себя', 'Крайняя критичность'],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Позитивность перспективы', 'Спокойная работа'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Излишний пессимизм по поводу работы',
                'Отсутствие энтузиазма и мотивации, влияющее на работу',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Оптимистичный настрой и благодарность уже существующим успехам',
                'Достижение финансовых целей',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Отчаяние по поводу финансового положения, которое можно изменить поиском решения при более оптимистичном настрое',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Улучшение ситуации, благоприятные изменения, позитивный исход'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Утрата веры, уныние',
                'Потеря выгодной возможности из-за излишней самокритичность',
            ],
        },
    ],
};