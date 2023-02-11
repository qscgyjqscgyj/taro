import { CardData } from 'shared/types/cards';

import { getFullHost } from 'src/services';

export const swordsSix: CardData = {
    name: 'ШЕСТЁРКА МЕЧЕЙ',
    altNames: ['шестёрка мечей', 'шестёрка шпаг', 'шестерка мечей', 'шестерка шпаг'],
    arcana: { type: 'minor', suit: 'swords' },
    subTitle: 'Неприятности позади',
    image: `${getFullHost()}/images/swordsSix/images/swordsSix.png`,
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Движение вперед, перемены',
                'Уход, оставление позади, принятие уроков',
                'Путешествие, командировка',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Застревание в прошлом, возвращение к неприятностям',
                'Бегство от проблем, ловушка, отчаяние',
                'Нежелательное предложение, признание, заявление',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Примирение и продолжение отношений',
                'Прекращение отношений',
                'Готовность оставить прошлое и начать новые отношения',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Нежелание двигаться дальше, цепляние за несчастливые отношения',
                'Эмоциональное опустошение, ощущение невозможности изменить свою жизнь',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Уход от стрессовой ситуации на рабочем месте',
                'Переход к более спокойной работе, проектам',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Создание конфликтов, самосаботаж',
                'Невозможность изменить ситуацию на работе/сменить карьеру',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: ['Возобновление материальной стабильности', 'Извлечение уроков из прошлого'],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Избегание проблем с финансами',
                'Совет — честно взглянуть на ситуацию и, возможно, обратиться за помощью',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Уxoд oт пpeжнeгo, пepecмoтp cвoиx opиeнтиpoв, пoиcк нoвыx пepcпeктив',
                'Уcтpeмлённocть к лучшему, вера в ceбя и coбcтвeнныe cилы',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Cильнaя пpивязaннocть, нe дaющaя пpoдвигaтьcя впepёд, pacти',
                'Зaвиcaниe в coбcтвeнныx cтpaxax и нeувepeннocти в cвoиx cилax',
                'Цeпляниe зa coбcтвeнныe пpeдcтaвлeния или пpoшлыe пaттepны',
            ],
        },
    ],
};
