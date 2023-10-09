import { CardData } from 'shared/types/cards';

export const wandsFive: CardData = {
    name: 'ПЯТЁРКА ЖЕЗЛОВ',
    altNames: [
        'пятерка жезлов',
        'пятерка палок',
        'пятерка посохов',
        'пятерка скипетров',
        'пятёрка жезлов',
        'пятёрка палок',
        'пятёрка посохов',
        'пятёрка скипетров',
    ],
    arcana: { type: 'minor', suit: 'wands' },
    subTitle: 'Притворная драка',
    description: [
        {
            category: 'Общее',
            direction: 'normal',
            textData: [
                'Конфликт, конкуренция, соперники',
                'Споры, агрессия, напряжение',
                'Неприятности, потери, отсутствие почвы под ногами',
            ],
        },
        {
            category: 'Общее',
            direction: 'reversed',
            textData: [
                'Прекращение конфликта, избежание конфликтов',
                'Сотрудничество, соглашения, перемирия, гармония, мир',
                'Старание, стойкость',
            ],
        },
        {
            category: 'Любовь',
            direction: 'normal',
            textData: [
                'Соперничество с другими за внимание со своим потенциальным партнёром',
                'Конфликт между влюбленными',
                'Игривое подшучивание',
            ],
        },
        {
            category: 'Любовь',
            direction: 'reversed',
            textData: [
                'Избегание конфликтов, которое не помогает решить его',
                'Совет прикладывать силы и уделять внимание партнёру для разрешения разногласий',
            ],
        },
        {
            category: 'Карьера',
            direction: 'normal',
            textData: ['Элемент соперничество в работе, конкурентная среда', 'Конфликт на работе'],
        },
        {
            category: 'Карьера',
            direction: 'reversed',
            textData: [
                'Разрешение конфликта, уменьшение конкуренции на рабочем месте',
                'Отсутствие значимых результатов в работе',
                'Избегание конфликтов на работе',
            ],
        },
        {
            category: 'Финансы',
            direction: 'normal',
            textData: [
                'Финансовая нестабильность',
                'Приложить много усилий для заработка',
                'Конфликты из-за денег',
            ],
        },
        {
            category: 'Финансы',
            direction: 'reversed',
            textData: [
                'Облегчение и спокойствие после финансового стресса',
                'Эскалация конфликтов по финансовым вопросам',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'normal',
            textData: [
                'Конфликты и пересечение интересов',
                'Борьба, соперничество',
                'Толчок к активным действиям и продуктивности',
            ],
        },
        {
            category: 'Текущая ситуация',
            direction: 'reversed',
            textData: ['Скрытое соперничество, пассивная конфронтация'],
        },
    ],
};