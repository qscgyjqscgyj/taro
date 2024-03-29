import { CardData } from 'shared/types/cards';

export const pentaclesThree: CardData = {
    name: 'ТРОЙКА ПЕНТАКЛЕЙ',
    altNames: ['тройка пентаклей', 'тройка монет', 'тройка денариев'],
    arcana: { type: 'minor', suit: 'pentacles' },
    subTitle: 'Хорошая работа',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Командная работа, общие цели, сотрудничество',
                'Помощь, объединение энергии',
                'Ученичество, усилия',
                'Мастерство, артистизм, известность',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Отсутствие сплоченности и командной работы',
                'Апатия, слабая мотивация, посредственность',
                'Конфликты, эго, конкуренция, отсутствие уважения',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Сбалансированная командная работа с партнёром, дополнение друг-друга',
                'Служебный роман, симпатия в месте занятия творческим увлечением',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Неравноценное распределение обязанностей в отношениях',
                'Кто-то не является хорошим партнером в любви',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: [
                'Работа в команде',
                'Сотрудничество с людьми с различными навыками и мнениями',
                'Обучение, повышение квалификации',
            ],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Разлад в отношениях с коллегами',
                'Интриги, конкуренция и политика на рабочем месте',
                'Плохие результаты в учёбе',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Сотрудничество с финансово-грамотными человеком',
                'Обучение и приведение порядка в финансах',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: ['Избегание финансовых дел', 'Уклонение от изучения финансов'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: ['Уверенное улучшение ситуации'],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: [
                'Нехватка умений для того, чтобы справиться с проблемами',
                'Будет тяжело справиться с ролью лидера, лучше предпочесть роль исполнителя, в данной ситуации',
            ],
        },
    ],
};
